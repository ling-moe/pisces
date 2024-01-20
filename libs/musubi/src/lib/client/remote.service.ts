import { mapValues } from 'lodash';
import { InjectionToken, Provider } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { methodToHttp } from '../method-sigature.util';
import { Observable } from 'rxjs';

export type Consumer<T> = {
  [P in keyof T]: T[P] extends (...args: infer A) => infer R ? (...args: A) => Observable<R> : never;
};

export const RemoteService = new InjectionToken<Consumer<any>>('MUSUBI_REMOTE_SERVICE');

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
    get(_obj, methodName) {
      if (typeof methodName !== 'string' || methodName === 'then') {
        // special case for if the proxy is accidentally treated
        // like a PromiseLike (like in `Promise.resolve(proxy)`)
        return undefined;
      }
      return new Proxy(noop, {
        apply: (target: any, thisArg: any, args: any[]) => {
          const { method, path } = methodToHttp(methodName);
          const body = {};
          Object.assign(body, args);
          if(method === 'GET'){
            return httpClient.request(method, `/${path}`, { params: mapValues(body, (v) => JSON.stringify(v)) });
          }else{
            return httpClient.request(method, `/${path}`, { body: body, headers: {'Content-Type':  'application/json'} });
          }
        },
      });
    },
  });
  return proxy;
}
