<template>
  <section class="products-store">
    <the-product-info />
    <div class="products-store__filter-wrapper">
      <the-filter class="products-store__filter-icon" />
      <the-selector ref="filt" class="products-store__filter" :set_list="list" @get-list="getList" />
    </div>
    <the-shop-card class="products-store__shop-card" :mass="list" />
  </section>
</template>
<script>
import TheShopCard from "../components/common/TheShopCard";
import TheSelector from "../components/common/TheSelectorFilter";
import TheFilter from "../components/common/svg/TheFilter";
import TheProductInfo from "../components/common/TheProductInfo";
export default {
  name: "List",
  data() {
    return {
      router: this.$route.params.id,
      list: []
    };
  },
  components: {
    TheShopCard,
    TheSelector,
    TheFilter,
    TheProductInfo
  },
  watch: {
    $route: "changeRoute"
  },
  created() {
    this.list = this.$store.state.store[this.router];
  },
  methods: {
    getList(Flist) {
      this.list = [...Flist];
    },
    changeRoute() {
      this.router = this.$route.params.id;
      this.list = this.$store.state.store[this.router];
    },
    filterUpdate() {
      this.$refs.filt.filterBy();
    }
  }
};
</script>
<style lang="scss">
.products-store {
  background-color: #dee2e6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &__info {
  }

  &__shop-list {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (min-width: $screen-tablet) {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
  &__filter-wrapper {
    display: flex;
    justify-content: flex-end;
    padding: 32px;
    background-color: $grey;
    margin-bottom: 10px;
  }
  &__filter-icon {
    margin-right: 15px;
  }
}
</style>
