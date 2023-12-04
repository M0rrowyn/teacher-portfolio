<script setup></script>

<template>
  <section class="about-me container">
    <div class="about-me__content">
      <img
        src="../assets/images/about-me-img.png"
        class="about-me__image"
        alt="Personal photo"
        loading="lazy"
      />
      <div class="about-me__info">
        <h3 class="about-me__info__title">About me</h3>
        <div class="about-me__info__divider"></div>
        <div class="about-me__info__bio">
          <p class="about-me__info__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Venenatis a condimentum vitae sapien pellentesque habitant. Nullam
            eget felis eget nunc.
          </p>
          <p class="about-me__info__description">
            Facilisi etiam dignissim diam quis enim. Eget dolor morbi non arcu
            risus quis. Nibh praesent tristique magna sit amet purus. Nec
            feugiat nisl pretium fusce. Id donec ultrices tincidunt arcu non
            sodales neque sodales.
          </p>
          <p class="about-me__info__description">
            Lectus nulla at volutpat diam ut venenatis. Euismod quis viverra
            nibh cras pulvinar mattis nunc sed blandit. Mauris nunc congue nisi
            vitae suscipit. Quis varius quam quisque id diam vel quam. Nisl
            tincidunt eget nullam non.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';

.about-me {
  display: flex;

  margin: 52px auto 0;

  @media screen and (max-width: map-get($breakpoints, 'md')) {
    padding: 0px 12px;
    margin: 32px auto 10px;
  }

  &__content {
    display: flex;
    gap: 80px;
    background-color: $light-color;
    border-radius: 10px;

    @media screen and (max-width: map-get($breakpoints, 'md')) {
      flex-direction: column;
      gap: 40px;
    }
  }

  &__image {
    display: block;
    width: 50%;
    opacity: 1;

    &:hover {
      opacity: 0.8;
    }

    @media screen and (max-width: map-get($breakpoints, 'md')) {
      width: 100%;
      object-fit: cover;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 50%;
    padding-right: 80px;

    @media screen and (max-width: map-get($breakpoints, 'md')) {
      width: 100%;
      align-items: center;
      justify-content: center;
      padding: 0 30px;
    }

    &__title {
      margin: 0;
      padding: 70px 0 24px;
      font-family: $base-font;
      font-size: 38px;
      font-style: normal;
      font-weight: 500;
      line-height: 120%;
      color: $text;

      @media screen and (max-width: map-get($breakpoints, 'md')) {
        padding: 30px 0 12px;
        font-size: 28px;
      }
    }

    &__divider {
      width: 50px;
      height: 2px;
      margin: 0 0 24px;
      background-color: $text-divider;
    }

    &__bio {
      display: flex;
      flex-direction: column;
      margin: 0 auto 100px;

      @media screen and (max-width: map-get($breakpoints, 'md')) {
        margin: 0 auto 50px;
      }
    }

    &__description {
      font-family: $base-font;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      color: $text-divider;
    }
  }
}
</style>
