<script setup>
import { defineProps } from 'vue';

defineProps(['routeName']);
</script>

<template>
  <section class="not__found__page">
    <div class="not__found__page__content container">
      <h1 class="not__found__page__title">404</h1>
      <p class="not__found__page__subtitle">
        We're not sure how you got here...
      </p>
      <p class="not__found__page__subtitle">
        But you may be lost in cyberspace
      </p>
      <router-link to="/" class="not__found__page__link"
        >Just take me Home</router-link
      >
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';
.not__found__page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('../assets/images/404-error-page.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &__content {
    width: 100%;
    text-align: center;
    padding: 20px;
    margin: 0 auto 20px;
    color: $light-color;

    @media screen and (max-width: map-get($breakpoints, 'sm')) {
      padding: 20px;
    }

    @media screen and (max-width: map-get($breakpoints, 'md')) {
      padding: 20px;
    }
  }

  &__title {
    font-family: $base-font;
    margin: 40px;
    font-size: 100px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;

    @media screen and (max-width: map-get($breakpoints, 'sm')) {
      margin: 20px;
      font-size: 70px;
      font-weight: 600;
    }

    @media screen and (max-width: map-get($breakpoints, 'md')) {
      margin: 24px;
      font-size: 80px;
    }
  }

  &__subtitle {
    font-family: $base-font;
    margin: 12px 0 28px;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 149.487%;

    @media screen and (max-width: map-get($breakpoints, 'sm')) {
      margin: 10px 0 22px;
      font-size: 20px;
      font-weight: 500;
    }

    @media screen and (max-width: map-get($breakpoints, 'md')) {
      margin: 10px 0 24px;
      font-size: 22px;
      font-weight: 500;
    }
  }

  &__link {
    font-family: $base-font;
    font-size: 20px;

    &:hover {
      text-decoration: none;
      border-bottom: 2px solid $accent-color;
      border-top: 2px solid $accent-color;
      opacity: 0.7;
    }

    &:focus {
      text-decoration: none;
      background: $accent-color;
    }
  }
}
</style>
