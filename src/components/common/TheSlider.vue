<template>
  <div class="our-products">
    <img class="img" src="./img/warehouse.jpg" alt />
    <h3 class="title our-products__title">our products</h3>
    <div class="glide">
      <div data-glide-el="track" class="glide__track">
        <ul class="glide__slides">
          <li class="glide__slide">
            <div class="glide__img-wrapper">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStB3Wd0ue63mYPA8X_NmawKQONaVpePdXMfapsQJVpR-_n4JbV&usqp=CAU"
                alt
              />
            </div>
            <h3 class="glide__title title">Titlfgfgfggfgfgfge</h3>
            <div class="glide__inputs">
              <button class="button-more button">More</button>
            </div>
          </li>
          <li class="glide__slide">
            <div class="glide__img-wrapper">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStB3Wd0ue63mYPA8X_NmawKQONaVpePdXMfapsQJVpR-_n4JbV&usqp=CAU"
                alt
              />
            </div>
          </li>
          <li class="glide__slide">
            <div class="glide__img-wrapper">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStB3Wd0ue63mYPA8X_NmawKQONaVpePdXMfapsQJVpR-_n4JbV&usqp=CAU"
                alt
              />
            </div>
          </li>
          <li class="glide__slide">
            <div class="glide__img-wrapper">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStB3Wd0ue63mYPA8X_NmawKQONaVpePdXMfapsQJVpR-_n4JbV&usqp=CAU"
                alt
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Glide from "@glidejs/glide";
const config = {
  type: "carousel",
  startAt: 0,
  gap: 100,
  perView: 3,
  focusAt: 0,
  animationDuration: 500,
  // autoplay: 5000,
  hoverpause: true,
  breakpoints: {
    1300: {
      perView: 2
    },
    900: {
      perView: 1
    }
  }
};
export default {
  name: "TheSlider",
  data() {
    return {
      slider: null
    };
  },
  mounted() {
    this.slider = new Glide(".glide", config).mount();
  },
  beforeDestroy() {
    this.slider.destroy();
  }
};
</script>
<style lang="scss">
.our-products {
  position: relative;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  &__title {
    @include text($H700, 700, $light);
    text-align: center;
  }
}
$style: glide;
.#{$style} {
  padding: 10px;
  display: flex;
  align-items: center;
  &__track {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &__slide {
    padding: 34px;
    background-color: rgba($dark, 0.95);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__img-wrapper {
    opacity: 1;
    margin-bottom: 10px;
    overflow: hidden;
    border-radius: 10px;
  }
  &__title {
    @include text($H500, 700, $light);
    margin-bottom: 25px;
  }
  &__inputs {
    display: flex;
    width: 100%;
    justify-content: center;
  }
}
.button {
  @include text($H500, 700, $late);
  transition: all ease-in 0.3s;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  border: none;
  width: 120px;
  height: 40px;
  &:hover {
    color: $light;
    background-color: $late;
  }
}
.price {
  @include text($H500, 700, $sale);
  &::before {
    content: "$ ";
  }
}
</style>
