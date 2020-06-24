<template>
  <section class="product-range">
    <ul class="product-range__list">
      <li class="product-range__item">
        <div class="product-range__product">
          <div class="product-range__img-wrpapper">
            <img
              class="img"
              src="https://images.ua.prom.st/1861120742_kofevarka-espresso-mesko.jpg"
              alt
            />
          </div>
          <span class="product-range__name">Lorem, ipsum.</span>
        </div>
        <div class="product-range__product">
          <div class="product-range__img-wrpapper">
            <img
              class="img"
              src="https://images.ua.prom.st/1861120742_kofevarka-espresso-mesko.jpg"
              alt
            />
          </div>
          <span class="product-range__name">Lorem, ipsum.</span>
        </div>
      </li>
      <li class="product-range__item">
        <div class="product-range__product">
          <div class="product-range__img-wrpapper">
            <img
              class="img"
              src="https://images.ua.prom.st/1861120742_kofevarka-espresso-mesko.jpg"
              alt
            />
          </div>
          <span class="product-range__name">Lorem, ipsum.</span>
        </div>
        <div class="product-range__product">
          <div class="product-range__img-wrpapper">
            <img
              class="img"
              src="https://images.ua.prom.st/1861120742_kofevarka-espresso-mesko.jpg"
              alt
            />
          </div>
          <span class="product-range__name">Lorem, ipsum.</span>
        </div>
      </li>
      <li class="product-range__item">
        <div class="product-range__product">
          <div class="product-range__img-wrpapper">
            <img
              class="img"
              src="https://images.ua.prom.st/1861120742_kofevarka-espresso-mesko.jpg"
              alt
            />
          </div>
          <span class="product-range__name">Lorem, ipsum.</span>
        </div>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  name: "TheProductRange"
};
</script>
<style lang="scss">
.product-range {
  width: 100%;
  &__list {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  &__item {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &:nth-child(1) {
      justify-content: space-between;
      padding-left: 30px;
      padding-right: 30px;
    }
    &:nth-child(2) {
      justify-content: space-around;
    }
  }
  &__product {
    position: relative;
  }
  &__img-wrpapper {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>