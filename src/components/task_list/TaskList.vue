<script>
import TaskItem from "./components/TaskItem.vue";
import TaskFilters from "../forms/TaskFilters.vue";

export default {
  components: { TaskItem, TaskFilters },
  props: ["tasks"],
};
</script>

<template>
  <TaskFilters />
  <TaskItem v-for="task in tasks" :task="task" :key="task.id" />
</template>
