[toc]
# 课程准备
- 代码文件 github托管 clone
- 1.课程准备
- git操作
- github地址：https://github.com/DuYi-Edu/DuYi-VUE

- 谷歌 插件 vue-devtools
- 插件

- 笔记

- vscode 插件

# 开始使用vue



# Vue的响应式-1
  - 数据变化，页面重新渲染
  - vue data 在 VM实例对象上 vm.xxx

  - 为什么这样？
  > 实现响应式
  > 知道数据变化了
  > Object = { attrs: {}}
    > Object.defineProperty 数据劫持

  - 更改数据后，页面会立刻渲染吗？
  > 不会，页面渲染的操作是异步执行的
  > 同步执行栈、 异步队列（宏任务、微任务、event loop事件环）
  > 宏任务 setTimeout


- vm.$nextTick()
- Vue.nextTick()

```js
if(typeof Promise !== 'undefined') {

} else if (typeof MutationObsever !== 'undefined') {

} else if (typeof setImmediate !== 'undefined') {
  
} else {
  //setTimeout
}
```



# Vue的响应式-2

- 数组
>通过索引的方式修改数组
>修改数组长度

1. 变异方法：push, pop, shift, unshift, splice, sort, reverse
2. vm.$set(要改谁，改什么，改成啥)  Vue.set(要改谁，改什么，改成啥)
3. vm.$delete(数组，索引))

- 对象
>增、删对象
1. vm.$set(要改谁，改什么，改成啥)  Vue.set(要改谁，改什么，改成啥)
2. vm.$delete(对象，属性)
