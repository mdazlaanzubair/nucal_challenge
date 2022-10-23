import { createStore } from "vuex";
import tasks from "./modules/tasks";

export const store = createStore({
  modules: {
    tasks,
  },
});
