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


# 扩展_剖析Vue响应式原理
- data(Object) Vue 数据 
- 监听(Object.definepPoperty)这个对象的改
- 渲染


- 劣势
1. 需要递归观察
2. 监听不到对象的增、删属性


# Vue相关指令
- 具有特殊含义，拥有特殊功能的 特性
- attribute 特性
- 前缀 v-


## v-pre
- 跳过元素和他的子元素的编译过程
- 跳过没有指令的节点，加速编译
- 使用不多

## v-cloak
- 一直保持在元素上，知道编译结束
- 解决闪烁问题
- 使用不多

## v-once
- 只渲染一次

## v-text
- 更新元素的textContent（性能较好，不触发重排重绘）
- 替换元素中所有的文本
- 优先级高于插值表达式

textContent vs innerText
- 相同：替换子节点所有内容
- 不同： 
1. textContent 能获取子节点所有文本元素，innerText不能获取；
2. innerText受css影响，不能获取影藏元素文本
3. innerText触发重拍
4. textContent 标志方法， innerText IE引入

## v-html
- 更新元素的innerHtml
- 容易受XSS攻击
- 在可信内容上使用 不用在用户提交的内容上