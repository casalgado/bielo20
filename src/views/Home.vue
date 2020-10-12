<template>
  <div class="home">
    <Navbar />
    <Landing />
    <IntroText />
    <div class="transition">
      <div class="transition-gradient"></div>
      <vue-position-sticky :offsetTop="0" id="bw">
        <div class="background-white"></div>
      </vue-position-sticky>
    </div>
    <h1 class="walltitle">HISTORIAS / SENTIDO / INSPIRACION</h1>
    <Wall />
    <Banner />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";
import Wall from "@/components/Wall";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import IntroText from "@/components/IntroText";
export default {
  name: "Home",
  components: { Navbar, Landing, Wall, Banner, Contact, Footer, IntroText },
  methods: {
    handleScroll() {
      this.$store.commit("setScroll", window.pageYOffset);
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    window.scrollTo(0, 0);
  },
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
  z-index: 3;
  background-color: var(--neutral-light);
  margin: 0;
}

.transition {
  z-index: 3;
}

.transition-gradient {
  height: 600px;
  background-image: linear-gradient(rgba(255, 0, 0, 0), var(--neutral-light));
}

.background-white {
  width: 100%;
  height: 150vh;
  background-color: var(--neutral-light);
  position: absolute;
}
</style>
