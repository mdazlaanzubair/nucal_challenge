<template>
  <div class="row justify-content-center my-3">
    <div class="col-md">
      <div class="task-list-header">
        <h3>TASK LIST</h3>

        <!-- divider -->
        <hr class="hr" />

        <!-- filtration and actions -->
        <div class="row justify-content-center mb-4">
          <!-- FILTERS COMPONENT -->
          <div class="col-md"></div>
          <div class="col-md-2">
            <!-- FORM COMPONENT -->
          </div>
        </div>
      </div>

      <TaskList :tasks="tasksList" />
    </div>
  </div>
</template>

<script>
import TaskList from "./task_list/TaskList.vue";
import { mapActions } from "vuex";

export default {
  components: { TaskList },
  computed: {
    tasksList() {
      return this.$store.getters.setFilteredTasks;
    },
  },
  methods: {
    // vuex actions
    ...mapActions(["isCompleted", "deleteTask"]),
  },
};
</script>
