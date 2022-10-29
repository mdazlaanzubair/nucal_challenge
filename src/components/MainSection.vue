<script>
import AddTaskForm from "./forms/AddNewTask.vue";
import TaskList from "./task_list/TaskList.vue";
import { mapGetters } from "vuex";

export default {
  components: { AddTaskForm, TaskList },
  computed: {
    ...mapGetters(["filteredTasks"]),
  },
};
</script>

<template>
  <div class="row justify-content-center my-3">
    <div class="col-md-4">
      <AddTaskForm />
    </div>
    <div class="col-md-8">
      <TaskList :tasks="filteredTasks" />
    </div>
  </div>
</template>
