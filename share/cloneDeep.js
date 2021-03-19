const _ = require('lodash');
// 常见写法
const normalSource = {
  age: 18,
  name: { first: "胡", last: "晓峰" },
  say: () => console.log("hi"),
};
const lodashSource = {
  age: 18,
  name: { first: "胡", last: "晓峰" },
  say: () => console.log("hi"),
};
const desObj = {...normalSource};
const parsObj = JSON.parse(JSON.stringify(normalSource))


// lodash写法
const lodashObj = _.cloneDeep(normalSource)

console.log("desObj", desObj);
console.log("parsObj", parsObj);
console.log("lodashObj", lodashObj);

/**
 * 常见写法问题
 * 解构写法 当属性为对象时，复制过去的是指针
 * JSON.parse写法 
 *  1. 丢失方法
 *  2. 失去ts提示
*/
desObj.name.first='hu';
lodashObj.name.first = "hu";

console.log("normalSource", normalSource);
console.log("lodashSource", lodashSource);