<template>
  <!-- HEADER SECTION -->
  <Header />

  <!-- MAIN SECTION -->
  <div class="container">
    <!-- TASK-LIST COMPONENT -->
    <Main />
  </div>

  <!-- FOOTER SECTION -->
  <Footer />
</template>

<script>
import Header from "./components/HeaderSection.vue";
import Main from "./components/MainComponent.vue";
import Footer from "./components/FooterSection.vue";

export default {
  components: { Header, Main, Footer },
  name: "App",
};
</script>

<style scoped></style>
