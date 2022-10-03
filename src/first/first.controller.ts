import {
  Body,
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import {
  DefaultValuePipe,
  ParseArrayPipe,
  ParseIntPipe,
} from '@nestjs/common/pipes';
import { Logger } from '@nestjs/common/services';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { FusionStringArrayPipe } from '../pipes/fusion-string-array.pipe';
@Controller('')
export class FirstController {
  names: string[] = [];
  @Post('testpipe')
  testPipe(
    @Body(
      'skills',
      new ParseArrayPipe({ items: String }),
      FusionStringArrayPipe,
    )
    body,
  ) {
    return body;
  }
  /*   @Get(':names')
  getEliIji(): string {
    return 'Reseau taya7 arja3 ghodwa';
  } */

  @Get('obs')
  testObservable() {
    const observable = new Observable<number>((observer) => {
      let i = 5;
      const intervalId = setInterval(() => {
        if (!i) {
          observer.complete();
          clearInterval(intervalId);
        }
        console.log(i);
        observer.next(i--);
      }, 500);
    });
    return observable.pipe(
      map((element) => element * 3),
      filter((x) => x % 2 == 0),
    );
  }

  @Get('names')
  getNames(): string[] {
    return this.names;
  }

  @Post('names')
  addName(@Body('name') name: string) {
    this.names.push(name);
    return this.names;
  }

  @Get('tab/:id?')
  get(
    @Param(
      'id',
      new DefaultValuePipe(5),
      new ParseIntPipe({
        errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
      }),
    )
    id: number,
    @Query() qp,
  ) {
    const logger = new Logger(FirstController.name);
    logger.log(typeof id == 'number');
    return id;
  }

  @Get('names/:name')
  finByName(@Param() params, @Query() qp) {
    const { name } = params;
    const find = this.names.find((element) => element === name);
    if (!find) {
      throw new NotFoundException('nom innexistant');
    }
    return name;
  }
}