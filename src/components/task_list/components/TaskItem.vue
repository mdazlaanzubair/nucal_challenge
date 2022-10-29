<script>
import { mapActions } from "vuex";
import moment from "moment";

export default {
  props: ["task"],
  methods: {
    // vuex actions
    ...mapActions(["isCompleted", "isDeleted"]),
    timestamp(time) {
      return `${moment(time).format("LL")} ( ${moment(time).fromNow()} )`;
    },
  },
  computed: {},
};
</script>

<template>
  <!-- task item -->
  <div
    class="note note-primary bg-light p-3 mt-0 m-3 shadow"
    :class="task.isCompleted ? 'note-success' : 'note-primary'"
  >
    <span
      class="badge"
      :class="
        task.priority === 1
          ? 'badge-danger'
          : task.priority === 2
          ? 'badge-warning'
          : task.priority === 3
          ? 'badge-primary'
          : 'badge-info'
      "
      v-text="
        task.priority === 1
          ? 'Blocker'
          : task.priority === 2
          ? 'Critical'
          : task.priority === 3
          ? 'High'
          : 'Low'
      "
    ></span>

    <h4 class="my-3">{{ task.title }}</h4>
    <p>{{ task.desc }}</p>

    <!-- action center -->
    <div class="d-flex align-items-center justify-content-between">
      <strong class="text-muted small">{{ timestamp(task.timestamp) }}</strong>

      <!-- action buttons -->
      <div class="task-actions">
        <button
          class="btn btn-sm btn-success btn-floating mx-2"
          title="Completed"
          @click="isCompleted(task.id)"
        >
          <i class="fas fa-check"></i>
        </button>

        <div class="dropdown d-inline-block">
          <button
            class="btn btn-primary btn-floating btn-sm"
            type="button"
            id="action-btns"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fas fa-ellipsis-v"></i>
          </button>
          <ul class="dropdown-menu" aria-labelledby="action-btns">
            <li>
              <button
                class="dropdown-item"
                title="Edit Task"
                data-mdb-toggle="modal"
                :data-mdb-target="'#editTask-' + task.id"
              >
                <i class="far fa-edit me-2"></i> Edit Task
              </button>
            </li>

            <li>
              <button
                class="dropdown-item me-2"
                title="Delete Task"
                @click="isDeleted(task.id)"
              >
                <i class="far fa-trash-alt me-2"></i> Delete Task
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
