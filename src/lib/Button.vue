<template>
  <button class="button" :class="`theme-${theme}`">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: "Button",
  props: {
    theme: {
      type: String,
      default: 'button'
    }
  }
}
</script>

<style scoped lang="scss">

</style>
