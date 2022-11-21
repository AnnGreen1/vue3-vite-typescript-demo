import { RouteRecordRaw } from "vue-router";

const dataRoute: RouteRecordRaw[] = [
  {
    path: "/DataIndex",
    name: "DataIndex",
    component: () => import("../../../views/Data/DataIndex.vue")
  }
];

export default dataRoute;