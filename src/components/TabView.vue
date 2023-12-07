<script setup>
import { defineEmits } from 'vue';

defineProps({
  names: {
    type: Array,
    required: true
  },
  selectedTab: {
    type: String,
    required: false
  }
});

const emit = defineEmits(['changeTab']);

const clickOnTab = (tabName) => {
  emit('changeTab', tabName);
};
</script>

<template>
  <div class="tabs">
    <div class="tabs__nav">
      <span
        v-for="tab in names"
        :key="tab.name"
        :class="['tabs__nav__item', { selected: tab.name === selectedTab }]"
        @click="clickOnTab(tab.name)"
        >{{ tab.label }}</span
      >
    </div>
    <div class="tabs__content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';

.tabs {
  &__nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__item {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 90px;
      width: 24.5%;
      padding: 0 40px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      cursor: pointer;
      // border: 1px solid $accent-color;
      font-family: $base-font;
      color: $text;
      background: $accent-color;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;

      &:hover {
        background: $light-accent-color;
        transition: 0.3s;
      }

      &.selected {
        background: $light-color;
        color: $text;
      }
    }
  }

  &__content {
    padding: 32px;
    background-color: $light-color;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
}
</style>
