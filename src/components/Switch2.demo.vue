<template>
  <Switch v-model:value="bool" disabled />
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue'
import {ref} from "vue";

export default {
  name: "Switch1.demo.vue",
  components: {
    Switch,
  },
  setup() {
    const bool = ref(false);
    return { bool }
  }
}
</script>

<style scoped>

</style>
