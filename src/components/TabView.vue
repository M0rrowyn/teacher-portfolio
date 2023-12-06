<script setup>
import { defineProps, defineEmits } from 'vue';

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
  <div class="tab">
    <div class="tab__nav">
      <span
        v-for="tab in names"
        :key="tab.name"
        :class="['tab__nav__item', { selected: tab.name === selectedTab }]"
        @click="clickOnTab(tab.name)"
        >{{ tab.label }}</span
      >
    </div>
    <div class="tab__content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';

.tab {
  background-color: $light-color;
  border-radius: 10px;

  &__nav {
    display: flex;
    align-items: center;
    padding-bottom: 30px;

    &__item {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 60px;
      margin-right: 20px;
      padding: 0 40px;
      border-radius: 7px;
      cursor: pointer;
      border: 1px solid $accent-color;
      font-family: $base-font;
      color: $text;
      background: $background-color;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;

      &:hover {
        background: $accent-color;
        transition: 0.3s;
      }

      &.selected {
        background: $accent-color;
        color: $text;
      }
    }
  }
}
</style>
