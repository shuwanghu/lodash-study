const _ = require("lodash");

const source = { a: 1, b: 2, c: 2 };
const include = Object.values(source).includes(1);
const _include = _.includes(source, 1)
console.log('include', include)
console.log('lodashInclude', _include);