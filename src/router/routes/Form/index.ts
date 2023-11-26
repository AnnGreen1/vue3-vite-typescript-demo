import { RouteRecordRaw } from "vue-router";

const Form: RouteRecordRaw[] = [
  {
    path: "/Form",
    name: "Form",
    component: () => import("@/views/Form/FormIndex.vue")
  }
];

export default Form;