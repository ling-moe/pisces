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

const noop = () => {};

function createProxy(httpClient: HttpClient) {
  const proxy: unknown = new Proxy(noop, {
    get(_obj, key) {
      if (typeof key !== 'string' || key === 'then') {
        // special case for if the proxy is accidentally treated
        // like a PromiseLike (like in `Promise.resolve(proxy)`)
        return undefined;
      }
      return new Proxy(noop, {
        get(_obj, key) {
          if (typeof key !== 'string' || key === 'then') {
            // special case for if the proxy is accidentally treated
            // like a PromiseLike (like in `Promise.resolve(proxy)`)
            return undefined;
          }
          return new Proxy(noop, {
            apply: (target: any, thisArg: any, argumentsList: any[]) => {
              const { method, path } = methodToHttp(target.name);
              const paramNames = extractMethodParams(target);
              const body = zipObject(paramNames, argumentsList);
              let ob;
              if (method === 'GET') {
                ob = httpClient.request(new HttpRequest(method, path, { params: body }));
              } else {
                ob = httpClient.request(new HttpRequest(method, path, body));
              }
              return ob;
            },
          });
        }
      });
    },
  });

  return proxy;
}
