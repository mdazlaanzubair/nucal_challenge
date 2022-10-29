<script>
import TaskItem from "./components/TaskItem.vue";
import TaskFilters from "../forms/TaskFilters.vue";
import EditTaskModal from "../forms/EditTaskModal.vue";

export default {
  components: { TaskItem, TaskFilters, EditTaskModal },
  props: ["tasks"],
};
</script>

<template>
  <TaskFilters />
  <EditTaskModal v-for="task in tasks" :task="task" :key="task.id" />
  <TaskItem v-for="task in tasks" :task="task" :key="task.id" />
</template>
