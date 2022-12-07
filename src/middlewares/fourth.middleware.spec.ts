import { FourthMiddleware } from './fourth.middleware';

describe('FourthMiddleware', () => {
  it('should be defined', () => {
    expect(new FourthMiddleware()).toBeDefined();
  });
});
