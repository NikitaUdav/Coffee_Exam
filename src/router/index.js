import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import List from "../views/List.vue";
import Cart from "../views/Cart.vue";
import Finaly from "../views/Finaly.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*/",
    name: "Home",
    component: Home,
  },
  {
    path: "/List/:id",
    name: "List",
    component: List,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/finaly",
    name: "Finaly",
    component: Finaly,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
