/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './middlewares/second.middleware';
import * as morgan from 'morgan';
import { TimeInterceptor } from './interceptors/time.interceptor';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.use(logger);
  console.log('Notre port', process.env.PORT);

  app.enableCors({ origin: 'http://localhost:4200' });
  app.use(morgan('dev'));
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.useGlobalInterceptors(new TimeInterceptor());
  await app.listen(process.env.PORT || 3003);
}
bootstrap();
