<template>
  <div id="app">
    <the-nav />
    <router-view />
    <the-footer />
  </div>
</template>
<script>
import TheNav from "./components/common/TheNav";
import TheFooter from "./components/TheFooter";
function reset() {
  return;
}
export default {
  name: "App",
  components: {
    TheNav,
    TheFooter
  },
  state: reset(),
  mutations: {
    reset(state) {
      Object.assign(state, reset());
    }
  }
};
</script>
<style lang="scss"></style>
