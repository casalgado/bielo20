<template>
  <div class="footer">
    <ul class="left">
      <li>Bielo Media</li>
    </ul>
    <ul class="right">
      <li>Newsletter</li>
      <li>Instagram</li>
      <li>Twitter</li>
      <li>LinkedIn</li>
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
  margin: 10px;
}

.left {
  float: left;
}

.right {
  float: right;
  margin-right: 16px;
}
</style>
