<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-md">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title my-5 text-center fw-bold">NUCAL - Task Board</h2>
            <SingleTask :tasks="tasksList" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SingleTask from "./SingleTask.vue";

export default {
  // component registration
  components: { SingleTask },
};
</script>

<style scoped></style>
