import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { parse } from "json-bigint";

@Injectable()
export class DeserializeInterceptor implements HttpInterceptor {

  intercept(httpRequest: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.handleJsonResponse(httpRequest, next);
  }

  private handleJsonResponse(httpRequest: HttpRequest<unknown>, next: HttpHandler) {
    // Handle the response using the custom parser.
    return next.handle(httpRequest).pipe(map(event => this.parseJsonResponse(event)));
  }

  private parseJsonResponse(event: HttpEvent<unknown>) {
    if (event instanceof HttpResponse && typeof event.body === 'string') {
      return event.clone({body: parse(event.body)});
    } else {
      return event;
    }
  }
}
