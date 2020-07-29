import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import form from "./modules/form/index";
import createPersistedState from "vuex-persistedstate";
import { alternative, machine, keepCup, coffee } from "./shop";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    store: { alternative, machine, keepCup, coffee },
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
      storage: window.sessionStorage,
      key: "cart",
      paths: ["cart", "TotalPositions", "Total", "form"],
    }),
  ],
  modules: {
    form,
  },
});
