<template>
  <div id="navbar">
    <p class="nav-left nav-sides">Historias</p>
    <h1 class="nav-center">BIELO</h1>
    <p class="nav-right nav-sides">Contacto</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#navbar {
  position: fixed;
  top: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  z-index: 6;
  width: 100%;
  /* background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.8) 35%,
    rgba(255, 255, 255, 1) 45%,
    rgba(255, 255, 255, 1) 100%
  ); */
}

.nav-sides {
  font-size: 1.4em;
  padding-top: 10px;
}

.nav-left {
  margin-left: 25px;
  text-align: left;
}

h1 {
  margin-top: 15px;
  font-size: 3em;
  padding-bottom: 2%;
}

.nav-right {
  text-align: right;
  margin-right: 25px;
}
</style>
