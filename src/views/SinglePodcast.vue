<template>
  <div>
    <Navbar />
    <div id="content">
      <div id="gradient"></div>
      <div class="text-container">
        <h1 id="title">Urbi et Orbi</h1>
        <p id="description">
          You can't expect to wield supreme power just 'cause some watery tart
          threw a sword at you! Be quiet! On second thoughts, let's not go
          there. It is a silly place. Listen. Strange women lying in ponds
          distributing swords is no basis for a system of government. Supreme
          executive power derives from a mandate from the masses, not from some
          farcical aquatic ceremony.
        </p>
        <p class="tag">Filosofia</p>
        <p class="tag">Discusión</p>
      </div>
      <div class="image-container">
        <img src="../assets/img/portada_ueo.png" />
      </div>
    </div>
    <div class="player-container"></div>
  </div>
</template>

<script>
import Navbar from "@/components/StaticNavbar";
export default {
  name: "SinglePodcast",
  components: { Navbar },
};
</script>

<style scoped>
#content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: var(--primary-dark);
  overflow: hidden;
  position: relative;
  width: 100%;
}

#content div {
  z-index: 99;
}

img {
  width: 70%;
  padding-top: 8%;
  padding-bottom: 8%;
}

.text-container {
  color: var(--neutral-light);
  grid-column: span 2;
  font-size: 120%;
  text-align: start;
  padding: 20px 20px 20px 60px;
}

#gradient {
  position: absolute;
  width: 100%;
  top: 60%;
  height: 100%;
  background-image: linear-gradient(rgba(255, 0, 0, 0), black);
}

.tag {
  border: 1px solid white;
  width: 100px;
  text-align: center;
  font-size: 90%;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  padding: 4px;
  float: left;
  margin-right: 15px;
}
</style>