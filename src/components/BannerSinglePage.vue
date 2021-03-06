<template>
  <div class="page">
    <div class="banner-title">
      <h1 v-if="lang == 'es'" class="title-text">
        EQUIPO
      </h1>
      <h1 v-else class="title-text">
        OUR TEAM
      </h1>
    </div>

    <BannerSingleImage
      imgName="d1.png"
      title="camilo"
      :position="position(0)"
    />
    <BannerSingleImage
      imgName="d3.jpg"
      title="esteban"
      :position="position(1)"
    />
    <BannerSingleImage
      imgName="d2.jpg"
      title="andres"
      :position="position(2)"
    />
  </div>
</template>

<script>
import BannerSingleImage from "@/components/BannerSingleImage";
export default {
  name: "Banner",
  components: { BannerSingleImage },
  computed: {
    lang: function() {
      return this.$store.state.lang;
    },
  },
  methods: {
    position(p) {
      if (this.lang == "es") {
        return ["creativo", "producción", "innovación"][p];
      } else {
        return ["creation", "production", "innovation"][p];
      }
    },
  },
};
</script>

<style scoped>
.title-text {
  font-family: "Agrandir";
}

.page {
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  max-width: 921px;
  margin: 0 auto;
}

.banner-title {
  grid-column: span 3;
}

.banner-title * {
  color: var(--neutral-light);
  font-weight: normal;
  float: left;
}

.subtitle-text {
  font-family: "PT Serif", serif;
  font-style: italic;
  padding-left: 5px;
}

@media only screen and (max-width: 700px) {
  .banner-title {
    width: 100%;
    max-width: 594px;
    padding-left: 20px;
  }
  .page {
    grid-template-columns: 1fr;
  }
  .banner-title {
    grid-column: span 1;
  }
}

@media only screen and (min-width: 700px) {
  .page {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .banner-title {
    grid-column: span 3;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 1100px) {
  .title {
    width: 921px;
  }
}
</style>
