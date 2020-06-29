import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: {},
    delItem: {},
    TotalPositions: 0,
    Total: 0,
  },
  getters,
  actions,
  mutations,
  plugins: [
    createPersistedState({
      key: "cart",
      paths: ["cart", "TotalPositions", "Total"],
    }),
  ],
});
