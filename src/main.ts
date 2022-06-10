import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "@/router";
import { store } from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "@/styles/index.scss";
import "@/permission";
import loadSvg from "@/icons";

const app = createApp(App);

loadSvg(app);
app
  .use(store as any)
  .use(router as any)
  .use(ElementPlus)
  .mount("#app");
