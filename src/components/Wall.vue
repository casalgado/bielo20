<template>
  <div id="wall">
    <WallSingleImage
      imgName="portada_ueo.png"
      title=""
      url="https://open.spotify.com/embed-podcast/episode/6TsSdVObjKkIJNTY9fdJS2"
    />
    <WallSingleImage
      imgName="portada_abdp.jpg"
      title=""
      url="https://playlist.megaphone.fm?e=BLO2651701391"
    />
    <WallSingleImage
      imgName="portada_ec.jpg"
      title=""
      url="https://playlist.megaphone.fm?e=BLO7828826121"
    />
    <WallSingleImage
      imgName="portada_bn.jpg"
      title=""
      url="https://playlist.megaphone.fm?e=BLO8565380552"
    />
    <WallSingleImage
      imgName="portada_mk.jpg"
      title=""
      url="https://open.spotify.com/embed-podcast/episode/1d12hQOIs9onUuPnP9Momv"
    />
    <WallSingleImage
      imgName="portada_jdc.jpg"
      title=""
      url="https://playlist.megaphone.fm?e=BLO4600962525"
    />
    <WallSingleImage
      imgName="portada_mpf.jpg"
      title=""
      url="https://open.spotify.com/embed-podcast/episode/47FrAzH4uQkuu27ak6ve28"
    />
    <WallSingleImage
      imgName="portada_tg.png"
      title=""
      url="https://open.spotify.com/embed-podcast/episode/6KsSYzEXLP7QaiAxcIYrgI"
    />
  </div>
</template>

<script>
import WallSingleImage from "@/components/WallSingleImage";
export default {
  name: "Home",
  components: { WallSingleImage },
};
</script>

<style scoped>
#wall {
  display: grid;
  gap: 40px;
  line-height: 0px;
  margin: 0 auto;
  z-index: 4;
  background-color: var(--neutral-light);
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 700px) {
  #wall {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-left: 20px;
    margin-right: 20px;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 700px) {
  #wall {
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 900px;
    gap: 30px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 1100px) {
  #wall {
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 1100px;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}
</style>
