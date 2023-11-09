import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { Response } from 'express';

@Catch() // 可以指定要捕获的异常类型，例如 @Catch(HttpException)
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    Logger.error(exception.stack);

    if (exception instanceof HttpException) {
      response.status(exception.getStatus()).json(exception.message);
    } else {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json(exception.message);
    }
  }
}
