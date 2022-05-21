<template>
  <router-view></router-view>
</template>

<script lang="ts">
import {ref, provide} from "vue";

export default {
  name: 'App',
  setup() {
    const menuVisible = ref(true)
    provide('xxx', menuVisible)
  }
}
</script>
