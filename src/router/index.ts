import { createRouter, createWebHistory,createWebHashHistory, RouteRecordRaw } from "vue-router";

import commonRoute from "./routes/commonroute";
import typescriptaxios from "./routes/typescriptaxios";

import basicRoute from "./routes/Basic/index";
import dataRoute from "./routes/Data/index";
import feedbackRoute from "./routes/Feedback/index";
import formRoute from "./routes/Form/index";
import navigationRoute from "./routes/Navigation/index";


const router = createRouter({
     // createWebHashHistory:hash模式; createWebHistory:历史模式; createMemoryHistory:ssr
  history: createWebHashHistory(),
  routes: [ ...commonRoute,...typescriptaxios,...basicRoute,...dataRoute,...feedbackRoute,...formRoute,...navigationRoute] as unknown as RouteRecordRaw[]
});
export default router