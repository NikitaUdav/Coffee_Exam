<template>
  <section class="about">
    <img
      class="img about__img"
      src="https://images.wallpaperscraft.ru/image/kofe_espresso_chashka_penka_111215_1600x1200.jpg"
      alt="about-photo"
    />
    <article class="about__article">
      <h1 class="title">Text</h1>
      <p class="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
        ipsum minima at sit aperiam ducimus saepe tempore. Provident, odit
        qui.
      </p>
    </article>
  </section>
</template>
<script>
export default {
  name: "TheAbout2"
};
</script>
<style lang="scss">
.about {
  font-size: $H400;
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  &__img {
    object-position: right;
  }
  &__article {
    background-color: $dark;
    opacity: 0.8;
    padding: 20px;
  }
}
</style>