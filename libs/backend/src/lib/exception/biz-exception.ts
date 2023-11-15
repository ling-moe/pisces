import { HttpException, HttpStatus } from '@nestjs/common';
import { ErrorMessage } from './filters/exception.types';

export class BizException extends HttpException {
  constructor(message: string) {
    super(<ErrorMessage>{ fail: true, error: message, message: message }, HttpStatus.OK);
  }
}
