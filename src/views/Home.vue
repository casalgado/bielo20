<template>
  <div class="home">
    <h1 class="walltitle">HISTORIAS / SENTIDO / INSPIRACION</h1>
    <Wall />
    <Banner />
    <Footer />
  </div>
</template>

<script>
import Wall from "@/components/Wall";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
export default {
  name: "Home",
  components: { Wall, Banner, Footer },
};
</script>
<style scoped>
.home {
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;
}
.walltitle {
  font-family: "PT Serif", serif;
  font-weight: lighter;
}
</style>
