import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { FirstModule } from "../first/first.module";

@Module({
  controllers: [TestController],
  imports: [FirstModule]
})
export class TestModule {}
