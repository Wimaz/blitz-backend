import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test-data')
  async getTestData(): Promise<any> {
    console.log("Haha")
    return await this.appService.getLibrary();
  }
}
