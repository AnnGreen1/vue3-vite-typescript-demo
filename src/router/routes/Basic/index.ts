import { RouteRecordRaw } from "vue-router";

const basicRoute: RouteRecordRaw[] = [
  {
    path: "/BasicIndex",
    name: "BasicIndex",
    component: () => import("../../../views/Basic/BasicIndex.vue")
  }
];

export default basicRoute;