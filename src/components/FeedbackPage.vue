<script setup>
import FeedbackItem from './FeedbackItem.vue';

import { ref } from 'vue';

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
        <div class="feedback__content__wrapper__toggle left">
          <button @click="prevFeedback" class="feedback__content__icon__button">
            <i class="fa-solid fa-chevron-left"></i>
          </button>
        </div>
        <FeedbackItem :position="getPosition(1)" />
        <div class="feedback__content__wrapper__toggle right">
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

  &__content {
    width: 100%;

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
    }

    &__divider {
      width: 50px;
      height: 2px;
      margin: 0 auto 24px;
      background-color: $text-divider;
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
    }

    &__wrapper {
      display: flex;
      justify-content: center;
      gap: 20px;
      position: relative;

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
