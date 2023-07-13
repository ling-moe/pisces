import { Controller, Get, Module } from '@nestjs/common';
import { UserService } from './nestjs.service';

@Controller()
export class UserServiceController {
  constructor(private readonly appService: UserService) {}

  @Get()
  hello(person: string) {
    return this.appService.hello(person);
  }
}

@Module({
  imports: [],
  controllers: [UserServiceController],
  providers: [UserService],
})
export class MusubiModule {
}
