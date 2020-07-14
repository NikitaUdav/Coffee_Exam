<template>
  <div class="our-products">
    <img class="img" src="./img/warehouse.jpg" alt />
    <h3 class="title--main our-products__title">our products</h3>
    <div class="glide__wrapper">
      <div class="glide">
        <div data-glide-el="track" class="glide__track">
          <ul class="glide__slides">
            <li class="glide__slide">
              <div class="glide__img-wrapper">
                <img class="img glide__img" src="./img/coffe1.png" alt="picture" />
              </div>
              <h3 class="glide__title title">Coffee</h3>
              <div class="glide__inputs">
                <router-link class="our-products__link" to="/coffee">More</router-link>
              </div>
            </li>
            <li class="glide__slide">
              <div class="glide__img-wrapper">
                <img class="img glide__img" src="./img/cip1.jpg" alt="picture" />
              </div>
              <h3 class="glide__title title">Keep Cup</h3>
              <div class="glide__inputs">
                <router-link class="our-products__link" to="/keepcup">More</router-link>
              </div>
            </li>

            <li class="glide__slide">
              <div class="glide__img-wrapper">
                <img class="img glide__img" src="./img/french1.jpg" alt="picture" />
              </div>
              <h3 class="glide__title title">Alternative coffee</h3>
              <div class="glide__inputs">
                <router-link class="our-products__link" to="/alts">More</router-link>
              </div>
            </li>
            <li class="glide__slide">
              <div class="glide__img-wrapper">
                <img class="img glide__img" src="./img/cip1.jpg" alt="picture" />
              </div>
              <h3 class="glide__title title">Sweets</h3>
              <div class="glide__inputs">
                <router-link class="our-products__link" to="/sweets">More</router-link>
              </div>
            </li>
            <li class="glide__slide">
              <div class="glide__img-wrapper">
                <img class="img glide__img" src="./img/machine1.png" alt="picture" />
              </div>
              <h3 class="glide__title title">Coffee Machine</h3>
              <div class="glide__inputs">
                <router-link class="our-products__link" to="/sweets">More</router-link>
              </div>
            </li>
            <li class="glide__slide">
              <div class="glide__img-wrapper">
                <img class="img glide__img" src="./img/cip1.jpg" alt="picture" />
              </div>
              <h3 class="glide__title title">Alternative coffee</h3>
              <div class="glide__inputs">
                <router-link class="our-products__link" to="/alts">More</router-link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Glide from "@glidejs/glide";
const config = {
  type: "carousel",
  startAt: 0,
  gap: 60,
  perView: 3,
  focusAt: 0,
  animationDuration: 500,
  autoplay: 5000,
  hoverpause: true,
  breakpoints: {
    1270: {
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
  padding-top: 30px;
  position: relative;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  &__title {
    margin: 0 auto;
    margin-bottom: 20px;
    @include text($H700, 400, $light);
    text-align: center;
  }
  &__link {
    @include text($H350, 700, $late);
    background-color: $white;
    text-decoration: none !important;
    text-align: center;
    width: 100%;
    max-width: 300px;
    transition: all ease-in 0.3s;
    border-radius: 5px;
    text-transform: capitalize;
    padding: 5px 15px 5px 15px;
    @media screen and (min-width: $screen-tablet) {
      max-width: 150px;
      &:hover {
        color: $light;
        background-color: $late;
      }
    }
  }
}
$style: glide;
.#{$style} {
  display: flex;
  align-items: center;
  padding-bottom: 40px;
  &__wrapper {
    padding: 20px;
  }

  &__slide {
    transition: all ease 0.3s;
    padding: 34px;
    background-color: rgba($dark, 0.95);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: 20px;
  }
  &__img-wrapper {
    background-color: white;
    position: relative;
    width: 100%;
    height: 0px;
    padding-bottom: 100%;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 20px;
  }
  &__img {
    z-index: 10 !important;
  }

  &__title {
    @include text($H500, 700, $light);
    margin-bottom: 30px;
  }
  &__inputs {
    display: flex;
    width: 100%;
    justify-content: center;
  }
}
</style>
