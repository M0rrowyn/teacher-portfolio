<script setup>
import GallerySlider from './GallerySlider.vue';
import { ref, watchEffect } from 'vue';

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

const currentIndex = ref(0);

const getCurrentItem = (index) => {
  return gallery[(index + currentIndex.value) % gallery.value.length];
};

const prevImage = () => {
  currentIndex.value =
    (currentIndex.value - 1 + gallery.value.length) % gallery.value.length;
};

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % gallery.value.length;
};

watchEffect(() => {
  if (currentIndex.value < 0) {
    currentIndex.value = gallery.value.length - 1;
  } else if (currentIndex.value >= gallery.value.length) {
    currentIndex.value = 0;
  }
});

const interval = ref()
const setAutoPlayInterval = () => {
  interval.value = setInterval(() => {
      nextImage();
    }, 4000);
}
const clearAutoPlayInterval = () => {
  clearInterval(interval.value)
}

setAutoPlayInterval()
</script>

<template>
  <section class="gallery">
    <div class="gallery__content">
      <h2 class="gallery__title">Gallery</h2>
      <div class="gallery__divider"></div>
      <div class="gallery__container__wrapper">
        <div class="gallery__toggle__page left">
          <button @click="prevImage" class="gallery__icon-button">
            <i class="fa-solid fa-chevron-left"></i>
          </button>
        </div>
        <div class="gallery__container container">
          <GallerySlider
            v-for="(item, index) in gallery"
            :key="index"
            :item="getCurrentItem(index)"
            :image="gallery[(index + currentIndex) % gallery.length].image"
            :title="gallery[(index + currentIndex) % gallery.length].title"
            :description="
              gallery[(index + currentIndex) % gallery.length].description
            "
            @open-modal="clearAutoPlayInterval"
            @close-modal="setAutoPlayInterval"
          />
        </div>
        <div class="gallery__toggle__page right">
          <button @click="nextImage" class="gallery__icon-button">
            <i class="fa-solid fa-chevron-right"></i>
          </button>
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

  @media screen and (max-width: map-get($breakpoints, 'sm')) {
    margin: 32px auto 0;
  }

  @media screen and (max-width: map-get($breakpoints, 'md')) {
    margin: 36px auto 0;
  }

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

    @media screen and (max-width: map-get($breakpoints, 'sm')) {
      padding: 0 0 14px;
      font-size: 28px;
      font-weight: 500;
    }
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
  }

  &__container {
    display: flex;
    gap: 10px;
    flex-grow: 1;

    @media screen and (max-width: map-get($breakpoints, 'sm')) {
      flex-direction: column;
      align-items: center;
    }

    @media screen and (max-width: map-get($breakpoints, 'md')) {
      flex-direction: column;
      align-items: center;
    }

    @media screen and (max-width: map-get($breakpoints, 'lg')) {
      flex-direction: column;
      align-items: center;
    }

    @media screen and (max-width: map-get($breakpoints, 'xl')) {
      flex-direction: column;
      align-items: center;
    }

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

  &__icon-button {
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
