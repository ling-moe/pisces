import { HttpException, HttpStatus } from '@nestjs/common';

export class BizException extends HttpException {
  constructor(message: string) {
    super({ message, statusCode: HttpStatus.BAD_REQUEST }, HttpStatus.BAD_REQUEST);
  }
}
