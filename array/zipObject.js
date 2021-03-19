const _ = require("lodash"); 

const chartData = [['张建.age','晓峰','吕涛'],[10,23,40]]

// const codeNumObj = chartData[0].reduce((pre,cur,index)=>{
//   pre[cur]=chartData[1][index]
//   return pre
// },{})

const codeNumObj = _.zipObjectDeep(chartData[0],chartData[1])

console.log("codeNumObj 张建", codeNumObj, codeNumObj['张建']);
