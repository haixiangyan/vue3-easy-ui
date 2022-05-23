<template>
<div class="vue3-tabs">
  <div class="vue3-tabs-nav">
    <div
      @click="select(t)"
      class="vue3-tabs-nav-item"
      :class="{ selected: t === selected }"
      :key="t"
      v-for="t in titles">
      {{t}}
    </div>
  </div>
  <div class="vue3-tabs-content">
    <component class="vue3-tabs-content-item" v-for="(c, index) in defaults" :is="c" :key="index" :class="{ selected: c.props.title === selected }" />
  </div>
</div>
</template>

<script lang="ts">
import Tab from '../lib/Tab.vue';

export default {
  name: "Tabs",
  props: {
    selected: {
      type: String,
    }
  },
  setup(props, context) {
    const defaults = context.slots.default();

    defaults.forEach(tag => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tabs')
      }
    })

    const current = defaults.find(tag => {
      return tag.props.title === props.selected
    })

    const titles = defaults.map(tag => {
      return tag.props.title;
    })

    const select = (title: string) => {
      context.emit('update:selected', title)
    }

    return { defaults, titles, current, select }
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
    &-item {
      display: none;
      &.selected {
        display: block;
      }
    }
  }
}
</style>
