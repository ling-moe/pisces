import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, map } from "rxjs";
import { stringify } from "json-bigint";

@Injectable()
export class SerializeInterceptor<T> implements NestInterceptor<T, string> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<string> {
    context.getArgs()[1].contentType = 'application/json'
    return next.handle().pipe(map(data => stringify(data)));
  }
}
