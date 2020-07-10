<template>
  <article class="shop-header">
    <div
      id="ui"
      class="uk-position-relative uk-visible-toggle uk-light shop-header__slider"
      tabindex="-1"
      uk-slideshow="animation: fade; autoplay: true; autoplay-interval: 14000; max-height: 400; max-width: 600"
    >
      <ul class="uk-slideshow-items">
        <li>
          <div
            class="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center"
          >
            <img src="./img/pourover.jpg" alt uk-cover />
          </div>
        </li>
        <li>
          <div
            class="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center"
          >
            <img src="./img/pourover1.jpg" alt uk-cover />
          </div>
        </li>
        <li>
          <div
            class="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-center"
          >
            <img src="./img/unnamed.jpg" alt uk-cover />
          </div>
        </li>
      </ul>
    </div>
    <div class="shop-header__info">
      <h3 class="title shop-header__title">Lorem, ipsum dolor.</h3>
      <p
        class="info__text"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni perspiciatis mollitia magnam soluta, debitis consequatur temporibus quo ratione dicta similique porro dolor veniam facere accusamus, quibusdam esse harum repellat delectus!</p>
    </div>
  </article>
</template>
<script>
export default {
  name: "TheProductInfo"
};
</script>
<style lang="scss">
.shop-header {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-bottom: 10px;
  padding-top: 90px;
  background-color: $grey-light;
  @media screen and (min-width: $screen-tablet) {
    flex-direction: row;
  }
  &__slider {
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 34px;
    @media screen and (min-width: $screen-tablet) {
      width: 47%;
      margin-bottom: 0px;
    }
  }
  &__info {
    @include text($H300, 400, $grey-light);
    min-width: 47%;
    display: flex;
    flex-direction: column;
    line-height: 30px;
    align-items: center;
    padding: 20px;
    max-width: 600px;
    color: $grey-light;
    background-color: rgba($dark, 0.8);
    border-radius: 20px;
    margin-bottom: 30px;
    @media screen and (min-width: $screen-tablet) {
      margin-bottom: 0px;
      align-items: flex-start;
    }
  }
  &__title {
    @include text($H500, 400, $grey-light);
  }
}
</style>