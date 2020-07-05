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
      <the-selector :set_list="alternative" @get-list="getList" />
    </article>
    <the-shop-card :mass="list" />
  </section>
</template>
<script>
import { mapActions } from "vuex";
import { alternative } from "../prod";
import TheShopCard from "../components/common/TheShopCard";
import TheSelector from "../components/common/TheSelectorFilter";
export default {
  name: "Alts",
  data() {
    return {
      alternative,
      list: [...alternative]
    };
  },
  components: {
    TheShopCard,
    TheSelector
  },

  methods: {
    ...mapActions(["addToItems"]),
    getList(Flist) {
      this.list = [...Flist];
    }
  }
};
</script>
<style lang="scss">
.products-store {
  background-color: #dee2e6;
  display: flex;
  flex-direction: column;
  &__info {
    padding-bottom: 10px;
    padding-top: 70px;
    background-color: #dee2e6;
  }
  &__slider {
    width: 50%;
    border-radius: 5px;
    overflow: hidden;
  }
  &__shop-list {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (min-width: $screen-tablet) {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
}
</style>
