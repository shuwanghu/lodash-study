const _ = require("lodash"); 
const pairs = [
  ["fred", 30],
  ["barney", 40],
  ['age',12],
  ['name','张建']
];

// const fred = pairs.find(pair=>pair[0]==='fred')[1]
// console.log('fred',fred);

// const pairsObj =  pairs.reduce((prev,current)=>{
//   prev[current[0]]=current[1]
//   return prev
// },{})

const pairsObj = _.fromPairs(pairs)
console.log("pairsObj，fred",pairsObj,pairsObj.fred);




