<script setup>
import TabView from '../components/TabView.vue';

import { ref } from 'vue';

const tabs = [
  {
    name: 'Header I',
    label: 'Header I'
  },
  {
    name: 'Header II',
    label: 'Header II'
  },
  {
    name: 'Header III',
    label: 'Header III'
  },
  {
    name: 'Header IV',
    label: 'Header IV'
  }
];

const selectedTab = ref('Header I');

const changeTab = (tabName) => {
  selectedTab.value = tabName;
};
</script>

<template>
  <section class="work-examples">
    <div class="work-examples__content container">
      <h2 class="work-examples__title">Work Examples</h2>
      <div class="work-examples__divider"></div>
      <p class="work-examples__desc">Lorem ipsum dolor sit amet</p>
      <TabView :names="tabs" :selectedTab="selectedTab" @changeTab="changeTab">
        <div v-if="selectedTab === 'Header I'">
          Ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <div v-if="selectedTab === 'Header II'">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
        <div v-if="selectedTab === 'Header III'">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div v-if="selectedTab === 'Header IV'">
          Ut enim ad minim veniam, quis nostrud exercitation
        </div>
      </TabView>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';

.work-examples {
  display: flex;
  justify-content: center;
  margin: 52px auto 30px;

  &__title {
    margin: 0;
    text-align: center;
    padding: 0 0 30px;
    font-family: $base-font;
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    color: $text;
  }

  &__divider {
    width: 50px;
    height: 2px;
    margin: 0 auto 24px;
    background-color: $text-divider;
  }

  &__desc {
    margin: 0 auto 44px;
    text-align: center;
    font-family: $base-font;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 149.487%;
    color: $text-divider;
  }
}
</style>
