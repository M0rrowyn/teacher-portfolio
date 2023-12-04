<script setup>
import GallerySlider from './GallerySlider.vue';
import { ref } from 'vue';

const gallery = ref([
  {
    id: 1,
    image: '/images/gallery-img1.png',
    title: 'First title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    id: 2,
    image: '/images/gallery-img2.png',
    title: 'Second title',
    description:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 3,
    image: '/images/gallery-img3.png',
    title: 'Third title',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation'
  },
  {
    id: 4,
    image: '/images/gallery-img4.jpg',
    title: 'Fourth title',
    description: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. '
  }
]);
</script>

<template>
  <section class="gallery">
    <div class="gallery__content">
      <h2 class="gallery__title">Gallery</h2>
      <div class="gallery__divider"></div>
      <div class="gallery__container__wrapper">
        <div class="gallery__toggle__page left">
          <div class="gallery__icon-container">
            <i class="fa-solid fa-chevron-left"></i>
          </div>
        </div>
        <div class="gallery__container container">
          <GallerySlider
            v-for="(item, index) in gallery"
            :key="index"
            :item="item"
            :image="item.image"
            :title="item.title"
            :description="item.description"
          />
        </div>
        <div class="gallery__toggle__page right">
          <div class="gallery__icon-container">
            <i class="fa-solid fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';
.gallery {
  display: flex;
  justify-content: center;
  margin: 52px auto 0;

  &__content {
    width: 100%;
  }

  &__title {
    text-align: center;
    margin: 0;
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
    margin: 0 auto 46px;
    background-color: $text-divider;
  }

  &__container__wrapper {
    display: flex;
    align-items: center;
    height: 100%;
  }

  &__container {
    display: flex;
    gap: 10px;
    flex-grow: 1;

    &__wrapper {
      position: relative;
      width: 100%;
    }
  }

  &__toggle__page {
    display: flex;
    align-items: center;
    flex: 1;
    padding: 0 20px 0;
  }

  .right {
    justify-content: flex-start;
  }

  .left {
    justify-content: flex-end;
  }

  &__icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 54px;
    height: 54px;
    background-color: $accent-color;
    color: $text;
    border-radius: 50%;
    cursor: pointer;
  }
}
</style>
