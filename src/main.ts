import { createApp } from 'vue'
import './style/index.scss'
import './style.css'
import App from './App.vue'
import router from "./router/index";

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount("#app");

// createApp(App).mount('#app')