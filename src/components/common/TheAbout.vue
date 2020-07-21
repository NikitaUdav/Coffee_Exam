<template>
  <section class="about">
    <img
      class="img about__img"
      src="https://images.wallpaperscraft.ru/image/kofe_espresso_chashka_penka_111215_1600x1200.jpg"
      alt="about-photo"
    />
    <article
      class="about__article "
      uk-parallax="opacity: 0,0.9; y: 50,0; viewport: 0.4"
    >
      <h1 class="title about__title">Сhoose Us</h1>
      <p class="about__text">
        And you will never regret. Nothing says good morning like a great cup of
        coffee. And while there are coffee shops that can do the job on
        seemingly every corner, some are simply cooler to hang out in than
        others — and don’t forget, a study suggests that drinking coffee (and
        alcohol) may help you live longer.
      </p>
    </article>
  </section>
</template>
<script>
export default {
  name: "TheAbout",
};
</script>
<style lang="scss">
.about {
  text-align: center;
  padding: 50px;
  font-size: $H400;
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media screen and (min-width: $screen-tablet) {
    text-align: start;
  }
  &__img {
    object-position: right;
  }
  &__article {
    border-radius: 3px;
    max-width: 700px;
    background-color: $dark;
    opacity: 0.8;
    padding: 30px;
    padding-bottom: 90px;
  }
  &__title {
    @include text($H700, 400, $white);
  }
  &__text {
    @include text($H350, 400, $white);
  }
}
</style>
