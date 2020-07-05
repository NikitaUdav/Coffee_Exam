<template>
  <select v-model="selected" @change="$emit(filterBy(selected))" id="filter-selector">
    <option v-for="item in cats" :key="item.name" :value="item.value">{{item.name}}</option>
  </select>
</template>
<script>
export default {
  name: "TheSelector",
  props: {
    set_list: Array
  },
  data() {
    return {
      cats: [
        { name: "a-z", value: "a-z" },
        { name: "z-a", value: "z-a" },
        { name: "low-high", value: "low-high" },
        { name: "high-low", value: "high-low" }
      ],
      selected: "a-z"
    };
  },
  methods: {
    filterBy(option = this.selected) {
      const Flist = [...this.set_list];
      switch (option) {
        case "a-z":
          console.log("hi");
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
          console.log("z-a");
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
          console.log("z-a");
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
          console.log("z-a");
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
          break;
      }
      this.$emit("get-list", Flist);
    }
  }
};
</script>
<style lang="scss">
</style>