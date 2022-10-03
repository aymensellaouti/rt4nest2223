import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { NextFunction, Request, Response } from 'express';
import { useContainer } from 'class-validator';

/* function testMid(request: Request, response: Response, next: NextFunction) {
  if (request.headers.authorization === 'myToken') {
    next();
  } else {
    response.write('Where is the Token ???');
    response.end();
    return;
  }
} */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  /*   app.use(testMid); */
  await app.listen(3000);
}
bootstrap();
