<template>
  <div class="col-md-4">
    <form class="card px-4 py-3 shadow bg-light" @submit="submitNewTask">
      <div class="form-group">
        <h4 class="text-center mt-3">TASK BOARD</h4>
      </div>

      <!-- divider -->
      <hr class="hr" />

      <div class="form-group mb-3">
        <label class="form-label fw-bold" for="name"
          >Task Title <span class="text-danger">*</span></label
        >
        <input
          type="text"
          id="name"
          name="name"
          v-model="name"
          class="form-control bg-light"
          placeholder="What's next..?"
          autocomplete="auto"
          minlength="3"
          maxlength="25"
          autofocus
          required
        />
        <!-- error msg display -->
        <small
          class="text-danger fw-bold mb-3 d-block"
          v-if="errors.name !== ''"
          >{{ errors.name }}</small
        >
      </div>

      <div class="form-group">
        <label class="form-label fw-bold d-block" for="level"
          >Task Priority <span class="text-danger">*</span></label
        >
        <small
          class="text-danger fw-bold mb-3 d-block"
          v-if="errors.level !== ''"
          >{{ errors.level }}</small
        >

        <!-- Blocker Level -->
        <div class="form-check small">
          <input
            class="form-check-input"
            type="radio"
            name="level"
            v-model="level"
            id="blocker"
            value="1"
            required
          />
          <label class="form-check-label" for="blocker">Blocker Level</label>
        </div>

        <!-- Critical Level -->
        <div class="form-check small">
          <input
            class="form-check-input"
            type="radio"
            name="level"
            v-model="level"
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
            name="level"
            v-model="level"
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
            name="level"
            v-model="level"
            id="low"
            value="4"
          />
          <label class="form-check-label" for="low">Low Level</label>
        </div>
      </div>

      <!-- divider -->
      <hr class="hr" />

      <!-- Submit button -->
      <button type="submit" class="btn btn-success btn-block">Add Task</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      errors: {
        name: "",
        level: "",
      },
      name: "",
      level: "",
    };
  },
  methods: {
    // vuex actions
    ...mapActions(["addTask"]),

    // submit function
    submitNewTask(e) {
      e.preventDefault();

      // validating user input
      // validating - "name"
      if (!this.name) return (this.errors.name = "Task title is required.");
      if (this.name.length < 3)
        return (this.errors.name =
          "Task title must be at least 3 characters long.");
      if (this.name.length > 25)
        return (this.errors.name =
          "Task title must not be more than 25 characters.");

      // validating - "level"
      if (!this.level)
        return (this.errors.level = "Task priority is required.");
      if (this.level.length < 1 || this.level.length > 4)
        return (this.errors.name = "Invalid input.");

      const today = new Date();

      // creating new task element
      const newTask = {
        id: Date.now(),
        name: this.name,
        level: parseInt(this.level), // Blocker = 1 > Critical = 2 > High = 3 > Low = 4
        state: false, // true ? completed : incomplete
        subTasks: [],
        timestamp: `${today.getDate()}-${
          today.getMonth() + 1 < 10
            ? "0" + today.getMonth() + 1
            : today.getMonth() + 1
        }-${today.getFullYear()}`,
        isDeleted: false, // true ? deleted
      };

      // calling "addTask" action from store
      this.addTask(newTask);

      // making form empty again
      this.name = "";
      this.level = "";
    },
  },
};
</script>
