import { Controller, Get, Query } from '@nestjs/common';


@Controller()
export class AppController {

  @Get()
  getData(@Query("person") person: string) {
    return "";
  }
}
