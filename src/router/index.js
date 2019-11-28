import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import lazyC from "../lib/util"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: { idx: 0 }
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: { idx: 1 },
    component: () => import("../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
