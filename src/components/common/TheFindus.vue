<template>
  <section class="find-us">
    <img class="img" src="./img/map.jpg" alt="map" />
    <h3 class="title find-us__title--main">find us</h3>
    <div class="find-us__container">
      <div class="find-us__map-wrapper">
        <the-place />
      </div>
      <article class="find-us__article">
        <h3 class="title find-us__title">WELL HELLO THERE!</h3>
        <p
          class="find-us__text find-us__text--main"
        >Welcome to our hometown, located in the heart of Warwickshire. We are walking along the road from Shakespeare's birthplace, and we have enough castles here to make Americans blush. Despite its rich history, we are also at the forefront of digital creativity and are part of a thriving community of technology and gaming companies in the area.</p>
        <h3 class="title find-us__title">Contact us</h3>
        <ul class="find-us__info-list">
          <li class="find-us__info-item">
            <span class="find-us__text">Call the studio</span>
            <span class="find-us__text">+44 (0) 1926 881080</span>
          </li>
          <li class="find-us__info-item">
            <span class="find-us__text">New business</span>
            <span class="find-us__text">newbiz@staak.co.uk</span>
          </li>
          <li class="find-us__info-item">
            <span class="find-us__text">General enquiries</span>
            <span class="find-us__text">hello@staak.co.uk</span>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>
<script>
import ThePlace from "./ThePlace";
export default {
  name: "TheFindus",
  components: { ThePlace }
};
</script>
<style lang="scss">
.find-us {
  position: relative;
  padding: 10px;
  padding-top: 50px;
  text-align: center;
  padding-bottom: 50px;
  &__container {
    margin: 0 auto;
    max-width: 1570px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: $screen-tablet) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
  &__article {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    max-width: 600px;
    color: $grey-light;
    background-color: rgba($dark, 0.8);
    border-radius: 20px;
    order: -1;
    margin-bottom: 30px;
    @media screen and (min-width: $screen-tablet) {
      order: 0;
      margin-bottom: 0px;
      align-items: flex-start;
    }
  }
  &__info-list {
    width: 100%;
    max-width: 310px;
    @media screen and (min-width: $screen-tablet) {
      text-align: start;
    }
  }
  &__info-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    :first-child {
      font-weight: 700;
    }
  }
  &__map-wrapper {
    display: flex;
    width: 100%;
    height: 400px;
    max-width: 600px;
    border: solid 2px $dark;
    border-radius: 20px;
    overflow: hidden;
    @media screen and (min-width: $screen-tablet) {
      width: 600px;
      margin-right: 20px;
    }
  }
  &__title {
    @include text($H500, 400, $grey-light);
    margin: 0 auto;
    margin-bottom: 20px;
    &--main {
      margin: 0 auto;
      background-color: rgba($dark, 0.8);
      border-radius: 20px;
      max-width: 300px;
      @include text($H700, 700, $light);
      margin-bottom: 60px;
    }
    @media screen and (min-width: $screen-tablet) {
      text-align: start;
      margin: 0px 0px 20px 0px;
    }
  }
  &__text {
    &--main {
      margin-bottom: 20px;
    }
    @media screen and (min-width: $screen-tablet) {
      text-align: start;
    }
  }
}
</style>
