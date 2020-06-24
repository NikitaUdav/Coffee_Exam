<template>
  <div>
    <the-header />
    <the-about />
    <the-slider />
    <the-advantages />
    <the-findus />
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from "../components/common/TheHeader";
import TheAbout from "../components/common/TheAbout";

import TheAdvantages from "../components/common/TheAdvantages";
import TheFindus from "../components/common/TheFindus";
import TheSlider from "../components/common/TheSlider";
export default {
  name: "Home",
  components: {
    TheHeader,
    TheAbout,

    TheAdvantages,
    TheSlider,
    TheFindus
  }
};
</script>
