import { RouteRecordRaw } from "vue-router";

const Dev: RouteRecordRaw[] = [
  {
    path: "/Dev",
    name: "Dev",
    component: () => import("@/views/Dev/DevIndex.vue")
  }
];

export default Dev;