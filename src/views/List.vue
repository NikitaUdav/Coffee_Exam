<template>
  <section class="products-store">
    <div class="t-container">
      <the-product-info />
    </div>
    <div class="products-store__filter-wrapper">
      <the-filter class="products-store__filter-icon" />
      <the-selector
        ref="filt"
        class="products-store__filter"
        v-model="sortBy"
      />
    </div>

    <the-shop-card class="products-store__shop-card" :mass="sortedList" />
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
      list: [],
      sortBy: "a-z",
    };
  },
  components: {
    TheShopCard,
    TheSelector,
    TheFilter,
    TheProductInfo,
  },
  computed: {
    sortedList() {
      const Flist = [...this.list];
      switch (this.sortBy) {
        case "a-z":
          Flist.sort((a, b) => {
            a.name.toLowerCase();
            b.name.toLowerCase();
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          });
          break;
        case "z-a":
          Flist.sort((a, b) => {
            if (a.name > b.name) {
              return -1;
            }
            if (a.name < b.name) {
              return 1;
            }
            return 0;
          });
          break;
        case "low-high":
          Flist.sort((a, b) => {
            if (a.cost < b.cost) {
              return -1;
            }
            if (a.cost > b.cost) {
              return 1;
            }
            return 0;
          });
          break;
        case "high-low":
          Flist.sort((a, b) => {
            if (a.cost > b.cost) {
              return -1;
            }
            if (a.cost < b.cost) {
              return 1;
            }
            return 0;
          });
          break;
        default:
      }
      return Flist;
    },
  },
  watch: {
    $route: "changeRoute",
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
    },
  },
};
</script>
<style lang="scss">
.products-store {
  background-color: #dee2e6;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  &__shop-list {
    padding: 20px 0px 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (min-width: $screen-tablet) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
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
