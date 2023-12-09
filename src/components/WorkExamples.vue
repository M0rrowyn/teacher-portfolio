<script setup>
import TabView from '../components/TabView.vue';
import DownloadPdfLink from './DownloadPdfLink.vue';

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
        <div class="work-examples__content" v-if="selectedTab === 'Header I'">
          <h3 class="work-examples__content__title">Title I</h3>
          <p class="work-examples__content__about">
            Ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <DownloadPdfLink />
        </div>
        <div v-if="selectedTab === 'Header II'">
          <h3 class="work-examples__content__title">Title II</h3>
          <p class="work-examples__content__about">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <DownloadPdfLink />
        </div>
        <div v-if="selectedTab === 'Header III'">
          <h3 class="work-examples__content__title">Title III</h3>
          <p class="work-examples__content__about">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <DownloadPdfLink />
        </div>
        <div v-if="selectedTab === 'Header IV'">
          <h3 class="work-examples__content__title">Title IV</h3>
          <p class="work-examples__content__about">
            Ut enim ad minim veniam, quis nostrud exercitation
          </p>
          <DownloadPdfLink />
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
  margin: 52px auto 0px;

  @media screen and (max-width: map-get($breakpoints, 'sm')) {
    margin: 32px auto 12px;
  }

  @media screen and (max-width: map-get($breakpoints, 'md')) {
    margin: 36px auto 14px;
  }

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

    @media screen and (max-width: map-get($breakpoints, 'sm')) {
      padding: 0 0 14px;
      font-size: 28px;
      font-weight: 500;
    }

    
    @media screen and (max-width: map-get($breakpoints, 'md')) {
      padding: 0 0 18px;
      font-size: 30px;
      font-weight: 500;
    }
  }

  &__divider {
    width: 50px;
    height: 2px;
    margin: 0 auto 24px;
    background-color: $text-divider;

    @media screen and (max-width: map-get($breakpoints, 'sm')) {
      margin: 0 auto 16px;
    }

    @media screen and (max-width: map-get($breakpoints, 'md')) {
      margin: 0 auto 18px;
    }
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

    @media screen and (max-width: map-get($breakpoints, 'sm')) {
      margin: 0 auto 26px;
      font-size: 16px;
    }

    @media screen and (max-width: map-get($breakpoints, 'md')) {
      margin: 0 auto 24px;
      font-size: 16px;
    }
  }

  &__content {
    margin: 0;

    @media screen and (max-width: map-get($breakpoints, 'sm')) {
      margin: 12px;
    }

    @media screen and (max-width: map-get($breakpoints, 'md')) {
      margin: 14px;
    }

    @media screen and (max-width: map-get($breakpoints, 'lg')) {
      margin: 16px;
    }

    @media screen and (max-width: map-get($breakpoints, 'xl')) {
      margin: 18px;
    }

    @media screen and (max-width: map-get($breakpoints, 'xxl')) {
      margin: 20px;
    }

    &__content__title {
      color: $dark-color;
      font-family: $base-font;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;

      @media screen and (max-width: map-get($breakpoints, 'sm')) {
        font-size: 16px;
      }

      @media screen and (max-width: map-get($breakpoints, 'md')) {
        font-size: 18px;
      }
    }

    &__content__about {
      font-family: $base-font;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 149.487%;
      color: $text-divider;
    }

    @media screen and (max-width: map-get($breakpoints, 'sm')) {
      font-size: 16px;
    }
  }
}
</style>
