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
];

export default dev;