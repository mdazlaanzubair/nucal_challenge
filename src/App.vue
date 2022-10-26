<template>
  <!-- HEADER SECTION -->
  <Header />

  <!-- MAIN SECTION -->
  <div class="container">
    <!-- TASK-LIST COMPONENT -->
    <TasksList />
  </div>

  <!-- FOOTER SECTION -->
  <Footer />
</template>

<script>
import TasksList from "./components/TasksList.vue";
import Header from "./components/HeaderSection.vue";
import Footer from "./components/FooterSection.vue";

export default {
  components: { Header, TasksList, Footer },
  name: "App",
};
</script>

<style scoped></style>
