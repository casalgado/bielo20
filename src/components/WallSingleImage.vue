<template>
  <div class="single">
    <img :src="src" />
    <div class="overlay">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
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
      default: () => "TITULO",
    },
    description: {
      type: String,
      default: () => "breve descripcion",
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
  background-color: var(--primary-dark);
  width: 100%;
  padding-top: 100%;
  position: absolute;
  top: 0;
  margin: 0 auto;
}

.overlay * {
  position: absolute;
  width: 100%;
  color: var(--neutral-light);
}

.overlay h1 {
  top: 40%;
}

.overlay p {
  top: 50%;
}

.overlay:hover {
  opacity: 0.8;
  cursor: pointer;
}
</style>
