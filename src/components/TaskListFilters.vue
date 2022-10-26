<template>
  <select
    class="form-select-sm me-3"
    v-model="filter"
    v-on:change="filterOut($event)"
  >
    <option value="none">Filters</option>
    <optgroup label="Task Status">
      <option value="all">All</option>
      <option value="true">Completed</option>
      <option value="false">Incomplete</option>
    </optgroup>
    <optgroup label="Criticality">
      <option value="1">Blocker</option>
      <option value="2">Critical</option>
      <option value="3">High</option>
      <option value="4">Low</option>
    </optgroup>
  </select>

  <select
    class="form-select-sm me-3"
    v-model="sort"
    v-on:change="sortOut($event)"
  >
    <option value="none">Sort by</option>
    <option value="latest">Latest</option>
    <option value="ascending">Ascending</option>
    <option value="descending">Descending</option>
  </select>
</template>

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
