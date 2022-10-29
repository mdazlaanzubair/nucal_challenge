<template>
  <!-- HEADER SECTION -->
  <Header />

  <!-- MAIN SECTION -->
  <div class="container">
    <Main />
  </div>

  <!-- FOOTER SECTION -->
  <Footer />
</template>

<script>
import Header from "./components/HeaderSection.vue";
import Main from "./components/MainSection.vue";
import Footer from "./components/FooterSection.vue";

export default {
  components: { Header, Main, Footer },
  name: "App",
};
</script>

<style scoped></style>
