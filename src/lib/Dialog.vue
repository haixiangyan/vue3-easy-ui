<template>
<div>
  <div class="vue3-dialog-overlay"></div>
  <div class="vue3-dialog-wrapper">
    <header>标题</header>
    <main>
      <p>第一行字</p>
      <p>第二行字</p>
    </main>
    <footer>
      <Button>OK</Button>
      <Button>Cancel</Button>
    </footer>
  </div>
</div>
</template>

<script>
import Button from "./Button";

export default {
  name: "Dialog",
  components: {
    Button,
  }
}
</script>

<style scoped>

</style>
