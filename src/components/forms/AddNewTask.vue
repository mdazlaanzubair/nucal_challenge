<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      title: "",
      desc: "",
      priority: "",
      error_msg: "",
    };
  },
  methods: {
    // vuex actions
    ...mapActions(["addTask"]),

    // form validation function
    validateForm(title, desc, priority) {
      // validating title of the task
      if (title.length == 0)
        // error, if description is not submitted
        return (this.error_msg = "Title is required.");
      if (title.length <= 5)
        // error, if title is less than 6 characters
        return (this.error_msg = "Title must be at least 6 characters long.");
      if (title.length >= 26)
        // error, if title is greater than 25 characters
        return (this.error_msg = "Title must not be more than 25 characters.");

      // checking uniqueness of the title from tasks already stored in centralized store
      const taskAlreadyExist = this.$store.getters.setFilteredTasks.find(
        (task) => {
          // if title already in the list return true
          if (task.title === title) {
            return true;
          }

          // else return false
          return false;
        }
      );
      if (taskAlreadyExist) return (this.error_msg = "Title must be unique.");

      // validating description of the task
      if (desc.length == 0)
        // error, if description is not submitted
        return (this.error_msg = "Description is required.");
      if (desc.length < 6)
        // error, if description is less than 6 characters
        return (this.error_msg =
          "Description must be at least 6 characters long.");
      if (desc.length > 25)
        // error, if description is greater than 25 characters
        return (this.error_msg =
          "Description must not be more than 150 characters.");

      // validating priority of the task
      if (priority.length == 0)
        return (this.error_msg = "Task must have a priority.");
      if (this.priority.length < 1 || this.priority.length > 4)
        return (this.error_msg = "Invalid priority input.");
    },

    // submit function for creating "new_task"
    submitNewTask(e) {
      e.preventDefault();

      // validating user input
      this.validateForm(this.title, this.desc, this.priority);

      // creating new task object
      const newTask = {
        id: Date.now(),
        title: this.title,
        desc: this.desc,
        priority: parseInt(this.priority), // Blocker = 1 > Critical = 2 > High = 3 > Low = 4
        isCompleted: false, // true ? completed : incomplete
        isDeleted: false, // true ? deleted
        timestamp: Date.now(),
      };

      // calling "addTask" action from store
      this.addTask(newTask);

      // making form empty again
      this.title = "";
      this.desc = "";
      this.priority = "";
    },
  },
};
</script>

<template>
  <form class="card" @submit="submitNewTask">
    <div class="card-header">
      <h4 class="card-title my-2 text-center">Add New Task</h4>
    </div>
    <div class="card-body">
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
            id="blocker"
            value="1"
          />
          <label class="form-check-label" for="blocker">Blocker Level</label>
        </div>

        <!-- Critical Level -->
        <div class="form-check small">
          <input
            class="form-check-input"
            type="radio"
            v-model="priority"
            id="critical"
            value="2"
          />
          <label class="form-check-label" for="critical">Critical Level</label>
        </div>

        <!-- High Level -->
        <div class="form-check small">
          <input
            class="form-check-input"
            type="radio"
            v-model="priority"
            id="high"
            value="3"
          />
          <label class="form-check-label" for="high">High Level</label>
        </div>

        <!-- Low Level -->
        <div class="form-check small">
          <input
            class="form-check-input"
            type="radio"
            v-model="priority"
            id="low"
            value="4"
          />
          <label class="form-check-label" for="low">Low Level</label>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <button type="submit" class="btn btn-primary btn-block">Add Task</button>
    </div>
  </form>
</template>
