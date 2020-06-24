<template>
  <header class="header">
    <img
      class="img header__img"
      src="https://images.wallpaperscraft.ru/image/gorod_kafe_stul_stolik_razmytost_boke_59087_1440x900.jpg"
      alt="main-photo"
    />
    <h1 class="title header__title">Best and high quality, made with love for you...</h1>
  </header>
</template>
<script>
export default {
  name: "TheHeader"
};
</script>
<style lang="scss">
.header {
  position: relative;
  padding-top: 30px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__title {
    z-index: 2;
    @include text($H700, 700, $light);
    text-transform: uppercase;
    text-align: center;
    max-width: 900px;
  }
  &__img {
  }
  &::before {
    content: "";
    z-index: 1;
    border-radius: 5px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    transition: 0.3s;
    background: $dark;
  }
}
</style>