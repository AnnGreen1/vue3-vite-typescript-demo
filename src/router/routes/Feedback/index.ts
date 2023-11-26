import { RouteRecordRaw } from "vue-router";

const Feedback: RouteRecordRaw[] = [
  {
    path: "/Feedback",
    name: "Feedback",
    component: () => import("@/views/Feedback/FeedbackIndex.vue")
  }
];

export default Feedback;