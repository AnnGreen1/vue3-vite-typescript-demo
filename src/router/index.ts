import { createRouter, createWebHistory,createWebHashHistory, RouteRecordRaw } from "vue-router";

import commonRoute from "@/router/routes/commonroute";
import typescriptaxios from "@/router/routes/typescriptaxios";

import basicRoute from "@/router/routes/Basic/index";
import dataRoute from "@/router/routes/Data/index";
import feedbackRoute from "@/router/routes/Feedback/index";
import formRoute from "@/router/routes/Form/index";
import navigationRoute from "@/router/routes/Navigation/index";


const router = createRouter({
     // createWebHashHistory:hash模式; createWebHistory:历史模式; createMemoryHistory:ssr
  history: createWebHashHistory(),
  routes: [ ...commonRoute,...typescriptaxios,...basicRoute,...dataRoute,...feedbackRoute,...formRoute,...navigationRoute] as unknown as RouteRecordRaw[]
});
export default router