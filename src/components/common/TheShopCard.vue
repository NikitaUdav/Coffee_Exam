<template>
  <ul class="products-store__shop-list">
    <li v-for="item in mass" :key="item.id" class="shop-card">
      <dir class="shop-card__img-wrapper">
        <img class="imgs" :src="item.img" :alt="item.img" />
      </dir>
      <h3 class="shop-card__title title">{{ item.name }}</h3>
      <span class="shop-card__price">${{ item.cost }}</span>
      <div class="shop-card__inpunts">
        <button @click="addToItems(item)" class="shop-card__button">add to cart</button>
        <button class="shop-card__button">info</button>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: "TheShopCard",
  props: {
    mass: Array
  }
};
</script>
<style lang="scss">
.shop-card {
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: $grey;
  width: 95%;
  max-width: 350px;
  border-radius: 5px;
  margin-bottom: 50px;
  @media screen and (min-width: $screen-tablet) {
    transition: all ease 0.3s;
    width: 45%;
    margin-right: 70px;
    &:hover {
      transform: scale(1.1);
    }
  }
  @media screen and (min-width: $screen-hd) {
    width: 24%;
    margin-right: 30px;
  }
  @media screen and (min-width: $screen-retina) {
    width: 15%;
    margin-right: 20px;
  }
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
    @include text($H400, 400, #ffec3d);
    margin-bottom: 20px;
  }
  &__inpunts {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  &__button {
    @include text($H350, 700, $late);
    padding: 10px 15px 10px 15px;
    transition: all ease-in 0.3s;
    border-radius: 10px;
    cursor: pointer;
    border: none;
    outline: none;
    text-transform: capitalize;
    @media screen and (min-width: $screen-tablet) {
      max-width: 150px;
      &:hover {
        color: $light;
        background-color: $late;
      }
    }
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