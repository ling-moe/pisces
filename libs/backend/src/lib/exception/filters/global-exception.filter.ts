import {
  ArgumentsHost,
  Catch,
  ExceptionFilter, ForbiddenException,
  HttpException,
  HttpStatus,
  Logger, NotFoundException,
  UnauthorizedException
} from "@nestjs/common";
import { Response } from 'express';
import { ErrorMessage } from './exception.types';

@Catch() // 可以指定要捕获的异常类型，例如 @Catch(HttpException)
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    if (exception instanceof UnauthorizedException
      || exception instanceof NotFoundException
      || exception instanceof ForbiddenException) {
      Logger.error(exception.message);
    }else {
      Logger.error(exception.stack);
    }
    if (exception instanceof HttpException) {
      response.status(exception.getStatus()).json(exception.message);
    } else {
      response.status(HttpStatus.OK).json(<ErrorMessage>{ fail: true, error: 'unknown', message: exception.message });
    }
  }
}
