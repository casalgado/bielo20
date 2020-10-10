<template>
  <div id="navbar">
    <p class="nav-left nav-sides">Historias</p>
    <div class="nav-center">
      <img
        id="logo"
        v-bind:style="{ width: logoWidth + 'px', top: logoTop + 'px' }"
        src="../assets/logotipo2.svg"
      />
    </div>
    <p class="nav-right nav-sides">Contacto</p>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      logoWidth: 400,
      logoTop: 250,
    };
  },
  computed: {
    scroll() {
      return this.$store.state.scrollPosition;
    },
  },
  watch: {
    scroll() {
      let currentPosition = this.scroll;

      // scroll props
      let maxScroll = 250;

      // width props
      let maxWidth = 400;
      let minWidth = 130;

      // top props
      let maxTop = 250;
      let minTop = 0;

      //  method
      if (this.scroll > maxScroll) {
        currentPosition = maxScroll;
      }
      this.logoWidth =
        maxWidth - (maxWidth - minWidth) * (currentPosition / maxScroll);

      this.logoTop = maxTop - (maxTop - minTop) * (currentPosition / maxScroll);
    },
  },
};
</script>

<style scoped>
#navbar {
  position: fixed;
  top: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  z-index: 6;
  width: 100%;
  background: transparent;
}

.nav-sides {
  font-size: 1.4em;
  padding-top: 10px;
  color: var(--primary-light);
}

.nav-left {
  margin-left: 25px;
  text-align: left;
}

.nav-center {
  position: relative;
}

.nav-right {
  text-align: right;
  margin-right: 25px;
}

#logo {
  padding-top: 20px;
  width: 400px;
  position: relative;
  top: 250px;
}
</style>
