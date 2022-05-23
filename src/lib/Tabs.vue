<template>
<div class="vue3-tabs">
  <div class="vue3-tabs-nav">
    <div class="vue3-tabs-nav-item" :key="t" v-for="t in titles">{{t}}</div>
  </div>
  <div class="vue3-tabs-content">
    <component class="vue3-tabs-content-item" v-for="(c, index) in defaults" :is="c" :key="index"></component>
  </div>
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

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.vue3-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
