<template>
  <header class="header">
    <img
      v-if="loading"
      class="img header__img"
      src="https://images.wallpaperscraft.ru/image/gorod_kafe_stul_stolik_razmytost_boke_59087_1440x900.jpg"
      alt="main-photo"
    />
    <transition-group name="fade" tag="span" class="header__title">
      <span v-for="(item, index) in text[0]" :key="index">{{ item }}</span>
    </transition-group>
    <transition-group name="fade" tag="span" class="header__title">
      <span v-for="(item, index) in text[1]" :key="index">{{ item }}</span>
    </transition-group>
  </header>
</template>
<script>
export default {
  name: "TheHeader",
  data() {
    return {
      text: [[], []],
      message: [..."Best and high quality, made/ with love just for you... "],
      word: "",
      i: 0,
      countStr: 0,
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
        t.message[t.i] === "/" ? t.countStr++ : t.countStr;
        if (t.message[t.i] === " ") {
          t.text[t.countStr].push(t.word);
          t.word = "";
          t.text[t.countStr].push("\u00A0");
        } else if (t.message[t.i] === "/") {
          t.countStr;
        } else {
          t.word += t.message[t.i];
          //console.log(`t.word =${t.word}, t.message[t.i] = ${t.message[t.i]}`);
          //
        }
        t.i++;
        t.text.join();
        t.timing = 100; //Math.floor(Math.random() * (100 - 2)) + 1;
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
.fade-enter,
.fade-leave-to {
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
    padding: 0px 15px 0px 15px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: flex-start;
    text-transform: uppercase;
    text-align: center;
    width: 100%;
    min-height: 75px;
    max-width: 850px;
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
