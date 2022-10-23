import { createApp } from "vue";
import App from "./App.vue";
import { store } from "./centralized_storage/store";

createApp(App).use(store).mount("#app");
