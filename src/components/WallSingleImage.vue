<template>
  <div class="single">
    <img :src="src" />
    <div
      @click="setMediaUrl"
      :class="this.url ? 'overlay' : 'overlay disabled'"
    >
      <img v-if="this.url" src="../assets/img/speaker.svg" />
      <img v-else src="../assets/img/soon.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleImage",
  props: {
    imgName: {
      // should have name and extension, and be inside img folder in assets
      type: String,
      default: () => "one.jpg",
    },
    linkUrl: {
      type: String,
      default: () => "",
    },
    title: {
      type: String,
      default: () => "ESCUCHAR",
    },
    description: {
      type: String,
      default: () => "breve descripcion",
    },
    url: {
      type: String,
      default: () => null,
    },
  },
  methods: {
    setMediaUrl: function() {
      if (this.url) {
        this.$store.commit("setMediaUrl", this.url);
      }
    },
  },
  computed: {
    src: function() {
      return require(`../assets/img/${this.imgName}`);
    },
  },
};
</script>

<style>
img {
  width: 100%;
}

.single {
  position: relative;
}

.overlay {
  opacity: 0;
  background-color: var(--primary-accent);
  width: 100%;
  padding-top: 100%;
  position: absolute;
  top: 0;
  margin: 0 auto;
  transition: opacity 0.3s ease;
}

.overlay img {
  position: absolute;
  top: 30%;
  left: 30%;
  width: 40%;
  color: var(--neutral-light);
}

.overlay h1 {
  top: 40%;
}

.overlay p {
  top: 50%;
}

.overlay:hover {
  opacity: 0.9;
  cursor: pointer;
}

.disabled:hover {
  cursor: default;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 700px) {
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 700px) {
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
</style>
