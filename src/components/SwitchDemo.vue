<template>
  <div>
    <Switch v-model:value="y"></Switch>
  </div>
</template>

<script lang="ts">
import Switch from "../lib/Switch.vue";
import {ref} from "vue";

export default {
  name: "SwitchDemo",
  components: {
    Switch
  },
  setup() {
    const y = ref(true);

    return { y }
  }
}
</script>

<style scoped lang="scss">

</style>
