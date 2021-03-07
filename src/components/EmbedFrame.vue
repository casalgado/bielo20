<template>
  <transition name="fade">
    <div id="iframeCont" v-if="showFrame">
      <iframe
        :style="'height: ' + iframeHeight + 'px;'"
        frameborder="no"
        scrolling="no"
        seamless
        :src="src"
        :key="frameKey"
      ></iframe>
      <p @click="hideFrame">
        ×
      </p>
      <div class="dummies">
        <div id="cover">
          <div class="loading-gradient"></div>
        </div>
        <div id="titles"><div class="loading-gradient"></div></div>
        <div id="progress"><div class="loading-gradient"></div></div>
      </div>
    </div>
  </transition>
</template>

<script>
import { gsap } from "gsap";
export default {
  name: "EmbedFrame",
  data() {
    return {
      src: "",
      iframeHeight: 170,
      showFrame: false,
    };
  },
  methods: {
    hideFrame: function() {
      this.showFrame = false;
      this.$store.commit("setMediaUrl", "");
    },
  },
  computed: {
    mediaUrl() {
      return this.$store.state.mediaUrl;
    },
  },
  watch: {
    mediaUrl() {
      console.log("here");
      this.src = this.mediaUrl;
      if (this.src !== "") {
        this.showFrame = true;
        this.frameKey++;
        setTimeout(function() {
          gsap.to(".loading-gradient", {
            duration: 0.01,
            left: "-100%",
            ease: "easeOut",
          });
          gsap
            .to(".loading-gradient", {
              duration: 1,
              left: "-10%",
              ease: "easeOut",
            })
            .delay(0.02);
        });
      }
      if (this.src.includes("spotify")) {
        this.iframeHeight = 150;
      } else if (this.src.includes("megaphone")) {
        this.iframeHeight = 200;
        if (this.src.includes("BLO8331418360")) {
          this.iframeHeight = 400;
        }
      } else {
        this.iframeHeight = 170;
      }
    },
  },
};
</script>

<style scoped>
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
  background-color: rgba(0, 0, 0, 0.9);
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}

.dummies * {
  position: absolute;
  float: left;
  border-radius: 3px;
  margin: 5px;
  z-index: 8;
  overflow: hidden;
}

.loading-gradient {
  margin: 0px;
  width: 200%;
  position: relative;
  left: -100%;
  height: 100%;
  background: rgb(32, 35, 36);
  background: linear-gradient(
    90deg,
    rgba(32, 35, 36, 0.9) 0%,
    rgba(90, 90, 97, 0.9) 62%,
    rgba(32, 35, 36, 0.9) 100%
  );
}

#cover {
  top: 0;
  left: 0;
  margin: 10px;
  width: 130px;
  height: 130px;
  border-radius: 8px;
}

#titles {
  bottom: 55px;
  left: 150px;
  width: 30%;
  height: 30px;
}

#progress {
  bottom: 20px;
  left: 150px;
  width: 80%;
  height: 20px;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
