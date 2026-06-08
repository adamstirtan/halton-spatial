import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import App from "./app/app.vue";
import { router } from "./router";
import "./app/assets/css/main.css";

const app = createApp(App);
const head = createHead();

app.use(head);
app.use(router);
app.mount("#app");
