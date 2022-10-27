import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { FirstModule } from "./first/first.module";
import { TestModule } from "./test/test.module";
import { CommonModule } from "./common/common.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FirstEntity } from "./first/entity/first.entity";

@Module({
  imports: [
    FirstModule, TestModule, CommonModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "rt42223",
      autoLoadEntities: true,
      // entities: [FirstEntity],
      synchronize: true,
      logging: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
