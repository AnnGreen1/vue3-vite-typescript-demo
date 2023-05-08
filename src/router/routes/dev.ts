import { RouteRecordRaw } from "vue-router";

const dev: RouteRecordRaw[] = [
  // typescriptaxios
  {
    path: "/dev/vshow",
    name: "dev-vshow",
    component: () => import("../../views/Dev/vshow.vue")
  },
];

export default dev;