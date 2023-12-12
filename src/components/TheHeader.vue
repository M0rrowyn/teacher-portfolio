<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const mobile = ref(null);
const showHeader = ref(true);
const route = useRoute();

const toggleMobileNav = () => {
  mobile.value = !mobile.value;
};

const shouldShowHeader = (route) => {
  return route.name !== 'NotFound';
};

watch(route, (to) => {
  showHeader.value = shouldShowHeader(to);
});
</script>

<template>
  <header class="header" v-if="showHeader">
    <div class="header__content container">
      <img
        class="header__content__logo"
        src="../assets/images/logo.png"
        alt="Logo"
      />
      <nav v-if="!mobile" class="header__nav__content">
        <ul class="header__nav__items">
          <li>
            <router-link :to="{ name: 'main-page' }">
              <img
                class="header__nav__icon"
                src="../assets/images/geometric shapes-img.png"
                alt="Geometric shape"
                width="16"
                height="16"
              />Home</router-link
            >
          </li>
          <li>
            <router-link to="/#about-me">About me</router-link>
          </li>
          <li>
            <router-link to="/#gallery">Gallery</router-link>
          </li>
          <li>
            <router-link to="/#work-examples">Work Examples</router-link>
          </li>
          <li>
            <router-link to="/#feedback">Feedback</router-link>
          </li>
          <li>
            <router-link to="/#contact">Contact</router-link>
          </li>
        </ul>
      </nav>
      <div class="header__nav__burger">
        <i
          @click="toggleMobileNav"
          class="fa-solid fa-bars"
          :class="{ 'icon-active': mobile }"
        ></i>
      </div>
      <transition name="header__nav__mobile">
        <nav v-if="mobile" class="header__nav__mobile__content">
          <ul class="header__nav__mobile__dropdown">
            <li>
              <router-link
                :to="{ name: 'main-page' }"
                class="header__nav__mobile__dropdown__links"
              >
                Home</router-link
              >
            </li>
            <li>
              <router-link
                to="/#about-me"
                class="header__nav__mobile__dropdown__links"
                >About me</router-link
              >
            </li>
            <li>
              <router-link
                to="/#gallery"
                class="header__nav__mobile__dropdown__links"
                >Gallery</router-link
              >
            </li>
            <li>
              <router-link
                to="/#work-examples"
                class="header__nav__mobile__dropdown__links"
                >Work Examples</router-link
              >
            </li>
            <li>
              <router-link
                to="/#feedback"
                class="header__nav__mobile__dropdown__links"
                >Feedback</router-link
              >
            </li>
            <li>
              <router-link
                to="/#contact"
                class="header__nav__mobile__dropdown__links"
                >Contact</router-link
              >
            </li>
          </ul>
        </nav>
      </transition>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';
.header {
  width: 100%;
  height: 120px;
  position: fixed;
  z-index: 99;
  background: $background-color;
  color: $text;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 56px auto 0;

    @media screen and (max-width: map-get($breakpoints, 'xl')) {
      padding: 0 20px 0;
    }

    @media screen and (max-width: map-get($breakpoints, 'lg')) {
      padding: 0 20px 0;
    }

    @media screen and (max-width: map-get($breakpoints, 'md')) {
      padding: 0 20px 0;
    }

    @media screen and (max-width: map-get($breakpoints, 'sm')) {
      padding: 0 20px 0;
    }
  }

  &__content__logo {
    display: flex;
    align-items: center;

    @media screen and (max-width: map-get($breakpoints, 'lg')) {
      max-width: 150px;
    }
  }

  &__nav {
    &__content {
      display: flex;
      flex-direction: row;
      position: relative;

      @media (min-width: map-get($breakpoints, 'xxl')) {
        max-width: map-get($breakpoints, 'xxl');
      }

      @media (max-width: map-get($breakpoints, 'lg')) {
        margin: 0;
      }
    }

    &__items {
      position: relative;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex: 1;
      gap: 44px;
      list-style: none;
      font-size: 20px;

      li {
        a {
          text-decoration: none;
          transition: all 0.35s ease;
        }

        &:hover {
          border-bottom: 2px solid $accent-color;
          border-top: 2px solid $accent-color;
          opacity: 0.7;
        }

        &:last-child {
          padding-right: 0px;
        }
      }

      @media screen and (max-width: map-get($breakpoints, 'lg')) {
        font-size: 14px;
      }

      @media screen and (max-width: map-get($breakpoints, 'md')) {
        display: none;
      }
    }

    &__icon {
      margin-right: 8px;
    }

    &__burger {
      display: none;
      align-items: center;
      height: 100%;
      position: absolute;
      top: 0;
      right: 24px;

      i {
        cursor: pointer;
        font-size: 24px;
        transition: 0.8s ease all;
      }
      .icon-active {
        transform: rotate(180deg);
      }

      @media screen and (max-width: map-get($breakpoints, 'md')) {
        display: flex;
      }
    }
  }

  &__nav__mobile__dropdown {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 0 0 0;
    margin: 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-width: 250px;
    list-style: none;
    background-color: $light-color;

    &__links {
      margin-left: 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-family: $base-font;
      font-size: 26px;
      text-decoration: none;
      transition: all 0.35s ease;

      &:hover {
        border-bottom: 2px solid $accent-color;
        border-top: 2px solid $accent-color;
        opacity: 0.7;
      }
    }

    &__mobile-enter-active,
    &__nav__mobile-leave-active {
      transition: 1s ease all;
    }

    &__nav__mobile-enter-from,
    &__nav__mobile-leave-to {
      transform: translateX(-250px);
    }

    &__nav__mobile-enter-to {
      transform: translateX(0);
    }
  }
}
</style>
