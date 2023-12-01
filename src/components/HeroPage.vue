<script setup>
import CustomButton from '../components/CustomButton.vue';
</script>

<template>
  <section class="hero">
    <div class="hero__info container">
      <h2 class="hero__info__title">
        Lorem ipsum dolor
        <span>sir amet, consectetur.</span>
      </h2>
      <p class="hero__info__description">
        Facilisi etiam dignissim diam quis enim. Eget dolor morbi non arcu risus
        quis. Nibh praesent tristique
      </p>
    </div>
    <div class="hero__info__btn container">
      <router-link to="#about-me">
        <CustomButton label="About me" customClass="about-me-btn" />
      </router-link>
      <router-link to="#contact">
        <CustomButton label="Contact" customClass="contact-btn" />
      </router-link>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';

.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: calc(100% - 120px);
  padding: 146px 0 412px 0;
  background-image: url('../assets/images/background-img.png');
  background-size: cover;

  @media screen and (max-width: map-get($breakpoints, 'md')) {
    padding: 72px 0 204px 0;
    background-repeat: no-repeat;
  }

  &__info {
    display: flex;
    flex-direction: column;
    width: 100%;
    color: $light-color;
    padding: 0px 24px;
    margin: 0 auto 20px;

    @media screen and (max-width: map-get($breakpoints, 'md')) {
      padding: 0px 20px;
      margin: 0 auto 10px;
    }
  }

  &__info__title {
    display: flex;
    flex-direction: column;
    margin: 144px 0 34px 0;
    color: $accent-color;
    font-size: 70px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;

    span {
      color: $light-color;
    }

    @media screen and (max-width: map-get($breakpoints, 'md')) {
      padding: 0;
      margin: 72px 0 16px 0;
      font-size: 34px;
      font-weight: 600;
    }
  }

  &__info__description {
    margin: 0 0 84px 0;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 149.487%;

    @media screen and (max-width: map-get($breakpoints, 'md')) {
      margin: 0 0 42px 0;
      font-size: 18px;
    }
  }

  &__info__btn {
    display: flex;
    gap: 20px;
    padding: 0px 24px;
    margin: 0 auto;

    @media screen and (max-width: map-get($breakpoints, 'md')) {
      display: flex;
      flex-direction: column;
      max-width: 60%;
      padding: 0px 12px;
      margin: 0 auto;
    }
  }
  .about-me-btn {
    font-family: $base-font;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    cursor: pointer;
    padding: 18px 60px;
    border: none;
    background-color: $accent-color;
    transition: color 0.4s linear;

    &:hover {
      background-color: $background-color;
    }

    @media screen and (max-width: map-get($breakpoints, 'md')) {
      width: 100%;
      padding: 12px 30px;
      margin: 0 auto 5px;
    }
  }

  .contact-btn {
    font-family: $base-font;
    cursor: pointer;
    text-align: center;
    border: none;
    color: $text;
    background-color: $light-color;
    padding: 18px 108px;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    transition: color 0.4s linear;

    &:hover {
      background-color: $background-color;
    }

    @media screen and (max-width: map-get($breakpoints, 'md')) {
      width: 100%;
      padding: 12px 30px;
      margin: 0 auto 5px;
    }
  }
}
</style>
