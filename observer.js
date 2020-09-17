const data = {
  name: 'xixi',
  age: 4,
  data: {
    a: 1,
    b: 4
  },
  arr: [1,2,3,4,5]
}

//模拟页面渲染
function render() {
  console.log('页面渲染')
}

// 重写数组方法
const arrayProto = Array.prototype;
const arrayMethods = Object.create(arrayProto);
['push', 'pop','shift', 'unshift', 'splice', 'sort', 'reverse'].forEach( method => {
  arrayMethods[method] = function () {
    arrayProto[method].call(this, ...arguments);
    render()
  }
})

//监听对象的属性
function defineReactive(data, key, value) {
  observer(value)
  Object.defineProperty(data, key, {
    //获取
    get () {
      console.log('获取值:' + key.toString())
      return value
    },
    // 设置
    set (newValue) {
      console.log('设置值:' + key.toString());
      if (value === newValue ) {
        return
      }
      value = newValue;
      render();
    }
  })
}

function observer (data) {
  // 观察数组
  if (Array.isArray(data)) {
    data.__proto__ = arrayMethods;
    return;
  }
  // 观察对象
  if( typeof data === 'object') {
    for(let key in data) {
      defineReactive(data, key, data[key])
    }
  }
}

function $set(data, key, value) {
  if (Array.isArray(data)) {
    data.__proto__ = arrayMethods;
    data.splice(key, 1, value);
    return value;
  }
  defineReactive(data,key, value);
  render();
  return value
}

function $delete(data, key) {
  if (Array.isArray(data)) {
    data.__proto__ = arrayMethods;
    data.splice(key, 1);
    return;
  }
  delete data[key];
  render();
}