<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
:root {
  --primary-dark: rgb(28, 38, 40);
  --primary-light: rgb(220, 240, 238);
  --neutral-dark: rgb(30, 30, 30);
  --neutral-light: rgb(238, 238, 238);
}

@import url("https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap");

body {
  margin: 0px;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "PT Sans", sans-serif;
  text-align: center;
  color: var(--neutral-dark);
}
</style>
