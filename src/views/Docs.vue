<template>
<div>
  <TopNav></TopNav>

  <div class="content">
    <aside>
      <ol>
        <li>
          <router-link to="/doc/switch">Switch 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/button">Button 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/dialog">Dialog 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
      </ol>
    </aside>
    <main>主内容</main>
  </div>
</div>
</template>

<script>
import TopNav from '../components/TopNav.vue';

export default {
  name: "Docs",
  components: {
    TopNav,
  }
}
</script>

<style scoped>

</style>
