<template>
  <div class="row justify-content-center my-3">
    <div class="col-md-">
      <div class="task-list-header">
        <h3>TASK LIST</h3>

        <!-- divider -->
        <hr class="hr" />

        <!-- filtration and actions -->
        <div class="row justify-content-center mb-4">
          <!-- FILTERS COMPONENT -->
          <div class="col-md">
            <TaskListFilters />
          </div>
          <div class="col-md-2">
            <!-- FORM COMPONENT -->
            <AddTaskForm />
          </div>
        </div>
      </div>

      <!-- ---------------- -->
      <!-- tasks section -->
      <!-- ---------------- -->
      <div
        class="note bg-light shadow mb-5"
        :class="task.state ? 'note-success' : 'note-primary'"
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
            <!-- add new task btn -->
            <button
              v-if="task.subTasks.length < 4"
              class="btn btn-sm btn-primary btn-floating mx-2"
              title="Add Sub-tasks"
              data-mdb-toggle="modal"
              data-mdb-target="#addSubTask"
            >
              <i class="fas fa-plus"></i>
            </button>

            <!-- task edit btn -->
            <button
              class="btn btn-sm btn-info btn-floating mx-2"
              title="Edit Task"
            >
              <i class="far fa-edit"></i>
            </button>

            <!-- task delete btn -->
            <button
              v-if="task.subTasks.length == 0"
              class="btn btn-sm btn-danger btn-floating mx-2"
              title="Delete Task"
              @click="deleteTask([task.id, 0])"
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
          class="ms-2 note my-4"
          :class="subTask.state ? 'note-success' : 'note-primary'"
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

            <!-- task action center -->
            <div class="d-flex justify-content-between">
              <!-- task edit btn -->
              <button
                class="btn btn-sm btn-outline-info btn-floating mx-2"
                title="Edit Task"
              >
                <i class="far fa-edit"></i>
              </button>

              <!-- task delete btn -->
              <button
                class="btn btn-sm btn-outline-danger btn-floating mx-2"
                title="Delete Task"
                @click="deleteTask([task.id, subTask.id])"
              >
                <i class="far fa-trash-alt"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddTaskForm from "./AddTaskForm.vue";
import TaskListFilters from "./TaskListFilters.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: { AddTaskForm, TaskListFilters },
  methods: {
    // vuex actions
    ...mapActions(["sortTasksList", "deleteTask"]),
  },
  computed: mapGetters(["tasksList"]),
  created() {
    this.sortTasksList();
  },
};
</script>
