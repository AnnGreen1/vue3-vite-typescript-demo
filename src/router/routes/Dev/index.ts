import { RouteRecordRaw } from "vue-router";

const devRoute: RouteRecordRaw[] = [
  {
    path: "/DevIndex",
    name: "DevIndex",
    component: () => import("../../../views/Dev/DevIndex.vue")
  }
];

export default devRoute;