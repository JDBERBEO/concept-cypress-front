import Vue from "vue";
import VueRouter from "vue-router";
// import { OasisAuth } from "@oasis/security";
// import store from "@/store";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach(async (to, from, next) => {
//   const payload = {
//     store,
//     publicPages: [],
//     customUrl: global?.conf?.customUrl || "https://masivapp.com/",
//   };
//   await OasisAuth.middlewareLogged({ to, from, next }, payload);
// });

export default router;
