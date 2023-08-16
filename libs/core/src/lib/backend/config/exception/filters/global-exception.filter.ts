import { ArgumentsHost, Catch, ExceptionFilter, ForbiddenException, UnauthorizedException } from '@nestjs/common';
import { Response } from 'express';
import { BizException } from '../biz-exception';

@Catch() // 可以指定要捕获的异常类型，例如 @Catch(HttpException)
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = 500;
    let error = 'error';
    let message = 'Internal server error';

    if (exception instanceof UnauthorizedException) {
      status = 401;
      error = status.toString();
      message = 'Unauthorized';
    } else if (exception instanceof ForbiddenException) {
      status = 403;
      error = status.toString();
      message = 'Forbidden';
    } else if (exception instanceof BizException) {
      status = 500;
      error = status.toString();
      message = exception.message;
    } else {
      status = 200;
      message = exception.message;
    }
    response.status(status).json({ error, message });
  }
}
