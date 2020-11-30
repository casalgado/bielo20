<template>
  <div>
    <div class="gradient"></div>
    <vue-position-sticky :offsetTop="0" id="it">
      <div id="txt-cont">
        <h1 class="intro-text">
          Somos una productora de podcasts basada en <br />Bogotá y Los Ángeles.
          <br /><br />

          En Bielo usamos el poder de las historias, creemos en su capacidad de
          conexión, la fuerza del vínculo que generan y la facilidad que la
          tecnología nos brinda para contarlas.
          <br /><br />
          Bielo es el centro creativo donde las grandes ideas se encuentran con
          impecable producción para contar las historias que el mundo debe
          escuchar.
        </h1>
      </div>
    </vue-position-sticky>
  </div>
</template>

<script>
export default {
  name: "IntroText",
};
</script>

<style scoped>
#txt-cont {
  background-color: var(--primary-dark);
  min-height: 100vh;
}

h1 {
  font-size: 1.5em;
  padding: 40% 10% 18% 10%;
  font-family: "Agrandir";
  font-weight: 500;
  font-style: normal;
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
    font-size: 2em;
    padding: 15% 10% 18% 10%;
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
