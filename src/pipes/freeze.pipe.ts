import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class FreezePipe implements PipeTransform {
  transform(element: any) {
    return Object.freeze(element);
  }
}
