<template>
  <div></div>
</template>

<script>
export default {
  name: "CustomRouter",
  beforeCreate() {
    console.log(this.$route.query);
    if (this.$route.query.merchantId) {
      this.$router.push({ name: "estado", params: this.$route.query });
    } else {
      this.$router.push({ name: "home" });
    }
  },
};
</script>

<style>
</style>