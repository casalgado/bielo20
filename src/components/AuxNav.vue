<template>
  <div class="bar">
    <div id="logo-cont">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 82.73 32.23"
        @click="goToHome"
      >
        <g data-name="Layer 2">
          <path
            class="cls-1"
            d="M27.65,14.39a3,3,0,0,1-2.06-.79,2.39,2.39,0,0,1-.88-1.85,2.45,2.45,0,0,1,.88-1.89,3.12,3.12,0,0,1,4.13,0,2.48,2.48,0,0,1,.87,1.89,2.69,2.69,0,0,1-.3,1.13,2.45,2.45,0,0,1-1,1.07A3.17,3.17,0,0,1,27.65,14.39ZM25.09,31.58V15.74h5.15V31.58Z"
          />
          <path
            class="cls-1"
            d="M32.94,23.76v-.13a8,8,0,0,1,.71-3.38,7.54,7.54,0,0,1,2-2.65,9,9,0,0,1,3-1.69,11.91,11.91,0,0,1,3.74-.58A10.41,10.41,0,0,1,46,16a8.17,8.17,0,0,1,2.87,1.72,7.8,7.8,0,0,1,2.47,5.71l-.07,1.51H38.09a2.8,2.8,0,0,0,.79,1.79,3.84,3.84,0,0,0,1.82,1,8,8,0,0,0,2,.28,7.87,7.87,0,0,0,2-.28A5.75,5.75,0,0,0,47,26.46l3,2.61A10.53,10.53,0,0,1,42.48,32a12.23,12.23,0,0,1-3.85-.58,8.72,8.72,0,0,1-3.05-1.67,7.46,7.46,0,0,1-1.95-2.6A8.06,8.06,0,0,1,32.94,23.76Zm5.22-1.92h8a2.2,2.2,0,0,0-.38-1.12,3.14,3.14,0,0,0-1.34-1.07,4.73,4.73,0,0,0-2-.45,5.35,5.35,0,0,0-2.89.77A2.5,2.5,0,0,0,38.16,21.84Z"
          />
          <path
            class="cls-1"
            d="M53.79,26.43V9.67h5.15v16a2.09,2.09,0,0,0,.49,1.55,2,2,0,0,0,1.52.49,5,5,0,0,0,1.24-.13v4.15a10.6,10.6,0,0,1-2.45.22,6.52,6.52,0,0,1-4.4-1.35A5.3,5.3,0,0,1,53.79,26.43Z"
          />
          <path
            class="cls-1"
            d="M63.37,23.66a7.25,7.25,0,0,1,.74-3.23,8.51,8.51,0,0,1,2.08-2.71,9.68,9.68,0,0,1,3.11-1.81,11.22,11.22,0,0,1,7.47,0,10.11,10.11,0,0,1,3.13,1.81A8.4,8.4,0,0,1,82,20.43a7.38,7.38,0,0,1,.74,3.23A7.46,7.46,0,0,1,82,26.9a8.26,8.26,0,0,1-2.09,2.7,9.91,9.91,0,0,1-3.13,1.81,11.06,11.06,0,0,1-7.47,0,9.5,9.5,0,0,1-3.11-1.81,8.37,8.37,0,0,1-2.08-2.7A7.32,7.32,0,0,1,63.37,23.66Zm5.15,0a3.78,3.78,0,0,0,.76,2.3A4,4,0,0,0,71.1,27.4a5.25,5.25,0,0,0,2,.41A5.37,5.37,0,0,0,75,27.4,4.06,4.06,0,0,0,76.82,26a3.78,3.78,0,0,0,.76-2.3,4.28,4.28,0,0,0-.45-1.76,4,4,0,0,0-1.59-1.68,4.82,4.82,0,0,0-5.71.5A3.88,3.88,0,0,0,68.52,23.66Z"
          />
          <path
            class="cls-1"
            d="M21.64,10.75A10.75,10.75,0,0,0,11,0H0V32.22H10.89a5.39,5.39,0,0,0,.65-10.74A10.76,10.76,0,0,0,21.64,10.75Zm-16,11.49a1.58,1.58,0,1,1,1.6-1.57A1.59,1.59,0,0,1,5.63,22.24Z"
          />
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuxNav",
  components: {},
  methods: {
    goToHome: function () {
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style scoped>
.bar {
  width: 100%;
  height: 50px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--primary-dark);
}

#logo-cont {
  height: 50px;
  width: 130px;
  margin: 0 auto;
  cursor: pointer;
}

.cls-1 {
  fill: var(--primary-dark);
}
</style>