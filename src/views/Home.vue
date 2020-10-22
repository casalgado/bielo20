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
    <h1 class="walltitle" @click="testState">
      HISTORIAS QUE EL MUNDO DEBE ESCUCHAR
    </h1>
    <Wall />
    <Banner />
    <Contact />

    <div id="iframeCont" v-if="showFrame">
      <iframe
        :style="'height: ' + iframeHeight + 'px;'"
        frameborder="no"
        scrolling="no"
        seamless
        :src="src"
        :key="frameKey"
      ></iframe>
      <p @click="showFrame = false">×</p>
    </div>

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
  data() {
    return {
      src: "",
      iframeHeight: 170,
      showFrame: false,
    };
  },
  methods: {
    handleScroll() {
      this.$store.commit("setScroll", window.pageYOffset);
    },
    testState() {
      console.log(this.$store.state.mediaUrl);
    },
  },
  computed: {
    mediaUrl() {
      return this.$store.state.mediaUrl;
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  watch: {
    mediaUrl() {
      console.log("here");
      this.src = this.mediaUrl;
      this.showFrame = true;
      this.frameKey++;
      if (this.src.includes("spotify")) {
        this.iframeHeight = 150;
      } else {
        this.iframeHeight = 170;
      }
    },
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
  font-family: "PT Sans", sans;
  font-weight: lighter;
  z-index: 3;
  background-color: var(--neutral-light);
  margin: 0;
  font-size: 3em;
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

iframe {
  position: relative;
  bottom: 0px;
  width: 100%;
  z-index: 9;
}

#iframeCont {
  position: fixed;
  bottom: 0px;
  width: 100%;
  z-index: 9;
  line-height: 0px;
  background-color: rgba(82, 45, 91, 0.8);
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
}

#iframeCont p {
  position: absolute;
  top: -12px;
  right: 5px;
  z-index: 10;
  cursor: pointer;
  line-height: 0px;
  font-size: 25px;
  width: 15px;
  height: 15px;
  color: var(--primary-accent);
}
</style>
