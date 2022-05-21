<template>
<div class="layout">
  <TopNav class="nav"></TopNav>

  <div class="content">
    <aside v-if="menuVisible">
      <h2>组件列表</h2>
      <ol>
        <li>
          <router-link to="/docs/switch">Switch 组件</router-link>
        </li>
        <li>
          <router-link to="/docs/button">Button 组件</router-link>
        </li>
        <li>
          <router-link to="/docs/dialog">Dialog 组件</router-link>
        </li>
        <li>
          <router-link to="/docs/tabs">Tabs 组件</router-link>
        </li>
      </ol>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';
import {inject, Ref} from "vue";

export default {
  name: "Docs",
  components: {
    TopNav,
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible")

    return { menuVisible }
  }
}
</script>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: lightgreen;
  }
}
aside {
  background: lightblue;
  width: 150px;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
    }
  }
}
main {
  overflow: auto;
}
</style>
