<template>
  <router-view></router-view>
</template>

<script lang="ts">
import {ref, provide} from "vue";
import router from "./router";

export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth;

    const isPC = width > 500;

    const menuVisible = ref(isPC)
    provide('menuVisible', menuVisible)

    router.afterEach(() => {
      if (!isPC) {
        menuVisible.value = false;
      }
    })
  }
}
</script>
