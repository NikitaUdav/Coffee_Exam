<template>
  <div class="finaly t-container">
    <h1 class="finaly__title">
      Thanks for order {{ this.form[0].value }}, id {{ this.idOrder }} it has
      been added to processing. The manager will contact you as soon as possible
    </h1>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Finaly",
  date() {
    return {
      idOrder: 0,
    };
  },
  created() {
    this.idOrder = Date.parse(new Date());
    console.log(Date.parse(new Date()));
  },
  computed: {
    ...mapGetters(["form"]),
  },
};
</script>
<style lang="scss">
.finaly {
  min-height: 100vh;
  padding: 36px;
  display: flex;
  align-items: center;
  background: rgba(217, 217, 217, 1);
  background: -moz-linear-gradient(
    top,
    rgba(217, 217, 217, 1) 0%,
    rgba(245, 245, 245, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(217, 217, 217, 1)),
    color-stop(100%, rgba(245, 245, 245, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(217, 217, 217, 1) 0%,
    rgba(245, 245, 245, 1) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(217, 217, 217, 1) 0%,
    rgba(245, 245, 245, 1) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(217, 217, 217, 1) 0%,
    rgba(245, 245, 245, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(217, 217, 217, 1) 0%,
    rgba(245, 245, 245, 1) 100%
  );
  &__title {
    text-align: center;
  }
}
</style>
