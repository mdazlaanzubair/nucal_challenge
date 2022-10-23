<template>
  <div class="row">
    <div class="col-md">
      <!-- ---------------- -->
      <!-- tasks section -->
      <!-- ---------------- -->
      <figure class="note note-primary shadow-sm" v-for="task in tasksList" :key="task.id">
        <!-- task title -->
        <blockquote class="blockquote">
          <p>
            {{ task.name }}
          </p>
        </blockquote>

        <!-- task criticality -->
        <p>
          <span v-if="task.level == 1" class="badge badge-danger text-danger"
            >Blocker</span
          >
          <span v-if="task.level == 2" class="badge badge-warning text-warning"
            >Critical</span
          >
          <span v-if="task.level == 3" class="badge badge-primary text-primary"
            >High</span
          >
          <span v-if="task.level == 4" class="badge badge-info text-info"
            >Low</span
          >
        </p>

        <!-- task action center -->
        <div class="action-center d-flex justify-content-between my-3">
          <button
            v-if="task.subTasks.length < 4"
            class="btn btn-sm btn-info btn-floating rounded-3"
            title="Add Sub-tasks"
          >
            <i class="fas fa-plus"></i>
          </button>
          <button
            v-if="task.subTasks.length == 0"
            class="btn btn-sm btn-outline-danger"
            title="Delete Task"
          >
            <i class="far fa-trash-alt me-2"></i> Delete Task
          </button>
        </div>

        <!-- ---------------- -->
        <!-- subtasks section -->
        <!-- ---------------- -->
        <figure
          class="note note-info my-3"
          v-for="subTask in task.subTasks"
          :key="subTask.id"
        >
          <!-- sub-task title -->
          <blockquote class="blockquote">
            <p>
              {{ subTask.name }}
            </p>
          </blockquote>

          <!-- sub-task criticality -->
          <p>
            <span
              v-if="subTask.level == 1"
              class="badge badge-danger text-danger"
              >Blocker</span
            >
            <span
              v-if="subTask.level == 2"
              class="badge badge-warning text-warning"
              >Critical</span
            >
            <span
              v-if="subTask.level == 3"
              class="badge badge-primary text-primary"
              >High</span
            >
            <span v-if="subTask.level == 4" class="badge badge-info text-info"
              >Low</span
            >
          </p>

          <!-- sub-task action center -->
          <div class="action-center d-flex justify-content-end my-3">
            <button
              class="btn btn-sm btn-danger btn-floating rounded-3 mt-0"
              title="Delete Task"
            >
              <i class="far fa-trash-alt"></i>
            </button>
          </div>
        </figure>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    // loading tasks from virtual store using $VUEX
    tasksList() {
      // holding fetched tasks data in sort variable
      let sortedTasks = this.$store.state.tasks;

      // performing sort on whole array of objects
      sortedTasks.sort((task_a, task_b) => {
        // performing sort on nest tasks of first task element i.e. "task_a"
        if (task_a.subTasks.length > 0) {
          task_a.subTasks = task_a.subTasks.sort((subTask_a, subTask_b) => {
            if (subTask_a.level < subTask_b.level) return 1;
            if (subTask_a.level > subTask_b.level) return -1;
            else return 0;
          });
        }
        // performing sort on nest tasks of second task element i.e. "task_b"
        if (task_b.subTasks.length > 0) {
          task_b.subTasks = task_b.subTasks.sort((subTask_a, subTask_b) => {
            if (subTask_a.level > subTask_b.level) return 1;
            if (subTask_a.level < subTask_b.level) return -1;
            else return 0;
          });
        }

        // performing sort on main tasks elements
        if (task_a.level > task_b.level) return 1;
        if (task_a.level < task_b.level) return -1;
        else return 0;
      });

      // returning tasksList after sort
      return sortedTasks;
    },
  },
};
</script>

<style scoped></style>
