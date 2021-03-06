<template>
  <div class="home" id="home">
    <div id="flag-cont" @click="toggleLanguage">
      <flag id="flag" :iso="lang" />
    </div>
    <Navbar />
    <Landing />
    <IntroText />
    <div class="transition">
      <div class="transition-gradient"></div>
      <vue-position-sticky :offsetTop="0" id="bw">
        <div class="background-white"></div>
      </vue-position-sticky>
    </div>
    <h1 v-if="lang == 'es'" id="history-box" class="walltitle">
      HISTORIAS QUE EL MUNDO DEBE ESCUCHAR
    </h1>
    <h1 v-else id="history-box" class="walltitle">
      STORIES THE WORLD NEEDS TO HEAR
    </h1>
    <Wall />
    <Banner />
    <Contact id="contact-box" />
    <EmbedFrame />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar2";
import Landing from "@/components/Landing";
import Wall from "@/components/Wall";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import IntroText from "@/components/IntroText";
import EmbedFrame from "@/components/EmbedFrame";
import { firebase } from "@/firebase";
export default {
  name: "Home",
  components: {
    Navbar,
    Landing,
    Wall,
    Banner,
    Contact,
    Footer,
    IntroText,
    EmbedFrame,
  },
  data() {
    return {};
  },
  computed: {
    lang() {
      return this.$store.state.lang;
    },
  },
  methods: {
    handleScroll() {
      this.$store.commit("setScroll", window.pageYOffset);
    },
    toggleLanguage() {
      console.log("ht");
      this.$store.commit("toggleLanguage");
    },
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
  },

  mounted() {
    window.scrollTo(0, 0);
    firebase.analytics().logEvent("page_view");
  },
};
</script>
<style scoped>
.home {
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;
  overflow: hidden;
}

.walltitle {
  font-family: "Agrandir";
  font-weight: normal;
  z-index: 3;
  background-color: var(--neutral-light);
  margin: 0;
  font-size: 1.5em;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 700px) {
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 700px) {
  .walltitle {
    font-size: 3em;
  }
  .transition-gradient {
    height: 600px;
    background-image: linear-gradient(rgba(255, 0, 0, 0), var(--neutral-light));
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 1100px) {
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}

.transition {
  z-index: 3;
}

.transition-gradient {
  height: 750px;
  background-image: linear-gradient(rgba(255, 0, 0, 0), var(--neutral-light));
}

.background-white {
  width: 100%;
  height: 150vh;
  background-color: var(--neutral-light);
  position: absolute;
}

#custom-bg {
  width: 100%;
  background-color: var(--primary-dark);
  margin: 0px;
  z-index: 9;
  position: relative;
  top: -50px;
  padding-bottom: 50px;
}

#flag {
  z-index: 999;
}

#flag-cont {
  position: fixed;
  cursor: pointer;
  width: 30px;
  top: 23px;
  left: 60px;
  z-index: 999;
  padding: 10px 5px 10px 5px;
}
</style>
