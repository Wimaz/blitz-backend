import { Injectable } from '@nestjs/common';
import { readFile } from 'fs/promises'

@Injectable()
export class AppService {
  getHello(): string {
    console.log("LOL")
    return 'Hello World!';
  }

  async getLibrary(): Promise<any> {
      const data = await readFile('library-noimgs.json', 'utf-8');      
      return data;
  }
}
