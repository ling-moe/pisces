import { HttpException, HttpStatus } from '@nestjs/common';

export class BizException extends HttpException {
  constructor(message: string) {
    super({ fail: true, error: message, msg: message }, HttpStatus.OK);
  }
}
