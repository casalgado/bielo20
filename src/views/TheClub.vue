<template>
  <div>
    <Navbar />
    <Marketplace :expanded="true" />
    <Footer />
  </div>
</template>

<script>
import Marketplace from "../components/Marketplace.vue";
import Navbar from "../components/AuxNav.vue";
import Footer from "../components/Footer.vue";
export default {
  components: { Marketplace, Navbar, Footer },
};
</script>

<style scoped></style>
