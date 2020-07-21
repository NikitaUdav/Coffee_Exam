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
      <h3 class="title shop-header__title">FREE SHIPPING ON ORDERS $49+</h3>
      <p class="info__text">
        Receive free domestic ground shipping on any order over $49.00. If you
        select Next Day or 2nd Day Air shipping, the cost of domestic US ground
        shipping will be credited toward your shipping costs. Offer is not valid
        in stores and does not apply to Peet's Cards, Monthly Coffee Tours,
        Subscriptions, previous purchases, or international shipments. Cannot be
        combined with any other offer or discount. Peets.com purchases are not
        eligible for Peetnik Rewards points.
      </p>
    </div>
  </article>
</template>
<script>
export default {
  name: "TheProductInfo",
};
</script>
<style lang="scss">
.shop-header {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 10px;
  background-color: $grey-light;
  @media screen and (min-width: 1234px) {
    flex-direction: row;
  }
  &__slider {
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 34px;
    @media screen and (min-width: 1234px) {
      width: 47%;
      margin-bottom: 0px;
    }
  }
  &__info {
    @include text($H300, 400, $grey-light);
    min-width: 100%;
    display: flex;
    flex-direction: column;
    line-height: 30px;
    align-items: center;
    padding: 20px;
    color: $grey-light;
    background-color: rgba($dark, 0.8);
    border-radius: 20px;
    margin-bottom: 30px;
    @media screen and (min-width: 1234px) {
      margin-bottom: 0px;
      align-items: flex-start;
      min-width: 47%;
      max-width: 600px;
    }
  }
  &__title {
    @include text($H500, 400, $grey-light);
  }
}
</style>
