<template>
  <select class="filter" v-model="selected" id="filter-selector">
    <option
      class="filter__option"
      v-for="(item) in cats"
      :key="item.name"
      :value="item.value"
    >{{item.name}}</option>
  </select>
</template>
<script>
export default {
  name: "TheSelector",
  props: {
    value: String
  },
  data() {
    return {
      cats: [
        { name: "a - z", value: "a-z" },
        { name: "z - a", value: "z-a" },
        { name: "low - high", value: "low-high" },
        { name: "high - low", value: "high-low" }
      ]
    };
  },

  computed: {
    selected: {
      get() {
        return this.value;
      },
      set(e) {
        this.$emit("input", e);
      }
    }
  }
};
</script>
<style lang="scss">
.filter {
  @include text($H300, 400, $dark);
  padding: 3px;
  border: solid 1px $dark;
  min-width: 100px;
  min-height: 30px;
  border-radius: 6px;
  text-transform: capitalize;
  outline: none;
}
</style>