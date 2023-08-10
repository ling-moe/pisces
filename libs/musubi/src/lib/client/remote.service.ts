import { InjectionToken, Provider } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { zipObject } from 'lodash';
import { extractMethodParams, methodToHttp } from '../method-sigature.util';
import { Observable } from 'rxjs';

export type RemoteService<T> = {
  [P in keyof T]: T[P] extends (...args: infer A) => infer R ? (...args: A) => Observable<R> : any;
};

export type Consumer<T, S extends string> = Required<Record<S, RemoteService<T>>>;

export const RemoteService = new InjectionToken<Consumer<any, string>>('MUSUBI_REMOTE_SERVICE');

export const musubiProvider: Provider = {
  provide: RemoteService,
  useFactory: (httpClient: HttpClient) => MusubiServiceFactory(httpClient),
  deps: [HttpClient],
};

export function MusubiServiceFactory(httpClient: HttpClient) {
  return createProxy(httpClient);
}

const noop = () => {
  // empty
};

function createProxy(httpClient: HttpClient) {
  const proxy: unknown = new Proxy(noop, {
    get(_obj, schema) {
      if (typeof schema !== 'string' || schema === 'then') {
        // special case for if the proxy is accidentally treated
        // like a PromiseLike (like in `Promise.resolve(proxy)`)
        return undefined;
      }
      return new Proxy(noop, {
        get(_obj, methodName) {
          if (typeof methodName !== 'string' || methodName === 'then') {
            // special case for if the proxy is accidentally treated
            // like a PromiseLike (like in `Promise.resolve(proxy)`)
            return undefined;
          }
          return new Proxy(noop, {
            apply: (target: any, thisArg: any, argumentsList: any[]) => {
              const { method, path } = methodToHttp(methodName);
              const paramNames = extractMethodParams(target);
              const body = paramNames.length !== 0 ? zipObject(paramNames, argumentsList) : undefined;
              return httpClient.request(method, `${schema}/${path}`, method === 'GET' ? { params: body } : body);
            },
          });
        },
      });
    },
  });

  return proxy;
}
