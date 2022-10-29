<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      id: this.task.id,
      title: this.task.title,
      desc: this.task.desc,
      priority: this.task.priority,
      error_msg: "",
    };
  },
  props: ["task"],
  methods: {
    // vuex actions
    ...mapActions(["editTask"]),

    // form validation function
    validateForm(title, desc, priority) {
      // validating title of the task
      if (title.length == 0 || title == "")
        // error, if description is not submitted
        return (this.error_msg = "Title is required.");
      if (title.length <= 5)
        // error, if title is less than 6 characters
        return (this.error_msg = "Title must be at least 6 characters long.");
      if (title.length >= 26)
        // error, if title is greater than 25 characters
        return (this.error_msg = "Title must not be more than 25 characters.");

      // validating description of the task
      if (desc.length == 0 || desc == "")
        // error, if description is not submitted
        return (this.error_msg = "Description is required.");
      if (desc.length < 6)
        // error, if description is less than 6 characters
        return (this.error_msg =
          "Description must be at least 6 characters long.");
      if (desc.length > 150)
        // error, if description is greater than 25 characters
        return (this.error_msg =
          "Description must not be more than 150 characters.");

      // validating priority of the task
      if (priority.length == 0)
        return (this.error_msg = "Task must have a priority.");
      if (this.priority.length < 1 || this.priority.length > 4)
        return (this.error_msg = "Invalid priority input.");

      // if no error just return empty error_msg
      return (this.error_msg = "");
    },

    // submit function for creating "new_task"
    submitNewTask(e) {
      e.preventDefault();

      // validating user input
      this.validateForm(this.title, this.desc, this.priority);

      // creating new task object which will replace the old task object and update the "taskList"
      const newTaskToUpdate = {
        id: this.id,
        title: this.title,
        desc: this.desc,
        priority: parseInt(this.priority), // Blocker = 1 > Critical = 2 > High = 3 > Low = 4
        isCompleted: false, // true ? completed : incomplete
        isDeleted: false, // true ? deleted
        timestamp: Date.now(),
      };

      // execute when there is no error
      if (this.error_msg === "") {
        // calling "addTask" action from store
        this.editTask(newTaskToUpdate);
      }
    },
  },
};
</script>

<template>
  <div
    class="modal fade"
    :id="'editTask-' + task.id"
    tabindex="-1"
    :aria-labelledby="'editTaskLabel-' + task.id"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <form class="modal-content" @submit="submitNewTask">
        <div class="modal-header">
          <h4
            class="card-title my-2 text-center"
            :id="'editTaskLabel-' + task.id"
          >
            Add New Task
          </h4>
          <button
            type="button"
            class="btn-close"
            data-mdb-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <!-- form errors section -->
          <small
            class="text-danger fw-bold mb-3 d-block"
            v-if="error_msg !== ''"
            v-text="error_msg"
          ></small>

          <!-- task title input group -->
          <div class="form-group mb-3">
            <label class="form-label fw-bold" for="title"
              >Title <span class="text-danger">*</span></label
            >
            <input
              type="text"
              id="title"
              v-model="title"
              class="form-control bg-light"
              placeholder="What's next..?"
              autofocus
            />
          </div>

          <!-- task description input group -->
          <div class="form-group mb-3">
            <label class="form-label fw-bold" for="desc"
              >Description <span class="text-danger">*</span></label
            >
            <textarea
              type="text"
              id="desc"
              v-model="desc"
              rows="3"
              class="form-control bg-light"
              placeholder="Describe the task..."
            />
          </div>

          <!-- task priority input group -->
          <div class="form-group">
            <label class="form-label fw-bold d-block" for="priority"
              >Priority <span class="text-danger">*</span></label
            >

            <!-- Blocker Level -->
            <div class="form-check small">
              <input
                class="form-check-input"
                type="radio"
                v-model="priority"
                id="blocker-edit-form"
                value="1"
              />
              <label class="form-check-label" for="blocker-edit-form"
                >Blocker Level</label
              >
            </div>

            <!-- Critical Level -->
            <div class="form-check small">
              <input
                class="form-check-input"
                type="radio"
                v-model="priority"
                id="critical-edit-form"
                value="2"
              />
              <label class="form-check-label" for="critical-edit-form"
                >Critical Level</label
              >
            </div>

            <!-- High Level -->
            <div class="form-check small">
              <input
                class="form-check-input"
                type="radio"
                v-model="priority"
                id="high-edit-form"
                value="3"
              />
              <label class="form-check-label" for="high-edit-form"
                >High Level</label
              >
            </div>

            <!-- Low Level -->
            <div class="form-check small">
              <input
                class="form-check-input"
                type="radio"
                v-model="priority"
                id="low-edit-form"
                value="4"
              />
              <label class="form-check-label" for="low-edit-form"
                >Low Level</label
              >
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="submit"
            class="btn btn-primary btn-block"
            data-mdb-dismiss="modal"
            aria-label="Close"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
