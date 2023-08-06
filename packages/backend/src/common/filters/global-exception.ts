import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { Request, Response } from 'express';

@Catch() // 可以指定要捕获的异常类型，例如 @Catch(HttpException)
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const status = 500; // 默认状态码
    const message = 'Internal server error'; // 默认错误消息

    response.status(status).json({
      statusCode: status,
      message: message,
    });
  }
}