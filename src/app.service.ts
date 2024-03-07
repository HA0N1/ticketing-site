import { Injectable } from '@nestjs/common';
/**
 * AppService가 나를 필요로하면 언제든지 나를 주입시켜서 사용해봐
 */
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
