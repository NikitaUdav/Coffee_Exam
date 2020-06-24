<template>
  <div id="nav" class="nav">
    <the-burger />
    <div class="nav__main-text">Coffee Shop</div>
    <a class="nav__basket" href>корзина</a>
    <div id="offcanvas-overlay" uk-offcanvas="overlay: true">
      <div class="uk-offcanvas-bar">
        <button class="uk-offcanvas-close" type="button" uk-close></button>
        <the-logo class="nav__logo" />
        <ul class="nav__list">
          <li class="nav__link">
            <router-link class="nav__text" to="/">Home</router-link>
          </li>
          <li class="nav__link">
            <router-link class="nav__text" to="/about">coffee</router-link>
          </li>
          <li class="nav__link">
            <router-link class="nav__text" to="/about">Keep Cup</router-link>
          </li>
          <li class="nav__link">
            <router-link class="nav__text" to="/about">sweets</router-link>
          </li>
          <li class="nav__link">
            <router-link class="nav__text" to="/about">coffee machine</router-link>
          </li>
          <li class="nav__link">
            <router-link class="nav__text" to="/about">alternative coffee</router-link>
          </li>
        </ul>
        <aside class="nav__info">
          <div class="nav__img-wrapper">
            <img src="https://glamusha.ru/uploads/articles/28/1nizkokalorijnyj_kofe.jpg" alt />
          </div>
          <h4 class="nav__tagline">Make the right choice, listen to your heart...</h4>
        </aside>
      </div>
    </div>
  </div>
</template>
<script>
import TheBurger from "./TheBurger";
import TheLogo from "./svg/TheLogo";
export default {
  name: "TheNav",
  components: {
    TheBurger,
    TheLogo
  }
};
</script>
<style lang="scss">
$style: nav;
.#{$style} {
  z-index: 10000;
  padding: 15px;
  display: flex;
  position: fixed;
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
}
.uk-offcanvas-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
