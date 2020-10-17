<template>
  <div id="app">
    <div class="navigate">
      <div class="logo">渡一教育</div>
      <div class="nav-container">
        <router-link to="/">首页</router-link>
        <router-link to="/learn">课程学习</router-link>
        <router-link to="/student">学员展示</router-link>
        <router-link to="/about">关于</router-link>
        <router-link to="/activity">社区</router-link>
      </div>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {

  }
}
</script>

<style scoped>
.navigate {
  display: flex;
  justify-content: space-between;
  height: 60px;
  background-color: #3358f0;
  line-height: 60px;
  margin-bottom: 100px;
}
.logo {
  color: #fff;
}
.nav-container a {
  text-decoration: none;
  color: #fff;
  margin-left: 40px;
}

.navigate, .container {
  padding-left: 100px;
  padding-right: 100px;
}

</style>
