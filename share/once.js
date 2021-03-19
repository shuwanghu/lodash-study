const _ = require("lodash");

// 常见写法
function say(word) {
  console.log(word);
}
function lodashSay(word) {
  console.log(word);
}


function once(fun, param) {
  if (once.time >= 1) return
  once.time++;
  fun(param);
}
once.time = 0

once(say, 'hi');
once(say, 'hi');


const onceSay = _.once(lodashSay)

onceSay('lodash hi')
onceSay('lodash hi')