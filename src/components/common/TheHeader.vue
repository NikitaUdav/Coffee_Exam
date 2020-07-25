<template>
  <header class="header">
    <img
      v-if="loading"
      class="img header__img"
      src="https://images.wallpaperscraft.ru/image/gorod_kafe_stul_stolik_razmytost_boke_59087_1440x900.jpg"
      alt="main-photo"
    />
    <transition-group name="fade" tag="div" class="header__title">
      <span v-for="(item, index) in text" :key="index">{{ item }}</span>
    </transition-group>
  </header>
</template>
<script>
export default {
  name: "TheHeader",
  data() {
    return {
      text: [],
      message: [..."Best and high quality, made with love just for you..."],
      i: 0,
      timing: 250,
      timer: 250,
      loading: false,
    };
  },
  mounted() {
    this.timout();
    this.loading = true;
  },
  methods: {
    timout() {
      this.timer = setTimeout(this.loop, this.timing);
    },
    loop() {
      const t = this;
      if (t.i > t.message.length - 1) {
        clearTimeout(t.timer);
      } else {
        if (t.message[t.i] === " ") {
          t.text.push("\u00A0");
        } else {
          t.text.push(t.message[t.i]);
        }
        t.text.join();
        t.timing = 100; //Math.floor(Math.random() * (100 - 2)) + 1;
        t.i++;
        this.timout();
      }
    },
  },
};
</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: all 2s;
}
.fade-enter, .fade-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
.header {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__title {
    z-index: 2;
    @include text($H700, 700, $light);
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    text-transform: uppercase;
    text-align: center;
    width: 100%;
    min-height: 150px;
    max-width: 850px;
    padding: 32px;
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
