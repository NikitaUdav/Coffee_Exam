<template>
  <div
    class="nav"
    uk-sticky="top: 400; animation: uk-animation-slide-top; bottom: #sticky-on-scroll-up; show-on-up: true"
    id="nav"
  >
    <the-burger />
    <div class="nav__main-text">Coffee Shop</div>
    <router-link class="nav__bag" to="/cart">
      <div class="nav__icon-wrapper">
        <the-bag />
        <ul class="nav__count">
          <li id="nav__count-cart">{{ TotalPositions }}</li>
          <li>0</li>
        </ul>
      </div>
    </router-link>
    <div ref="overlay" id="offcanvas-overlay" uk-offcanvas="overlay: true">
      <div class="uk-offcanvas-bar">
        <button class="uk-offcanvas-close" type="button" uk-close></button>
        <the-logo class="nav__logo" />
        <ul class="nav__list">
          <li @click="hideOverlay()" class="nav__link">
            <router-link class="nav__text" to="/">Home</router-link>
          </li>
          <li @click="hideOverlay()" class="nav__link">
            <router-link
              class="nav__text"
              :to="{ name: 'List', params: { id: 'coffee' } }"
              >coffee</router-link
            >
          </li>
          <li @click="hideOverlay()" class="nav__link">
            <router-link
              class="nav__text"
              :to="{ name: 'List', params: { id: 'keepCup' } }"
              >Keep Cup</router-link
            >
          </li>
          <li @click="hideOverlay()" class="nav__link">
            <router-link
              class="nav__text"
              :to="{ name: 'List', params: { id: 'machine' } }"
              >coffee machine</router-link
            >
          </li>
          <li @click="hideOverlay()" class="nav__link">
            <router-link
              class="nav__text"
              :to="{ name: 'List', params: { id: 'alternative' } }"
              >alternative coffee</router-link
            >
          </li>
        </ul>
        <aside class="nav__info">
          <div class="nav__img-wrapper">
            <img
              src="https://glamusha.ru/uploads/articles/28/1nizkokalorijnyj_kofe.jpg"
              alt
            />
          </div>
          <h4 class="nav__tagline">
            Make the right choice, listen to your heart...
          </h4>
        </aside>
      </div>
    </div>
  </div>
</template>
<script>
import TheBurger from "./TheBurger";
import TheLogo from "./svg/TheLogo";
import TheBag from "./svg/TheBag";
import { mapGetters } from "vuex";
import UIkit from "uikit";
export default {
  name: "TheNav",
  components: {
    TheBurger,
    TheLogo,
    TheBag,
  },
  computed: {
    ...mapGetters(["TotalPositions"]),
  },
  methods: {
    hideOverlay() {
      UIkit.offcanvas(this.$refs.overlay).hide();
      console.log("hide");
    },
  },
};
</script>
<style lang="scss">
$style: nav;
.#{$style} {
  z-index: 1000;
  position: relative;
  padding: 15px 20px 15px 20px;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  background-color: $grey;
  justify-content: space-between;
  align-items: center;
  opacity: 0.95;
  &__logo {
    margin-bottom: 20px;
  }
  &__main-text {
    @include text($H600, 400, $light);
  }
  &__title {
    text-align: center;
  }
  &__list {
    margin-bottom: 40px;
  }
  &__link {
    transition: all ease 0.3s;
    border-bottom: 1px solid $grey-light;
    margin-bottom: 10px;
    font-size: $H400;
    outline: none;
    padding-bottom: 5px;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
    &:hover {
      color: $late;
      border-bottom: 1px solid $orage;
    }
    &:hover .#{$style}__text {
      color: $late;
    }
  }
  &__text {
    display: flex;
    transition: all ease 0.3s;
    color: $light;
    outline: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    &:hover {
      text-decoration: none;
    }
  }
  &__img-wrapper {
    position: relative;
    margin-bottom: 20px;
    overflow: hidden;
    border-radius: 50px;
  }
  &__tagline {
    padding: 5px;
    text-align: center;
    font-size: $H400;
    color: $light;
  }
  &__icon-wrapper {
    position: relative;
    transition: all ease 0.3s;
    @media screen and (min-width: $screen-tablet) {
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  &__count {
    position: absolute;
    top: -10px;
    right: -10px;
    height: 28px;
    width: 28px;
    background: $late;
    color: $light;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 50%;
    text-indent: 0;
    transition: transform 0.2s 0.5s;
    display: flex;
    justify-content: center;
    :last-of-type {
      display: none;
    }
  }
}
.uk-offcanvas-bar {
  z-index: 10000;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.zindex {
  z-index: 10000;
}
</style>
