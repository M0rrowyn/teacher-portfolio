<script setup>
import { ref } from 'vue';
const emit = defineEmits(['closeModal', 'openModal'])
const { image, title, description } = defineProps([
  'image',
  'title',
  'description'
]);

const modalOpen = ref(false);

const openModal = () => {
  modalOpen.value = true;
  emit('openModal')
};

const closeModal = () => {
  modalOpen.value = false;
  emit('closeModal')
};
</script>

<template>
  <div class="gallery__slider">
    <div @click="openModal" class="gallery__slider__content">
      <img class="gallery__slider__image" :src="image" :alt="title" />
      <h4 class="gallery__slider__title">{{ title }}</h4>
      <p class="gallery__slider__desc">{{ description }}</p>
    </div>
    <div v-if="modalOpen" class="modal" @click="closeModal">
      <img class="modal__image" :src="image" :alt="title" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';
.gallery__slider {
  width: 25%;
  margin: 0;

  @media screen and (max-width: map-get($breakpoints, 'xl')) {
    width: 80%;
  }

  @media screen and (max-width: map-get($breakpoints, 'lg')) {
    width: 100%;
  }

  @media screen and (max-width: map-get($breakpoints, 'md')) {
    width: 100%;
  }

  @media screen and (max-width: map-get($breakpoints, 'sm')) {
    width: 100%;
  }

  &__content {
    background-color: $light-color;
    border-radius: 10px;
  }

  &__image {
    width: 100%;
    height: auto;
    object-fit: cover;
    opacity: 1;

    &:hover {
      opacity: 0.8;
    }
  }

  &__title {
    text-align: center;
    color: $dark-color;
    font-family: $base-font;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    @media screen and (max-width: map-get($breakpoints, 'sm')) {
      font-size: 16px;
      font-weight: 400;
    }
  }

  &__desc {
    text-align: center;
    color: $text-muted;
    font-family: $base-font;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    padding-bottom: 30px;

    @media screen and (max-width: map-get($breakpoints, 'sm')) {
      font-size: 16px;
      padding: 0 12px 14px;
    }

    @media screen and (max-width: map-get($breakpoints, 'md')) {
      font-size: 16px;
      padding: 0 14px 16px;
    }
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &__image {
      width: 30%;
      height: 30%;
      object-fit: contain;
    }
  }
}
</style>
