<template>
<div class="vue3-tabs">
  <div class="vue3-tabs-nav" ref="container">
    <div
      @click="select(t)"
      class="vue3-tabs-nav-item"
      :class="{ selected: t === selected }"
      v-for="t in titles"
      :key="t"
      :ref="el => { if (t === selected) selectedItem = el }"
    >
      {{t}}
    </div>
    <div class="vue3-tabs-nav-indicator" ref="indicator"></div>
  </div>
  <div class="vue3-tabs-content">
    <component
      class="vue3-tabs-content-item"
      v-for="(c, index) in defaults"
      :is="c"
      :key="index"
      :class="{ selected: c.props.title === selected }"
    />
  </div>
</div>
</template>

<script lang="ts">
import Tab from '../lib/Tab.vue';
import {ref, watchEffect} from "vue";

export default {
  name: "Tabs",
  props: {
    selected: {
      type: String,
    }
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);

    // 只在第一次渲染执行
    watchEffect(() => {
      if (!selectedItem.value || !indicator.value) {
        return;
      }

      const { width } = selectedItem.value.getBoundingClientRect();

      indicator.value.style.width = width + 'px';

      // 容器 left
      const { left: containerLeft } = container.value.getBoundingClientRect();
      // 左边 nav 的 left
      const { left: resultLeft } = selectedItem.value.getBoundingClientRect();
      const left = resultLeft - containerLeft;

      indicator.value.style.left = left + 'px';
    });

    const defaults = context.slots.default();
    defaults.forEach(tag => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tabs')
      }
    })

    const titles = defaults.map(tag => {
      return tag.props.title;
    })

    const select = (title: string) => {
      context.emit('update:selected', title)
    }

    return { defaults, titles, select, indicator, container, selectedItem }
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
    position: relative;

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

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
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
