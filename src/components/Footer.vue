<template>
  <div class="footer">
    <ul class="left">
      <li>Bielo Media</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footer {
  z-index: 6;
  background-color: var(--neutral-light);
}
li {
  list-style-type: none;
  display: inline-block;
  margin-right: 8px;
}

.left {
  float: left;
}

.right {
  float: left;
  clear: both;
  margin-right: 0px;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 700px) {
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 700px) {
  .left {
    float: left;
  }

  .right {
    float: right;
    margin-right: 16px;
    clear: none;
  }

  li {
    margin: 10px;
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
</style>
