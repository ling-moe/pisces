import { HttpException, HttpStatus } from '@nestjs/common';

export class BizException extends HttpException {
  constructor(message: string) {
    super({ message, error: true }, HttpStatus.OK);
  }
}
