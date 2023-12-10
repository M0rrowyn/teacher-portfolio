<script setup>
import { computed } from 'vue';

const props = defineProps(['position']);
const isLeft = computed(() => props.position === 'left');
const isRight = computed(() => props.position === 'right');
const isCenter = computed(() => props.position === 'center');
</script>

<template>
  <div
    class="feedback__item"
    :class="{
      feedback__item__left: isLeft,
      feedback__item__right: isRight,
      feedback__item__center: isCenter
    }"
  >
    <div class="feedback__item__content">
      <img
        v-if="isCenter"
        class="feedback__item__img"
        src="../assets/images/sign-quotes.png"
        alt="Sign Quotes"
      />
      <p class="feedback__item__date">12/01/2023</p>
      <h4 class="feedback_item__name">Feedback from Volodymyr K.</h4>
      <p class="feedback__item__desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Venenatis a
        condimentum vitae sapien pellentesque habitant. Nullam eget felis eget
        nunc.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';

.feedback__item {
  display: flex;
  flex-direction: column;
  background-color: $light-color;
  border-radius: 10px;
  max-height: 100%;
  max-width: 100%;

  &__left {
    background-color: $light-blue;
    background: linear-gradient(to left, rgba(237, 241, 247, 0.5), transparent);
    color: rgba(0, 0, 0, 0.4);
  }

  &__right {
    background-color: $light-blue;
    background: linear-gradient(
      to right,
      rgba(237, 241, 247, 0.5),
      transparent
    );
    color: rgba(0, 0, 0, 0.4);
  }

  &__content {
    position: relative;
    padding: 42px 60px;
  }

  &__img {
    position: absolute;
    top: -28px;
    right: 30px;
    z-index: 1;

    @media screen and (max-width: map-get($breakpoints, 'sm')) {
      width: 50px; 
      height: auto; 
      top: -14px; 
      right: 15px; 
    }

    @media screen and (max-width: map-get($breakpoints, 'md')) {
      width: 50px; 
      height: auto; 
      top: -14px; 
      right: 15px; 
    }

    @media screen and (max-width: map-get($breakpoints, 'lg')) {
      width: 80px; 
      height: auto; 
      top: -14px; 
      right: 15px; 
    }
  }
}
</style>
