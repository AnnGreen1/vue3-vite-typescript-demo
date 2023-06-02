import { RouteRecordRaw } from "vue-router";

const dev: RouteRecordRaw[] = [
  // typescriptaxios
  {
    path: "/dev/vshow",
    name: "dev-vshow",
    component: () => import("../../views/Dev/vshow.vue")
  },
  {
    path: "/dev/SelfComponent",
    name: "dev-SelfComponent",
    component: () => import("../../views/Dev/SelfComponent.vue")
  },
  {
    path: "/dev/Proxy",
    name: "dev-Proxy",
    component: () => import("../../views/Dev/Proxy.vue")
  },
  {
    path: "/dev/ComputedParam",
    name: "dev-ComputedParam",
    component: () => import("../../views/Dev/ComputedParam.vue")
  },
];

export default dev;