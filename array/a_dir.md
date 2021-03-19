### 单数组参数方法
#### 返回数组元素
1. head
    * url: https://www.lodashjs.com/docs/lodash.head
1. last
    * url: https://www.lodashjs.com/docs/lodash.last
1. nth (获取数组的第n个元素，负数为倒数)
    * url: https://www.lodashjs.com/docs/lodash.nth
#### 返回当前数组部分内容
##### 返回值在数组中数组是连续的
1. take
    * url:
        * https://www.lodashjs.com/docs/lodash.take
        * https://www.lodashjs.com/docs/lodash.takeWhile
        * https://www.lodashjs.com/docs/lodash.takeRight
        * https://www.lodashjs.com/docs/lodash.takeRightWhile
1. drop
    * url:
        * https://www.lodashjs.com/docs/lodash.drop
        * https://www.lodashjs.com/docs/lodash.dropWhile
        * https://www.lodashjs.com/docs/lodash.dropRight
        * https://www.lodashjs.com/docs/lodash.dropRightWhile
1. tail (获取除了第一个元素以外的数组列表)
    * 演示代码:暂无
    * url: https://www.lodashjs.com/docs/lodash.tail
1. initial (获取除了最后一个元素以外的数组列表)
    * 演示代码:暂无
    * url: https://www.lodashjs.com/docs/lodash.initial
##### 返回值在数组中数组可能是不连续的
1. compact (获取一个去除假值后的数组)
    url: https://www.lodashjs.com/docs/lodash.compact
1. uniq
    * url: 
        * https://www.lodashjs.com/docs/lodash.uniq 
        * https://www.lodashjs.com/docs/lodash.uniqBy
        * https://www.lodashjs.com/docs/lodash.uniqWith
#### 返回多个数组
1. chunk (数组切片)
    url: https://www.lodashjs.com/docs/lodash.chunk

### 多数组参数方法
#### 集合计算
1. union(并集)
    * url: 
        * https://www.lodashjs.com/docs/lodash.union 
        * https://www.lodashjs.com/docs/lodash.unionBy
        * https://www.lodashjs.com/docs/lodash.unionWith 
1. intersection(交集)
    * url: 
        * https://www.lodashjs.com/docs/lodash.intersection 
        * https://www.lodashjs.com/docs/lodash.intersectionBy
        * https://www.lodashjs.com/docs/lodash.intersectionWith 
1. difference(补集)
    * url: 
        * https://www.lodashjs.com/docs/lodash.difference 
        * https://www.lodashjs.com/docs/lodash.differenceBy
        * https://www.lodashjs.com/docs/lodash.differenceWith 
1. xor(并集补交集)
    * url: 
        * https://www.lodashjs.com/docs/lodash.xor 
        * https://www.lodashjs.com/docs/lodash.xorBy
        * https://www.lodashjs.com/docs/lodash.xorWith

### 其他
1. fromPairs 
    * 演示代码:[链接](./fromPair.js)
    * url: https://www.lodashjs.com/docs/lodash.fromPairs
1. zip
    * 演示代码:[链接](./zipObject.js)
    * url:
        * https://www.lodashjs.com/docs/lodash.zip 
        * https://www.lodashjs.com/docs/lodash.zipObject
        * https://www.lodashjs.com/docs/lodash.zipObjectDeep
        * https://www.lodashjs.com/docs/lodash.zipWith
1. unzip
    * url
        * https://www.lodashjs.com/docs/lodash.unzip 
        * https://www.lodashjs.com/docs/lodash.unzipWith
1. remove **数组会被改变** (移除判断函数返回为真的元素)
    * url: https://www.lodashjs.com/docs/lodash.remove
1. pull **数组会被改变**
    * url:
        * https://www.lodashjs.com/docs/lodash.pull
        * https://www.lodashjs.com/docs/lodash.pullAt
        * https://www.lodashjs.com/docs/lodash.pullAll
        * https://www.lodashjs.com/docs/lodash.pullAllBy
        * https://www.lodashjs.com/docs/lodash.pullAllWith