<template>
  <div>
    <Navbar />
    {{ params }}
  </div>
</template>

<script>
export default {
  name: "Estado",
  components: {},
  data() {
    return {
      params: {},
    };
  },
  created() {
    this.params = this.$route.params;
    console.log(this.$route.params);
  },
};
</script>

<style>
</style>