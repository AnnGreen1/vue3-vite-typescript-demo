import { RouteRecordRaw } from "vue-router";

const dev: RouteRecordRaw[] = [
  // typescriptaxios
  {
    path: "/dev/vshow",
    name: "dev-vshow",
    component: () => import("../../views/Dev/vshow.vue"),
  },
  {
    path: "/dev/SelfComponent",
    name: "dev-SelfComponent",
    component: () => import("../../views/Dev/SelfComponent.vue"),
  },
  {
    path: "/dev/Proxy",
    name: "dev-Proxy",
    component: () => import("../../views/Dev/Proxy.vue"),
  },
  {
    path: "/dev/ComputedParam",
    name: "dev-ComputedParam",
    component: () => import("../../views/Dev/ComputedParam.vue"),
  },
  {
    path: "/dev/CanvasCarmera",
    name: "dev-CanvasCarmera",
    component: () => import("../../views/Dev/CanvasCarmera.vue"),
  },
  {
    path: "/dev/UserMedia",
    name: "dev-UserMedia",
    component: () => import("../../views/Dev/UserMedia.vue"),
  },
  {
    path: "/dev/html2pdf",
    name: "dev-html2pdf",
    component: () => import("../../views/Dev/html2pdf/Index.vue"),
  },
  {
    path: "/dev/RecordRTC",
    name: "dev-RecordRTC",
    component: () => import("../../views/Dev/RecordRTC/Index.vue"),
  },
  {
    path: "/dev/audio",
    name: "dev-audio",
    component: () => import("../../views/Dev/RecordRTC/audio.vue"),
  },
  {
    path: "/dev/RecordRTC/TakePhoto",
    name: "dev-RecordRTC-TakePhoto",
    component: () => import("../../views/Dev/RecordRTC/TakePhoto.vue"),
  },
  {
    path: "/dev/RecordRTC/Test",
    name: "dev-RecordRTC-test",
    component: () => import("../../views/Dev/RecordRTC/Test.vue"),
  },
  {
    path: "/dev/RecordRTC/TestView",
    name: "dev-RecordRTC-TestView",
    component: () => import("../../views/Dev/RecordRTC/TestView.vue"),
  },
  {
    path: "/dev/RecordRTC/Video",
    name: "dev-RecordRTC-Video",
    component: () => import("../../views/Dev/RecordRTC/Video.vue"),
  },
];

export default dev;
