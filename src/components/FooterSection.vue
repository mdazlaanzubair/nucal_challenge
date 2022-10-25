<template>
  <footer class="text-center bg-light shadow-4">
    <div class="container pt-4">
      <!-- Section: Social media -->
      <section class="my-3">
        <h5 class="fw-bold">
          I'm social
          <sub>
            <i class="fas fa-hand-point-down text-warning"></i>
          </sub>
        </h5>
        <a
          v-for="link in social_links"
          :key="link.title"
          :href="link.link"
          :title="link.title"
          class="btn btn-floating m-1 mx-3"
          target="_blank"
          role="button"
          ><i :class="link.icon"></i
        ></a>
      </section>
      <!-- Section: Social media -->
    </div>

    <!-- Copyright -->
    <div
      class="text-center p-3 d-flex align-items-center justify-content-between px-5"
    >
      <p class="fw-bold small">NUCAL - Task Board Challenge</p>
      <p class="fw-bold small">
        Developed with <i class="fas fa-heart text-danger"></i> |
        <a class="link" href="https://github.com/mdazlaanzubair" target="_blank"
          >Muhammad Azlaan Zubair</a
        >
      </p>
    </div>
    <!-- Copyright -->
  </footer>
</template>

<script>
export default {
  data() {
    return {
      social_links: [
        {
          icon: "fab fa-facebook-f",
          color: "#4267B2",
          title: "Facebook",
          link: "https://www.facebook.com/mdazlaanzubair/",
        },
        {
          icon: "fab fa-twitter",
          color: "#00acee",
          title: "Twitter",
          link: "https://twitter.com/mdazlaanzubair",
        },
        {
          icon: "fab fa-linkedin-in",
          color: "#0072b1",
          title: "LinkedIn",
          link: "https://www.linkedin.com/in/mdazlaanzubair/",
        },
        {
          icon: "fab fa-instagram",
          color: "#e1306c",
          title: "Instagram",
          link: "https://www.instagram.com/mdazlaanzubair/",
        },
        {
          icon: "fab fa-whatsapp",
          color: "#34B7F1",
          title: "WhatsApp",
          link: "https://api.whatsapp.com/send?phone=03113046692&text=Hi, Azlaan!",
        },
        {
          icon: "fab fa-github",
          color: "#171515",
          title: "GitHub",
          link: "https://github.com/mdazlaanzubair",
        },
      ],
    };
  },
};
</script>
