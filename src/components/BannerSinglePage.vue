<template>
  <div class="page">
    <div class="banner-title">
      <h1 class="title-text">BIELO:</h1>
      <h1 class="subtitle-text">equipo</h1>
    </div>
    <BannerSingleImage />
    <BannerSingleImage />
    <BannerSingleImage />
  </div>
</template>

<script>
import BannerSingleImage from "@/components/BannerSingleImage";
export default {
  name: "Banner",
  components: { BannerSingleImage },
};
</script>

<style scoped>
.page {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  max-width: 921px;
  margin: 0 auto;
}

.banner-title {
  grid-column: span 3;
}

.banner-title * {
  color: var(--neutral-light);
  font-weight: lighter;
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
  }
}

@media only screen and (min-width: 700px) {
  .banner-title {
    width: 100%;
    min-width: 594px;
    max-width: 900px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 1100px) {
  .title {
    width: 921px;
  }
}
</style>
