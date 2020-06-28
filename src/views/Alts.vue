<template>
  <section class="products-store">
    <article class="products-store__info">
      <div
        id="ui"
        class="uk-position-relative uk-visible-toggle uk-light products-store__slider"
        tabindex="-1"
        uk-slideshow="animation: fade; autoplay: true; autoplay-interval: 14000; max-height: 400;"
      >
        <ul class="uk-slideshow-items">
          <li>
            <div
              class="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center"
            >
              <img src="../components/common/img/pourover.jpg" alt uk-cover />
            </div>
          </li>
          <li>
            <div
              class="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center"
            >
              <img src="../components/common/img/pourover1.jpg" alt uk-cover />
            </div>
          </li>
          <li>
            <div
              class="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-center"
            >
              <img src="../components/common/img/unnamed.jpg" alt uk-cover />
            </div>
          </li>
        </ul>
      </div>
    </article>
    <ul class="products-store__shop-list">
      <li v-for="item in alternative" :key="item.id" class="shop-card">
        <dir class="shop-card__img-wrapper">
          <img class="imgs" :src="item.img" :alt="item.img" />
        </dir>
        <h3 class="shop-card__title title">{{item.name}}</h3>
        <span class="shop-card__price">{{item.price}}</span>
        <div class="shop-card__inpunts">
          <button class="button shop-card__button-buy">add to cat</button>
          <button class="button shop-card__button-info">info</button>
        </div>
      </li>
    </ul>
  </section>
</template>
<script>
import { alternative } from "../prod";
export default {
  name: "Alts",
  data() {
    return {
      alternative
    };
  }
};
</script>
<style lang="scss">
.products-store {
  display: flex;
  flex-direction: column;
  &__info {
    padding-top: 80px;
    background-color: $grey;
  }
  &__slider {
    width: 50%;
  }
  &__shop-list {
    padding: 40px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
}
.shop-card {
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: $grey;
  width: 25%;
  border-radius: 5px;
  &__img-wrapper {
    background-color: white;
    position: relative;
    width: 100%;
    height: 370px;
    margin-bottom: 10px;
    border-radius: 10px;
    overflow: hidden;
  }
  &__title {
    color: $grey-light;
    margin-bottom: 10px;
  }
  &__price {
    margin-bottom: 20px;
  }
  &__inpunts {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
}
.imgs {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  max-height: 300px;
  max-width: 100%;
  vertical-align: middle;
}
</style>