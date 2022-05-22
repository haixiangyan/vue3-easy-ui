<template>
  <div>
    <div>Dialog 示例</div>
    <h1>示例1</h1>
    <div style="position: relative; z-index: 1;">
      <Button @click="toggle">Toggle</Button>
      <Dialog v-model:visible="x" :ok="f1" :cancel="f2">
        <template v-slot:title>
          <strong>加粗的标题</strong>
        </template>
        <template v-slot:content>
          <p>你好</p>
          <p>hi</p>
        </template>
      </Dialog>
    </div>
    <h1>示例2</h1>
    <div>
      <Button @click="showDialog">showDialog</Button>
    </div>
  </div>

 <div style="position: relative; z-index: 2; width: 300px; height: 300px; background: red"></div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import Dialog from '../lib/Dialog.vue';
import openDialog from '../lib/openDialog';
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

    const showDialog = () => {
      openDialog({
        title: '标题',
        content: '你好',
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        }
      })
    }

    return { x, toggle, f1, f2, showDialog }
  }
}
</script>

<style scoped>

</style>
