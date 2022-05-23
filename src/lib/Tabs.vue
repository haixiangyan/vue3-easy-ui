<template>
<div>
  <div :key="t" v-for="t in titles">{{t}}</div>
  <component v-for="(c, index) in defaults" :is="c" :key="index"></component>
</div>
</template>

<script>
import Tab from '../lib/Tab.vue';

export default {
  name: "Tabs",
  setup(props, context) {
    const defaults = context.slots.default();

    defaults.forEach(tag => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tabs')
      }
    })

    const titles = defaults.map(tag => {
      return tag.props.title;
    })

    return { defaults, titles }
  }
}
</script>

<style scoped>

</style>
