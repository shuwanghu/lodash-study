const _ = require("lodash");

// 组件API裁剪，后端接口裁剪
// 常规写法
const source = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  g: 6,
  h: 7
}

const output = {
  a: source.a,
  b: source.b,
  c: source.c,
  d: source.d,
  e: source.e,
  g: source.g,
}

const output2 = {
  a: source.a,
  b: source.b
}

const lodashOutput = _.omit(source, "h");
const lodashOutput2 = _.pick(source, 'a', 'b');


console.log('_.isEqual(output, lodashOutput)', _.isEqual(output, lodashOutput));
console.log('_.isEqual(output2, lodashOutput2)', _.isEqual(output2, lodashOutput2));