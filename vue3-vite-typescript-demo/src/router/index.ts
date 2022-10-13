import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";


const history = createWebHistory()
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/TypescriptAxios.vue"),
  },
  // {
  //   path: '/TypescriptAxios',
  //   name: 'TypescriptAxios',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/TypescriptAxios.vue')
  // }
];
const router = createRouter({
      history,
      routes,
})
export default router