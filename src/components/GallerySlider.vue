<script setup>
const { image, title, description } = defineProps([
  'image',
  'title',
  'description'
]);
</script>

<template>
  <div class="gallery__slider">
    <div class="gallery__slider__content">
      <img class="gallery__slider__image" :src="image" :alt="title" />
      <h4 class="gallery__slider__title">{{ title }}</h4>
      <p class="gallery__slider__desc">{{ description }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';
.gallery__slider {
  width: 25%;
  margin: 0;

  &__content {
    background-color: $light-color;
    border-radius: 10px;
  }

  &__image {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  &__title {
    text-align: center;
    color: $dark-color;
    font-family: $base-font;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  &__desc {
    text-align: center;
    color: $text-muted;
    font-family: $base-font;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    padding-bottom: 30px;
  }
}
</style>
