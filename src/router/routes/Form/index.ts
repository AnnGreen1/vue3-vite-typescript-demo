import { RouteRecordRaw } from "vue-router";

const formRoute: RouteRecordRaw[] = [
  {
    path: "/FormIndex",
    name: "FormIndex",
    component: () => import("../../../views/Form/FormIndex.vue")
  }
];

export default formRoute;