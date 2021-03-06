import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",

    component: () => import("../views/begin.vue")
  },
  {
    path: "/play2/:type",

    component: () => import("../views/play2.vue")
  },
  {
    path: "/loading",

    component: () => import("../views/loading.vue")
  },
  {
    path: "/Introduction/:type2",

    component: () => import("../views/Introduction.vue")
  },

  {
    path: "/Countdown",

    component: () => import("../views/Countdown.vue")
  },
  {
    path: "/endgcd",

    component: () => import("../views/endgcd.vue")
  },
  {
    path: "/cicle",

    component: () => import("../components/cicle.vue")
  },
  {
    path: "/work",

    component: () => import("../views/work.vue")
  },
  {
    path: "/danger",

    component: () => import("../views/danger.vue")
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
