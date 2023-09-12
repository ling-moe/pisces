import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable()
export class DeserializeInterceptor implements HttpInterceptor {

  intercept(httpRequest: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (httpRequest.responseType === 'json') {
      // If the expected response type is JSON then handle it here.
      return this.handleJsonResponse(httpRequest, next);
    } else {
      return next.handle(httpRequest);
    }
  }

  private handleJsonResponse(httpRequest: HttpRequest<unknown>, next: HttpHandler) {
    // Override the responseType to disable the default JSON parsing.
    httpRequest = httpRequest.clone({responseType: 'text'});
    // Handle the response using the custom parser.
    return next.handle(httpRequest).pipe(map(event => this.parseJsonResponse(event)));
  }

  private parseJsonResponse(event: HttpEvent<unknown>) {
    if (event instanceof HttpResponse && typeof event.body === 'string') {
      return event.clone<unknown>({body: JSON.parse(event.body, (key, value) => {
        if (typeof value === "string" && value.startsWith('BIGINT:')) {
          return BigInt(value.substring(8));
        }
        return value;
      })});
    } else {
      return event;
    }
  }
}
