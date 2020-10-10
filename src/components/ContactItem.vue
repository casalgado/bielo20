<template>
  <div class="c-item">
    <h2>{{ title }}</h2>
    <p v-if="info1">{{ info1 }}</p>
    <p v-if="info2">{{ info2 }}</p>
    <p v-if="info3">{{ info3 }}</p>
    <p v-if="info4">{{ info4 }}</p>
  </div>
</template>

<script>
export default {
  name: "ContactItem",
  props: {
    title: {
      type: String,
      default: () => "titulo",
    },
    info1: {
      type: String,
      default: () => null,
    },
    info2: {
      type: String,
      default: () => null,
    },
    info3: {
      type: String,
      default: () => null,
    },
    info4: {
      type: String,
      default: () => null,
    },
  },
};
</script>

<style scoped>
.c-item {
  font-family: "Pt sans";
  text-align: left;
  font-weight: light;
}

h2 {
  border-bottom: 2px solid var(--primary-dark);
}

p {
  font-size: 1.4em;
  margin-top: 10px;
  margin-bottom: 0px;
}
</style>
