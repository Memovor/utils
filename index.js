// 对象字符串转化成树形结构方法
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

// 两数组合并为一个数组
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