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
        console.log(arr, obj, val, '输出')
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
      
      console.log(objTree, 'objTree')
}