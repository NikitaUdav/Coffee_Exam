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
export default {
  name: "App",
  components: {
    TheNav,
    TheFooter
  }
};
</script>
<style lang="scss">
</style>
