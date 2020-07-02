<template>
  <form action="" class="pay-form">
    <h2 class="title pay-form__title">Contact information</h2>
    <ul class="pay-form__list">
      <li class="pay-form__item">
        <h4 class="pay-form__uper-title">First name</h4>
        <input class="pay-form__input" type="text" required />
      </li>
      <li class="pay-form__item">
        <h4 class="pay-form__uper-title">Last name</h4>
        <input class="pay-form__input" type="text" required />
      </li>
      <li class="pay-form__item">
        <h4 class="pay-form__uper-title">Phone number</h4>
        <input name="phone" class="pay-form__input" type="tel" required />
      </li>
      <li class="pay-form__item">
        <h4 class="pay-form__uper-title">Email</h4>
        <input name="email" class="pay-form__input" type="email" required />
      </li>
      <li class="pay-form__item">
        <h4 class="pay-form__uper-title">Location</h4>
        <input class="pay-form__input" type="text" required />
      </li>
    </ul>
    <button class="pay-form__button" type="submit">
      <span class="pay-form__price">To pay ${{ Total }}</span>
    </button>
  </form>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "ThePayForm",
  computed: {
    ...mapGetters(["Total"]),
  },
};
</script>
<style lang="scss">
.pay-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 840px) {
    width: 50%;
  }
  &__title {
    margin-bottom: 20px;
  }
  &__list {
    width: 50%;
    margin-bottom: 40px;
  }
  &__item {
    padding: 5px;
    margin-bottom: 5px;
  }
  &__uper-title {
    margin-bottom: 5px;
  }
  &__input {
    @include text($H300, 400, $dark);
    width: 100%;
    outline: none;
    border: 1px solid $grey;
    border-radius: 10px;
    min-height: 40px;
    padding: 2px;
    padding-left: 5px;
  }
  &__button {
    @include text($H400, 400, $sale);
    position: relative;
    transition: all ease 0.3s;
    border: none;
    outline: none;
    background-color: $late;
    text-transform: uppercase;
    border-radius: 10px;
    width: 50%;
    cursor: pointer;
    min-height: 70px;
    -webkit-box-shadow: 1px 7px 18px 3px rgba(0, 0, 0, 0.35);
    -moz-box-shadow: 1px 7px 18px 3px rgba(0, 0, 0, 0.35);
    box-shadow: 1px 7px 18px 3px rgba(0, 0, 0, 0.35);
    @media screen and (min-width: $screen-tablet) {
      &:hover {
        &::after {
          opacity: 1;
        }
      }
      &::after {
        transition: all ease 0.3s;
        content: "ORDER !";
        @include text($H700, 400, $sale);
        position: absolute;
        border-radius: 10px;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0;
        background-color: rgba(0, 0, 0, 0.9);
      }
    }
  }
}
</style>
