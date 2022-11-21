import { RouteRecordRaw } from "vue-router";

const navigationRoute: RouteRecordRaw[] = [
  {
    path: "/NavigationIndex",
    name: "NavigationIndex",
    component: () => import("../../../views/Navigation/NavigationIndex.vue")
  }
];

export default navigationRoute;