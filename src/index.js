import { log } from './modules/log';

log('Max');

const a = {
  a: 1
};

const b = {
  b: 2
};

const c = {
  ...a,
  ...b
};

console.log(c);
