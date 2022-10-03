import { Global, Module } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
const UuidProvider = {
  provide: 'UUID',
  useValue: uuid,
};
const RandomProvider = {
  provide: 'RANDOM',
  useFactory: (uuid) => {
    if (new Date().getMilliseconds() % 2 == 0) {
      return uuid;
    }
    return undefined;
  },
  inject: ['UUID'],
};
class FirstService {
  constructor(private uniqueId: string = ' default') {}
  sayHello() {
    console.log('hello :)' + this.uniqueId);
  }
}
const ExampleFactoryProvider = {
  provide: 'FACTORY_EXAMPLE_PROVIDER',
  useFactory: (randomProvider?) => {
    if (randomProvider) {
      return new FirstService(randomProvider());
    }
    return new FirstService();
    //provide something
  },
  inject: [{ token: 'RANDOM', optional: true }],
};

@Global()
@Module({
  providers: [
    UuidProvider,
    RandomProvider,
    ExampleFactoryProvider,
    FirstService,
  ],
  exports: [UuidProvider, ExampleFactoryProvider],
})
export class CommonModule {}
