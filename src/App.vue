<template>
  <router-view></router-view>
</template>

<script lang="ts">
import {ref, provide} from "vue";

export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth;

    console.log(width);

    const menuVisible = ref(width > 500)
    provide('menuVisible', menuVisible)
  }
}
</script>
