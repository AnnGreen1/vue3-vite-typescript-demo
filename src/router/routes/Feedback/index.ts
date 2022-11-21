import { RouteRecordRaw } from "vue-router";

const feedbackRoute: RouteRecordRaw[] = [
  {
    path: "/FeedbackIndex",
    name: "FeedbackIndex",
    component: () => import("../../../views/Feedback/FeedbackIndex.vue")
  }
];

export default feedbackRoute;