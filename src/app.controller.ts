import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(@Body() bodyTest: any): string {
    console.log('🚀 ~ AppController ~ getHello ~ bodyTest:', bodyTest);
    return this.appService.getHello();
  }
}
