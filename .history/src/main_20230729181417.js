import { createApp } from "vue";
import App from "./App.vue";
import router from "../router/route";
import { borderBox1 } from "@jiaminghi/data-view";

createApp(App).use(router).use(borderBox1).mount("#app");
