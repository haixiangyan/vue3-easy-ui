<template>
<div>
  <TopNav></TopNav>

  <div class="banner">
    <h1>简单 UI</h1>
    <h2>一个简单的 UI 框架</h2>
    <p class="actions">
      <a href="https://github.com/haixiangyan/vue3-easy-ui" target="_blank">Github</a>
      <router-link to="/docs">开始</router-link>
    </p>
  </div>
</div>
</template>

<script>
import TopNav from '../components/TopNav.vue';

export default {
  name: "Home",
  components: {
    TopNav,
  },
}
</script>

<style scoped lang="scss">
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: lightgreen;
  > .actions{
    padding: 8px 0;
    a {
      margin:0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
</style>
