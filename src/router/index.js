import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",

    component: () => import("../views/begin.vue")
  },
  {
    path: "/Countdown",

    component: () => import("../views/Countdown.vue")
  },
  {
    path: "/begin",
    component: () => import("../views/begin.vue")
  },
  {
    path: "/gcd",
    component: () => import("../views/gcd.vue")
  },
  {
    path: "/Tunnel",
    component: () => import("../views/Tunnel_img.vue")
  },
  {
    path: "/video",
    component: () => import("../views/video.vue")
  },
  {
    path: "/musiccard",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/musiccard.vue")
  },
  {
    path: "/imgshow",
    name: "imgshow",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/imgshow.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
