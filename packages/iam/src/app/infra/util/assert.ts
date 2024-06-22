import { Logger } from "@nestjs/common";

export class Assert{
  static notNull(obj?: unknown){
    Logger.log(obj,!obj)
    if(!obj){
      throw new Error('obj is null')
    }
  }
}
