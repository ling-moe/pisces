import { Controller, Get, MiddlewareConsumer, Module } from '@nestjs/common';
import { UserService } from './nestjs.service';
import {  Router } from 'express';

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
  configure(consumer: MiddlewareConsumer) {
    const router = Router();
    router.get('/example', (req, res) => 'hello example');
    //forRoutes起到controller的作用
    consumer.apply(router).forRoutes('/*');
    
  }
}

function MusubiProvider(interfaces: string[]){

}
