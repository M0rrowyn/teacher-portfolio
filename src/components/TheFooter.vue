<script setup></script>

<template>
  <footer class="footer">
    <div class="footer__content container">
      <div class="footer__content__column">
        <img
          class="footer__content__logo"
          src="../assets/images/footer-logo.png"
          alt="Footer Logo"
        />
        <h4 class="footer__content__title">Teacher Title</h4>
      </div>
      <div class="footer__content__column">
        <nav class="footer__content__column__navigation">
          <ul class="footer__content__column__navigation__items">
            <li>
              <router-link to="/#about-me">About me</router-link>
            </li>
            <li>
              <router-link to="/#gallery">Gallery</router-link>
            </li>
            <li>
              <router-link to="/#work-examples">Work Examples</router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="footer__column">
        <nav class="footer__content__column__navigation">
          <ul class="footer__content__column__navigation__items">
            <li>
              <router-link to="/#feedback">Feedback</router-link>
            </li>
            <li>
              <router-link to="/#contacts">Contacts</router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="footer__column">
        <div class="footer__content__column__geolocation">Ukraine, Kyiv</div>
        <p class="footer__content__column__email">emailname@gmail.com</p>
      </div>
      <div class="footer__column">
        <div class="footer__content__column__tel__one">+38 093 984 20 48</div>
        <div class="footer__content__column__tel__two">+38 096 852 61 26</div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';

.footer {
  width: 100%;
  height: 100%;
  background-color: $dark-grey;
  color: $text-divider;
  padding: 82px 0 90px 0;

  @media screen and (max-width: map-get($breakpoints, 'sm')) {
    padding: 42px 0 34px 0;
  }

  @media screen and (max-width: map-get($breakpoints, 'md')) {
    padding: 52px 0 44px 0;
  }

  @media screen and (max-width: map-get($breakpoints, 'lg')) {
    padding: 62px 0 54px 0;
  }

  @media screen and (max-width: map-get($breakpoints, 'xl')) {
    padding: 72px 0 64px 0;
  }

  &__content {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;

    @media screen and (max-width: map-get($breakpoints, 'sm')) {
      padding: 0 20px 0;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }

    @media screen and (max-width: map-get($breakpoints, 'md')) {
      padding: 0 20px 0;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }

    @media screen and (max-width: map-get($breakpoints, 'lg')) {
      padding: 0 20px 0;
      align-items: center;
    }

    @media screen and (max-width: map-get($breakpoints, 'xl')) {
      padding: 0 20px 0;
      align-items: center;
    }

    &__column {
      &__tel__one,
      &__tel__two {
        margin: 0;
        font-family: Proba Pro;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        color: $footer-link-color;

        @media screen and (max-width: map-get($breakpoints, 'sm')) {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 16px;
        }

        @media screen and (max-width: map-get($breakpoints, 'md')) {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 16px;
        }

        @media screen and (max-width: map-get($breakpoints, 'lg')) {
          display: flex;
          align-items: center;
        }
      }

      &__geolocation {
        font-family: Proba Pro;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        color: $footer-link-color;

        @media screen and (max-width: map-get($breakpoints, 'sm')) {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 16px;
        }

        @media screen and (max-width: map-get($breakpoints, 'md')) {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 16px;
        }

        @media screen and (max-width: map-get($breakpoints, 'lg')) {
          display: flex;
          align-items: center;
        }
      }

      &__email {
        margin: 0;
        font-family: Proba Pro;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        color: $footer-link-color;
      }
      &__navigation {
        &__items {
          margin: 0;
          padding: 0;
          list-style: none;
          color: $footer-link-color;
          font-family: Proba Pro;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%;

          @media screen and (max-width: map-get($breakpoints, 'sm')) {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 16px;
          }

          @media screen and (max-width: map-get($breakpoints, 'md')) {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 16px;
          }

          @media screen and (max-width: map-get($breakpoints, 'lg')) {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          li {
            a {
              text-decoration: none;
              transition: all 0.35s ease;

              &:hover {
                border-bottom: 2px solid $footer-link-color;
                border-top: 2px solid $footer-link-color;
                opacity: 0.7;
              }
            }
          }
        }
      }
    }

    &__logo {
      width: 160px;
      margin-bottom: 2px;

      @media screen and (max-width: map-get($breakpoints, 'sm')) {
        width: 130px;
      }

      @media screen and (max-width: map-get($breakpoints, 'md')) {
        width: 140px;
      }

      @media screen and (max-width: map-get($breakpoints, 'lg')) {
        width: 150px;
      }
    }

    &__title {
      display: flex;
      justify-content: center;
      margin: 0px;
      color: $text-divider;
      font-family: Proba Pro;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;

      @media screen and (max-width: map-get($breakpoints, 'sm')) {
        font-size: 16px;
      }

      @media screen and (max-width: map-get($breakpoints, 'md')) {
        font-size: 18px;
      }

      @media screen and (max-width: map-get($breakpoints, 'lg')) {
        font-size: 18px;
      }
    }
  }
}
</style>
