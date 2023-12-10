<script setup>
import FeedbackItem from './FeedbackItem.vue';

import { ref, onMounted, onBeforeUnmount } from 'vue';

const currentIndex = ref(0);

const prevFeedback = () => {
  currentIndex.value = (currentIndex.value - 1 + 3) % 3;
};

const nextFeedback = () => {
  currentIndex.value = (currentIndex.value + 1) % 3;
};

const getPosition = (index) => {
  const positions = ['left', 'center', 'right'];
  const adjustedIndex = (currentIndex.value + index) % 3;
  return positions[adjustedIndex];
};

const showPrevButton = ref(true);
const showNextButton = ref(true);

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});

const handleResize = () => {
  const screenWidth = window.innerWidth;
  showPrevButton.value = screenWidth > 992;
  showNextButton.value = screenWidth > 992;
};
</script>

<template>
  <section class="feedback">
    <div class="feedback__content container">
      <h3 class="feedback__content__title">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      </h3>
      <div class="feedback__content__divider"></div>
      <p class="feedback__content__about">Lorem ipsum dolor sit ame</p>
      <div class="feedback__content__wrapper">
        <FeedbackItem :position="getPosition(0)" />
        <div
          class="feedback__content__wrapper__toggle left"
          v-if="showPrevButton"
        >
          <button @click="prevFeedback" class="feedback__content__icon__button">
            <i class="fa-solid fa-chevron-left"></i>
          </button>
        </div>
        <FeedbackItem :position="getPosition(1)" />
        <div
          class="feedback__content__wrapper__toggle right"
          v-if="showNextButton"
        >
          <button @click="nextFeedback" class="feedback__content__icon__button">
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
        <FeedbackItem :position="getPosition(2)" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';

.feedback {
  display: flex;
  justify-content: center;
  margin: 52px auto 50px;

  @media screen and (max-width: map-get($breakpoints, 'sm')) {
    margin: 32px auto 12px;
  }

  @media screen and (max-width: map-get($breakpoints, 'md')) {
    margin: 36px auto 14px;
  }

  &__content {
    width: 100%;

    @media screen and (max-width: map-get($breakpoints, 'sm')) {
      margin: 20px;
    }

    @media screen and (max-width: map-get($breakpoints, 'md')) {
      margin: 20px;
    }

    @media screen and (max-width: map-get($breakpoints, 'lg')) {
      margin: 20px;
    }

    &__title {
      margin: 0;
      text-align: center;
      padding: 0 0 30px;
      font-family: $base-font;
      font-size: 38px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%;
      color: $text;

      @media screen and (max-width: map-get($breakpoints, 'sm')) {
        padding: 0 0 14px;
        font-size: 28px;
      }

      @media screen and (max-width: map-get($breakpoints, 'md')) {
        padding: 0 0 18px;
        font-size: 30px;
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

    &__about {
      margin: 0 auto 54px;
      text-align: center;
      font-family: $base-font;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 149.487%;
      color: $text-divider;

      @media screen and (max-width: map-get($breakpoints, 'sm')) {
        margin: 0 auto 24px;
        font-size: 16px;
      }

      @media screen and (max-width: map-get($breakpoints, 'md')) {
        margin: 0 auto 26px;
        font-size: 16px;
      }
    }

    &__wrapper {
      display: flex;
      justify-content: center;
      gap: 20px;
      position: relative;

      @media screen and (max-width: map-get($breakpoints, 'sm')) {
        flex-direction: column;
      }

      @media screen and (max-width: map-get($breakpoints, 'md')) {
        flex-direction: column;
      }

      @media screen and (max-width: map-get($breakpoints, 'lg')) {
        flex-direction: column;
      }

      &__toggle {
        position: absolute;
        top: 50%;
        display: flex;
        align-items: center;
        flex: 1;
        padding: 0;

        &.left {
          left: 31%;
        }
        &.right {
          right: 31%;
        }
      }
    }
  }

  .feedback__content__icon__button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 54px;
    height: 54px;
    background-color: $accent-color;
    color: $text;
    border-radius: 50%;
    cursor: pointer;
    border: none;
    transition: all 0.3s;

    &:hover {
      border-radius: 50%;
      scale: 1.1;
    }

    &:active {
      box-shadow: 0 5px #666;
      transform: translateY(4px);
    }
  }
}
</style>
