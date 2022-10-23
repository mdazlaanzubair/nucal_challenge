import { createApp } from "vue";
import App from "./App.vue";
import { store } from "./centralized_store/index";

createApp(App).use(store).mount("#app");
