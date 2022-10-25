<template>
  <!-- -------------- -->
  <!-- HEADER SECTION -->
  <!-- -------------- -->
  <Header />

  <!-- ------------ -->
  <!-- MAIN SECTION -->
  <!-- ------------ -->
  <div class="container">
    <div class="row justify-content-center my-3">
      <!-- FORM COMPONENT -->
      <AddTaskForm />

      <!-- TASK-LIST COMPONENT -->
      <TasksList />
    </div>
  </div>

  <!-- -------------- -->
  <!-- FOOTER SECTION -->
  <!-- -------------- -->
  <Footer />
</template>

<script>
import TasksList from "./components/TasksList.vue";
import AddTaskForm from "./components/AddTaskForm.vue";
import Header from "./components/HeaderSection.vue";
import Footer from "./components/FooterSection.vue";

export default {
  components: { Header, TasksList, AddTaskForm, Footer },
  name: "App",
};
</script>

<style scoped></style>
