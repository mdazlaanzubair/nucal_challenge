<template>
  <div class="row my-3">
    <div class="col-md">
      <!-- ---------------- -->
      <!-- tasks section -->
      <!-- ---------------- -->
      <figure
        class="note note-secondary bg-light shadow-4"
        v-for="task in tasksList"
        :key="task.id"
      >
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
        <div class="action-center d-flex justify-content-between">
          <button
            v-if="task.subTasks.length < 4"
            class="btn btn-sm btn-info rounded-6"
            title="Add Sub-tasks"
          >
            <i class="fas fa-plus me-2"></i>
            Add sub-tasks
          </button>
          <button
            v-if="task.subTasks.length == 0"
            class="btn btn-sm btn-danger rounded-6"
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
          <div class="action-center d-flex justify-content-end">
            <button
              class="btn btn-sm btn-outline-dark btn-floating mt-0"
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
// importing mapGetter from VUEX in order to use getters 
import { mapGetters } from "vuex";

export default {
  // using getter
  computed: mapGetters(["tasksList"])
};
</script>

<style scoped></style>
