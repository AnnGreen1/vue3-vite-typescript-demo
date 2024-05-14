import { RouteRecordRaw } from "vue-router";

const Form: RouteRecordRaw[] = [
  {
    path: "/Form",
    name: "Form",
    component: () => import("@/views/Form/Index.vue")
  }
];

export default Form;