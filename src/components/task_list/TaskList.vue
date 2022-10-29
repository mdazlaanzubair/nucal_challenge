<script>
import TaskItem from "./components/TaskItem.vue";
import AddTaskForm from "../forms/AddNewTask.vue";
import TaskFilters from "../forms/TaskFilters.vue";

export default {
  components: { TaskItem, AddTaskForm, TaskFilters },
  props: ["tasks"],
};
</script>

<template>
  <div class="row justify-content-center">
    <div class="col-md-4">
      <AddTaskForm />
    </div>
    <div class="col-md">
      <TaskFilters />
      <TaskItem v-for="task in tasks" :task="task" :key="task.id" />
    </div>
  </div>
</template>
