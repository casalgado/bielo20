<template>
  <div class="banner">
    <BannerSinglePage />
  </div>
</template>

<script>
import BannerSinglePage from "@/components/BannerSinglePage.vue";
export default {
  name: "Banner",
  components: { BannerSinglePage },
};
</script>

<style>
.banner {
  background-color: var(--primary-dark);
  width: 100%;
}
</style>
