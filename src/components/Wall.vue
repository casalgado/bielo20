<template>
  <div id="wall">
    <WallSingleImage imgName="one.jpg" title="MICROCOSMOS" />
    <WallSingleImage
      imgName="two.jpg"
      title="JUNIOR FC"
      description="tu papa, los demas valen"
    />
    <WallSingleImage imgName="three.jpg" title="ESPORTS" />
    <WallSingleImage imgName="four.jpg" title="TEXTILES" />
    <WallSingleImage
      imgName="five.jpg"
      title="SANNUS FOODS"
      description="alimentacion para el planeta"
    />
    <WallSingleImage imgName="six.jpg" title="DELIVERY 2.0" />
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
