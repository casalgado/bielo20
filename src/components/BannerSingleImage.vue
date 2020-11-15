<template>
  <div class="single">
    <div class="imgCont">
      <img :src="src" />
      <div class="overlay">
        <p>{{ position }}</p>
      </div>
    </div>
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
    position: {
      type: String,
      default: () => "posicion",
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
.single {
}

.imgCont {
  position: relative;
}

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

.overlay {
  opacity: 0;
  background-color: var(--primary-dark);
  width: 80%;
  padding-top: 80%;
  position: absolute;
  left: 10%;
  top: 3%;
  transition: opacity 0.3s ease;
}

.overlay h1 {
  top: 40%;
}

.overlay p {
  position: absolute;
  width: 100%;
  text-align: center;
  top: 30%;
  font-family: "PT Serif", serif;
  font-style: italic;
  font-size: 1.6em;
  color: var(--neutral-light);
  font-weight: bolder;
  text-align: center;
}

.overlay:hover {
  opacity: 0.9;
  cursor: pointer;
}
</style>
