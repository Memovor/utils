/**
 * 1.对象字符串转化成树形结构方法 => objToTree
 * 2.数组合并 => mergeArr
 * 3.数组去重 => repeatFun
 * 4.0-100求和 => sumFun
 * 5.求一个数组的平均值 => averageFun
 * 6.数组排序 => sortArrFun
 * @returns 
 */

function objToTree() {
    let strarr = {
        'a-b-c-d': 1,
        'a-b-c-e': 2,
        'a-b-f': 3,
        'a-j': 4
      }
  
      // 声明一个空对象，把新的结构转化为这个对象
      let objTree = {}
  
      // 定义格式化方法
      const fun = (arr, obj, val) => {
        // 不能直接使用arr.length 因为这样就把最后一项也带出来了
        for(let i=0; i< arr.length-1; i++) {
          if (!obj[arr[i]]) obj[arr[i]] = {}
  
          obj = obj[arr[i]]
        }
  
        // 最后一项直接赋值
        obj[arr[arr.length-1]] = val
      }
  
      for(let key in strarr) {
        // 调用格式化方法
        fun(key.split('-'), objTree, strarr[key])
      }
      return objToTree
}

function mergeArr () {
  // 1.concat方法 （concat方法不会改变原始数组，而是返回一个合并以后的新数组），需要进行多次的数组合并时会造成很大的内存浪费，适用于数据量比较小的场景
  var arr1 = [1, 2, 3]
  var arr2 = [4, 5, 6]
  var arr3 = arr1.concat(arr2)
  console.log(arr3) // arr3 = [1,2,3,4,5,6]

  // 2.for循环，能避免内存浪费，缺点会让代码看起来冗余
  for(var i in arr1) {
    arr2.push(arr1[i]) // arr2 = [1,2,3,4,5,6]
  }

  // 3.apply(apply方法传递的参数列表是参数数组,会改变原数组)
  arr1.push.apply(arr1, arr2) // arr1 = [1,2,3,4,5,6]
}

function repeatFun() {
  let arr = [1, 3, 6, 1, 2, 1, 6]

  // 1.for循环 +findIndex,利用findIndex 的特性，查找元素找不到就返回-1， 接下来就需要判断，如果是-1，说明没找到，就往新数组里面添加元素。
  let newArr = []
  for(var i=0; i<arr.length; i++) {
    newArr.indexOf(arr[i]) === -1 ? newArr.push(arr[i]) : newArr
  }
  
  // 2.sort 排序,利用 sort 方法进行排序。进行循环，如果原数组的第 i 项和新数组的i - 1 项不一致，就push进去。
  arr = arr.sort()
  for(var i=0; i<arr.length; i++) {
    arr[i] === arr[i-1] ? newArr : newArr.push(arr[i])
  }

  // 3.Set,ES6中新增了数据类型Set，Set的一个最大的特点就是数据不重复。Set函数可以接受一个数组（或类数组对象）作为参数来初始化，利用该特性也能做到给数组去重。
  newArr = [...new Set(arr)]

  // 4.set + Array.from, 利用 set数据不重复的特点，结合 Array.from
  newArr = Array.from(new Set(arr))

  // 5.filter + indexOf,indexOf，可以检测某一个元素在数组中出现的位置，找到返回该元素的下标，没找到返回 -1
  newArr = Array.prototype.filter.call(arr,(item, index) => {
    return arr.indexOf(item) === index
  })
  
  // 6.includes,利用 includes 检查新数组是否包含原数组的每一项。 如果不包含，就push进去
  for(var i=0; i<arr.length; i++) {
    newArr.includes(arr[i]) ? newArr : newArr.push(arr[i])
  }

  // 7.for + object, 利用对象属性名不能重复这一特点。如果对象中不存在，就可以给 push 进去+
  let map = {}
  for(var i=0; i<arr.length; i++) {
    if (!map[arr[i]]) {
      newArr.push(arr[i])
      map[arr[i]] = 1
    } else {
      map[arr[i]] ++
    }
  }

  // 8.Map,利用数据结构存值的特点
  let newMap = new Map()
  for(var i=0; i<arr.length; i++) {
    if (!newMap.has(arr[i])) {
      newMap.set(arr[i], true)
      newArr.push(arr[i])
    }
  }

  // 9.reduce
  newArr = arr.reduce((_pre, item, _index, _arr) => {
    return newArr.includes(item) ? newArr :  newArr.push(item)
  }, [])
}

function sumFun() {
  let sum=0; num=0;

  const fun = (a) => {
    sum += num
    if (num < a) {
      num ++
    }
  }
  fun(100)
}

function averageFun() {
  const arr = [10, 9, 8, 7, 6 ,5, 4, 3, 2, 1]
  return arr.reduce((pre, cur) => {
    return pre + cur
  }) / arr.length
}

function sortArrFun() {
  const arr = [10, 20, 4, 18, 90, 19, 36, 199]
  return arr.sort((a,b) => {
    return a-b
  })
}
