<script>
export default {
  data() {
    return {
      filter: "none",
      sort: "none",
    };
  },
  methods: {
    filterOut(e) {
      console.log(e.target.value);
    },

    sortOut(e) {
      console.log(e.target.value);
    },
  },
};
</script>

<template>
  <div class="row justify-content-end mb-3">
    <div class="col-md">
      <select
        class="form-select-sm mx-3"
        v-model="filter"
        v-on:change="filterOut($event)"
      >
        <option value="none">Filter Tasks</option>
        <option value="all">All</option>
        <option value="true">Completed</option>
        <option value="false">Incomplete</option>
      </select>

      <select
        class="form-select-sm mx-3"
        v-model="sort"
        v-on:change="sortOut($event)"
      >
        <option value="none">Sort Tasks</option>
        <optgroup label="Prioritize">
          <option value="high-Low">High to Low</option>
          <option value="low-high">Low to High</option>
        </optgroup>
        <optgroup label="Order by">
          <option value="latest">Latest First</option>
          <option value="oldest">Oldest First</option>
        </optgroup>
      </select>
    </div>
  </div>
</template>
