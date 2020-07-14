<template>
  <section class="advantages">
    <h2 class="title--main advantages__title">Our advantages</h2>
    <img class="img" src="./img/wood.jpg" alt />
    <ul class="advantages__list">
      <li class="advantages__item card">
        <the-service />
        <h3 class="title card__title">Service</h3>
        <p class="card__text">Highest quality and friendly</p>
      </li>
      <li class="advantages__item card">
        <the-thermometer />
        <h3 class="title card__title">Health</h3>
        <p class="card__text">daily we measure the temperature of our employees</p>
      </li>
      <li class="advantages__item card">
        <the-cleaning />
        <h3 class="title card__title">Cleaning</h3>
        <p class="card__text">Disinfect the entire room every 2 hours</p>
      </li>
      <li class="advantages__item card">
        <the-cake />
        <h3 class="title card__title">Kitchen</h3>
        <p class="card__text">Always fresh pastries and desserts for coffee</p>
      </li>
      <li class="advantages__item card">
        <the-car />
        <h3 class="title card__title">Delivery</h3>
        <p class="card__text">The fastest delivery in the city</p>
      </li>
    </ul>
  </section>
</template>
<script>
import TheService from "./svg/TheService";
import TheThermometer from "./svg/TheThermometer";
import TheCleaning from "./svg/TheCleaning";
import TheCake from "./svg/TheCake";
import TheCar from "./svg/TheCar";
export default {
  name: "TheAdvantages",
  components: {
    TheService,
    TheThermometer,
    TheCleaning,
    TheCake,
    TheCar
  }
};
</script>
<style lang="scss">
.advantages {
  position: relative;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  &__title {
    @include text($H700, 400, $light);
    margin-bottom: 30px;
  }
  &__list {
    padding: 35px;
    flex: 1 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    :not(:last-child) {
      margin-bottom: 30px;
    }
    @media screen and (min-width: 1070px) {
      padding: 0px;
      flex-direction: row;
      height: 60vh;
      :not(:last-child) {
        margin-right: 10px;
        margin-bottom: 0px;
      }
    }
  }
}
.card {
  position: relative;
  transition: all ease-out 0.5s;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  opacity: 0.95;
  -webkit-box-shadow: 1px 7px 18px 3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 7px 18px 3px rgba(0, 0, 0, 0.75);
  box-shadow: 1px 7px 18px 3px rgba(0, 0, 0, 0.75);
  background: rgba(170, 132, 70, 1);
  background: -moz-linear-gradient(
    45deg,
    rgba(170, 132, 70, 1) 0%,
    rgba(170, 132, 70, 1) 30%,
    rgba(226, 199, 156, 1) 100%
  );
  background: -webkit-gradient(
    left bottom,
    right top,
    color-stop(0%, rgba(170, 132, 70, 1)),
    color-stop(30%, rgba(170, 132, 70, 1)),
    color-stop(100%, rgba(226, 199, 156, 1))
  );
  background: -webkit-linear-gradient(
    45deg,
    rgba(170, 132, 70, 1) 0%,
    rgba(170, 132, 70, 1) 30%,
    rgba(226, 199, 156, 1) 100%
  );
  background: -o-linear-gradient(
    45deg,
    rgba(170, 132, 70, 1) 0%,
    rgba(170, 132, 70, 1) 30%,
    rgba(226, 199, 156, 1) 100%
  );
  background: -ms-linear-gradient(
    45deg,
    rgba(170, 132, 70, 1) 0%,
    rgba(170, 132, 70, 1) 30%,
    rgba(226, 199, 156, 1) 100%
  );
  background: linear-gradient(
    45deg,
    rgba(170, 132, 70, 1) 0%,
    rgba(170, 132, 70, 1) 30%,
    rgba(226, 199, 156, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#aa8446', endColorstr='#e2c79c', GradientType=1 );
  &::before {
    content: "";
    z-index: -1;
    border-radius: 5px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: 0.3s;
    background: rgba(202, 153, 73, 1);
    background: -moz-linear-gradient(
      -45deg,
      rgba(202, 153, 73, 1) 0%,
      rgba(123, 95, 50, 1) 54%,
      rgba(141, 109, 58, 1) 100%
    );
    background: -webkit-gradient(
      left top,
      right bottom,
      color-stop(0%, rgba(202, 153, 73, 1)),
      color-stop(54%, rgba(123, 95, 50, 1)),
      color-stop(100%, rgba(141, 109, 58, 1))
    );
    background: -webkit-linear-gradient(
      -45deg,
      rgba(202, 153, 73, 1) 0%,
      rgba(123, 95, 50, 1) 54%,
      rgba(141, 109, 58, 1) 100%
    );
    background: -o-linear-gradient(
      -45deg,
      rgba(202, 153, 73, 1) 0%,
      rgba(123, 95, 50, 1) 54%,
      rgba(141, 109, 58, 1) 100%
    );
    background: -ms-linear-gradient(
      -45deg,
      rgba(202, 153, 73, 1) 0%,
      rgba(123, 95, 50, 1) 54%,
      rgba(141, 109, 58, 1) 100%
    );
    background: linear-gradient(
      135deg,
      rgba(202, 153, 73, 1) 0%,
      rgba(123, 95, 50, 1) 54%,
      rgba(141, 109, 58, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ca9949', endColorstr='#8d6d3a', GradientType=1 );
  }
  &:hover::before {
    opacity: 1;
  }
  &:hover .svg {
    transition: all ease-in 0.4s;
    fill: $light;
  }
  &:hover {
    color: $grey-light;
  }
  &:hover .title {
    color: $grey-light;
  }
  &__title {
    @include text($H500, 700, $darker);
    transition: all ease-in 0.4s;
    letter-spacing: 2px;
  }
  &__text {
    text-align: center;
  }
}
.svg {
  fill: #35200b;
}
</style>