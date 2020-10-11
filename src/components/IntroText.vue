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
  font-size: 1.5em;
  font-family: "PT Serif";
  padding: 40% 10% 18% 10%;
  min-height: 110vh;
  background-color: var(--primary-dark);
  color: var(--neutral-light);
  margin: 0;
}

.gradient {
  height: 120vh;
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

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 700px) {
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 700px) {
  h1 {
    font-size: 3.1em;
    padding: 10% 10% 18% 10%;
  }
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

.intro-text,
#it {
  z-index: -1;
  opacity: 0.99999;
}
</style>
