<template>
  <div class="row my-3">
    <div class="col-md">
      <!-- ---------------- -->
      <!-- tasks section -->
      <!-- ---------------- -->
      <div
        class="note note-light shadow my-5"
        v-for="task in tasksList"
        :key="task.id"
      >
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

        <!-- task body section -->
        <div class="d-flex align-items-center justify-content-between">
          <!-- task title -->
          <h6>{{ task.name }}</h6>

          <!-- task action center -->
          <div class="d-flex justify-content-between">
            <button
              v-if="task.subTasks.length < 4"
              class="btn btn-sm btn-info btn-floating mx-2"
              title="Add Sub-tasks"
            >
              <i class="fas fa-plus"></i>
            </button>
            <button
              v-if="task.subTasks.length == 0"
              class="btn btn-sm btn-danger btn-floating mx-2"
              title="Delete Task"
            >
              <i class="far fa-trash-alt"></i>
            </button>
          </div>
        </div>

        <!-- ---------------- -->
        <!-- subtasks section -->
        <!-- ---------------- -->
        <div
          v-show="task.subTasks.length > 0"
          class="ms-2 note note-secondary bg-light my-4"
          v-for="subTask in task.subTasks"
          :key="subTask.id"
        >
          <!-- sub-task criticality -->
          <p class="mb-1 small">
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

          <!-- sub-task body section -->
          <div class="d-flex justify-content-between">
            <!-- sub-task title -->
            <h6>{{ subTask.name }}</h6>

            <!-- task action center -->
            <button
              class="btn btn-sm btn-link text-dark btn-floating mx-2"
              title="Delete Task"
            >
              <i class="far fa-trash-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// importing mapGetter from VUEX in order to use getters
import { mapGetters } from "vuex";

export default {
  // using getter
  computed: mapGetters(["tasksList"]),
};
</script>

<style scoped></style>
