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


# 条件渲染
- 根据某一个条件，判断是否要展示某一个元素

## v-if

## v-else-if

## v-else
```js
  if() {
     
  } else if () {

  } else {

  }
```

# v-show
- 控制元素隐藏或显示，与v-if作用类似

v-if vs v-show
1. v-if是惰性的，如果在初始渲染时条件为假，则什么也不做，知道第一次条件变为真时才会开始渲染条件块。v-show则不管初始条件是什么，元素总是会被渲染，并且基于css进行切换
2. v-if有更高的切换开销，v-show有更高的初始渲染开销，如果需要非常频繁的进行切换则使用v-show比较好，如果运行时条件很少改变，则v-if较好
3. v-show 不支持 template元素
4. v-show 不支持 v-else

# v-bind
- 动态的绑定一个或多个特性
- :后为传递的参数
- 动态特性名 2.6.0版本后支持
- 缩写为':'
- v-bind 无参数，且绑定一个对象，键值对为特性

## 绑定class
- 对象语法: <div id="app" :class="{red: isRed, green: isGreen}"></div>
- 数组语法: <div id="app" :class="[isRed, isGreen]"></div>
- 可以再数组语法中使用对象语法

## 绑定style
- 对象语法: <div :style="{color:'red', width: '100px', 'background-color': 'yellow'}">测试文字</div>  or <div :style="styleObj">测试文字</div>
- 数组语法: <div :style="[styleA, styleB]">测试文字</div>
- 自动添加前缀
- 多重值

- 修饰符
v-bind.xx
- camel: vue会将大写字母变小写，camel解决这个问题，保持字母大小写不变
- prop: 用于绑定dom属性
- sync

# v-on
- 监听dom事件
- this Vue的实例对象
- 简写为： @

- 好处
  - 轻松定位
  - 不需要手动绑定事件， js内非常纯粹的逻辑
  - 自动删除事件监听/事件处理

  # v-on指令的修饰符

  ## 事件修饰符

  ### .stop
  - 阻止事件冒泡

  ### .prevent
  - 阻止默认事件

  ### .capture
  - 开启事件捕获模式

  ### .self
  - 只有点击绑定元素才触发

  ### .noce
  - 只触发执行一次

  ### .passive
  - 设置addEventListeners passive 选项
  - 声明不阻止任何默认事件，提升移动端性能
  - 2.3.0+

### 注意
1. 修饰符顺序会影响效果
2. passive 和 prevent 不能同时使用

## 按键修饰符
- @keyup.enter

## 按键码
- @keyup.13

.enter
.tab
.esc
.delete
.space
.up
.left
.right
.down

## 系统按键修饰
.ctrl
.alt
.shift
.meta

.exact
- 精确控制
- 2。5.0+

## 鼠标按键修饰符
.left
.right
.middle
2.2.0+


# 列表渲染 v-for
- 利用v-for，基于数据多次渲染元素

## 数组
- <li v-for="(person, index) in persons"> {{ person }} --- {{  index  }}</li>

## 对象
- <li v-for="(person, key, index) in persons"> {{ person }} --- {{  index  }}</li>

## 数字
- <li v-for="item in 10">{{ item  }}</li>

## 字符串
- <li v-for="item in 'string'">{{ item  }}</li>

key 唯一 string/number

不建议使用index左右key的值
