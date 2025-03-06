import { RouteRecordRaw } from "vue-router";

const vueuse: RouteRecordRaw[] = [
  // commonroute
  {
    path: "/use-user-media",
    name: "commonroute",
    component: () => import("../../views/useUserMedia/Index.vue"),
  },
];

export default vueuse;
