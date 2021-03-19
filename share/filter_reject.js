const _ = require('lodash');

const autoParts = [
  { year: 3, source: '原厂', quality: 'Good' },
  { year: 6, source: '第三方', quality: 'Normal' },
  { year: 5, source: '拆车件', quality: 'Good' },
  { year: 6, source: '事故件', quality: 'Bad' },
  { year: 1, source: '原厂', quality: 'Good' },
];

const filterResult = _.filter(autoParts, (part) => part.year <= 1 && part.quality === 'Good');
console.log('filterResult', filterResult);

const rejectResult = _.reject(autoParts, (part) => part.year > 5 || part.quality === 'Bad')
console.log('rejectResult', rejectResult);