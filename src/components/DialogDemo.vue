<template>
  <div>
    <div>Dialog 示例</div>
    <h1>示例1</h1>
    <Button @click="toggle">Toggle</Button>
    <Dialog v-model:visible="x" :ok="f1" :cancel="f2"></Dialog>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import Dialog from '../lib/Dialog.vue';
import {ref} from "vue";

export default {
  name: "DialogDemo",
  components: {
    Button,
    Dialog
  },
  setup() {
    const x = ref(false)

    const toggle = () => {
      x.value = !x.value
    }

    const f1 = () => {
      return true;
    }
    const f2 = () => {}

    return { x, toggle, f1, f2 }
  }
}
</script>

<style scoped>

</style>
