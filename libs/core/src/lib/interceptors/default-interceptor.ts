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
  constructor(private toast: ToastrService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.url.includes('/api/')) {
      return next.handle(req);
    }

    return next.handle(req).pipe(mergeMap((event: HttpEvent<any>) => this.handleOkReq(event)));
  }

  private handleOkReq(event: HttpEvent<any>): Observable<any> {
    if (event instanceof HttpResponse) {
      const body = event.body;
      if (body && 'error' in body) {
        this.toast.error(body.msg);
        return throwError(() => []);
      }
    }
    // Pass down event if everything is OK
    return of(event);
  }
}
