<template>
  <div>
    <div class="gradient"></div>
    <vue-position-sticky :offsetTop="0" id="it">
      <h1 class="intro-text">
        Yo sueño que estoy aquí destas prisiones cargado, y soñé que en otro
        estado más lisonjero me ví. ¿Qué es la vida? Un frenesí. ¿Qué es la
        vida? Una ilusión, una sombra, una ficción, y el mayor bien es pequeño:
        que toda la vida es sueño, y los sueños, sueños son.
      </h1>
    </vue-position-sticky>
  </div>
</template>

<script>
export default {
  name: "IntroText",
};
</script>

<style scoped>
h1 {
  font-weight: lighter;
  font-size: 3.1em;
  font-family: "PT Serif";
  padding: 15% 10% 18% 10%;
  min-height: 100vh;
  background-color: var(--primary-dark);
  color: var(--neutral-light);
  margin: 0;
  position: relative;
}

.gradient {
  height: 1600px;
  background: linear-gradient(
    0deg,
    var(--primary-dark) 0%,
    var(--primary-dark) 20%,
    rgba(28, 38, 40, 0.20351890756302526) 70%,
    rgba(255, 255, 255, 0) 100%
  );
  background: linear-gradient(
    0deg,
    var(--primary-dark) 0%,
    rgba(28, 38, 40, 0.20351890756302526) 50%,
    rgba(255, 255, 255, 0) 100%
  );
}

.intro-text,
#it {
  z-index: -1;
  opacity: 0.99999;
}
</style>
