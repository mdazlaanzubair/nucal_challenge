<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      filter: "all",
      sort: "latest",
    };
  },
  methods: {
    // vuex actions
    ...mapActions(["prioritize", "filterTasks"]),

    filterOut(e) {
      this.filterTasks(e.target.value);
    },

    sortOut(e) {
      this.prioritize(e.target.value);
    },
  },
};
</script>

<template>
  <div class="row justify-content-end mb-3">
    <div class="col-md px-4">
      <strong class="mx-2">Filter out:</strong>

      <select
        class="form-select-sm"
        v-model="filter"
        v-on:change="filterOut($event)"
      >
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>

      <strong class="mx-2">Sort by:</strong>
      <select
        class="form-select-sm"
        v-model="sort"
        v-on:change="sortOut($event)"
      >
        <optgroup label="Order by">
          <option value="latest">Latest First</option>
          <option value="oldest">Oldest First</option>
        </optgroup>
        <optgroup label="Prioritize">
          <option value="high-low">High to Low</option>
          <option value="low-high">Low to High</option>
        </optgroup>
      </select>
    </div>
  </div>
</template>
