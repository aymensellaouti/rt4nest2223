/* eslint-disable prettier/prettier */
export const log = (target, key: string, value: any) => {
  console.log('target: ', target);
  console.log('key: ', key);
  console.log('value: ', value);
  return {
    value: function (...args: any[]) {
      console.log('in returned function by the decorator');

      const a = args.map((a) => JSON.stringify(a)).join();
      const result = value.value.apply(this, args);
      const r = JSON.stringify(result);
      console.log(`Call: ${key}(${a}) => ${r}`);
      return result;
    },
  };
};

/* eslint-disable prettier/prettier */
export function logProperty(target: any, key: string) {
  console.log('Property logger target :', target);
  console.log('Property logger key :', key);
}
