const _ = require('lodash');
// 常见写法
const target = { a: 1, b: 1, c: 1 };
const lodashTarget = { a: 1, b: 1, c: 1 };
// const source = {b:2};
const source = {b:undefined};
const source2 = {c:3}

const normalMerge = {...target,...source,...source2};
const assignMerge = Object.assign(target,source,source2)


// lodash写法  
const lodashMerge = _.merge(lodashTarget, source, source2);

console.log("normalMerge", normalMerge);
console.log("assignMerge", assignMerge);
console.log("lodashMerge", lodashMerge);
/**
 * 常见写法问题: undefined 覆盖
 * lodash方法: target会被改变
 * */ 

console.log("lodashTarget", lodashTarget);
