<template>
  <div class="single">
    <img :src="src" />
    <h3 class="title">{{ title }}</h3>
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
      default: () => "titulo",
    },
  },
  computed: {
    src: function() {
      return require(`../assets/img/${this.imgName}`);
    },
  },
};
</script>

<style scoped>
img {
  width: 75%;
  margin: 15px;
  /* -webkit-filter: grayscale(100%); 
  filter: grayscale(100%); */
}

.title {
  font-family: "PT Serif", serif;
  font-style: italic;
  padding-left: 5px;
  color: var(--neutral-light);
  font-weight: lighter;
  text-align: center;
  margin-top: 0px;
}
</style>
