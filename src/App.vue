<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
:root {
  --primary-dark: rgb(82, 45, 91);
  --primary-light: rgb(210, 230, 3);
  --primary-accent: rgb(215, 56, 94);
  --secondary-light: rgb(220, 240, 238);
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
  font-family: "Helvetica";
  text-align: center;
  color: var(--primary-dark);
}

*:active,
*:focus {
  outline: 0;
  outline-color: transparent;
  outline-width: 0;
  outline-style: none;
  box-shadow: 0 0 0 0 rgba(0, 123, 255, 0);
  -webkit-box-shadow: none !important;
  -moz-box-shadow: none !important;
}
</style>
