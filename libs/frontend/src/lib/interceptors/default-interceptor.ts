import { ErrorMessage } from '@pisces/backend';
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { ToastrService } from 'ngx-toastr';


@Injectable()
export class DefaultInterceptor implements HttpInterceptor {
  constructor(private toast: ToastrService) { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!req.url.includes('/api/')) {
      return next.handle(req);
    }

    return next.handle(req)
    .pipe(mergeMap((event: HttpEvent<ErrorMessage>) => this.handleOkReq(event)));
  }

  private handleOkReq(event: HttpEvent<ErrorMessage>): Observable<HttpEvent<unknown>> {
    if (event instanceof HttpResponse) {
      const body = event.body;
      if (body && body?.fail) {
        this.toast.error(body.message);
        return throwError(() => []);
      }
    }
    // Pass down event if everything is OK
    return of(event);
  }
}
