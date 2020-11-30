<template>
  <div
    id="navbar"
    v-bind:style="{
      background: 'rgba(238, 238, 238,' + opacity + ')',
    }"
  >
    <p
      class="nav-left nav-sides"
      v-bind:style="{
        color:
          'rgb(' +
          navLinksRed +
          ', ' +
          navLinksBlue +
          ', ' +
          navLinksGreen +
          ')',
      }"
      @click="scrollTo(historyBox)"
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        class="logoNav"
        x="0px"
        y="0px"
        width="25px"
        height="21.9px"
        viewBox="0 0 25 21.9"
        style="enable-background:new 0 0 25 21.9;"
        xml:space="preserve"
        v-bind:style="{
          fill:
            'rgb(' +
            navLinksRed +
            ', ' +
            navLinksBlue +
            ', ' +
            navLinksGreen +
            ')',
        }"
      >
        <path
          class="st0"
          d="M25,9.9c-0.1-1.7-0.6-3.2-1.5-4.6c-1.2-1.8-2.8-3-4.8-3.9c-2-0.9-4-1.3-6.4-1.3c-0.9,0-1.9,0.1-2.9,0.3
	c-1.7,0.4-3.4,1-4.8,2C3.1,3.3,1.8,4.6,1,6.2c-1.1,2.1-1.3,4.4-0.5,6.7c0.4,1.4,1.2,2.5,2.2,3.6c0.1,0.1,0.1,0.1,0.1,0.3
	c-0.3,1-0.7,1.8-1.2,2.7c-0.4,0.6-0.9,1.3-1.4,1.8C0,21.3,0,21.5,0.1,21.7c0.1,0.2,0.2,0.2,0.4,0.2c0.9,0,1.7-0.1,2.6-0.4
	c1.5-0.4,2.9-1.1,4.1-2.1c0.1-0.1,0.2-0.1,0.3,0c2.4,0.9,4.8,1.1,7.3,0.7c1.5-0.2,2.9-0.6,4.3-1.3c1.7-0.9,3.2-2,4.3-3.6
	C24.5,13.7,25.1,11.9,25,9.9z M11.7,5.2c0.2,0,0.5,0,0.7,0c0.2,0,0.5,0,0.7,0c0.3,0,0.5,0.2,0.4,0.5c0,0.7-0.1,1.4-0.1,2.1
	c-0.1,0.8-0.1,1.7-0.2,2.5c0,0.3,0,0.5-0.1,0.8c0,0.2-0.2,0.4-0.4,0.4c-0.3,0-0.6,0-0.8,0c-0.2,0-0.4-0.2-0.4-0.4
	c-0.1-1.2-0.2-2.4-0.2-3.6c0-0.5-0.1-1.1-0.1-1.6c0-0.1,0-0.1,0-0.2C11.3,5.4,11.5,5.2,11.7,5.2z M12.5,15c-0.7,0-1.2-0.5-1.2-1.2
	c0-0.6,0.5-1.1,1.2-1.1c0.7,0,1.2,0.5,1.2,1.2C13.7,14.4,13.1,15,12.5,15z"
        />
      </svg>
    </p>
    <div class="nav-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 92.38 43.63"
        class="vector"
        :class="hideWhale ? 'hide' : 'show'"
        id="whale"
        v-bind:style="{
          width: '459.7' + 'px',
          top: logoTop - 60.6 + 'px',
          fill: 'rgb(' + logoRed + ', ' + logoBlue + ', ' + logoGreen + ')',
        }"
      >
        <defs>
          <mask id="whMaskCont">
            <rect id="whMask" x="0" y="0" width="93" height="46" fill="#fff" />
          </mask>
        </defs>
        <title>whale</title>

        <path
          mask="url(#whMaskCont)"
          class="cls-1"
          d="M39.58,12.2h-.07C22,12.2,14.86,9.92,11.22,8.6a7.63,7.63,0,0,0,4-6.72c0-4.21-6.93,0-7.36,0S0-2.33,0,1.88A7.62,7.62,0,0,0,5.7,9.25c-2.39,6.14,5,34.38,33.81,34.38.87,0,1.74,0,2.59-.07H92.38V12.2Z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 82.73 32.23"
        class="vector"
        id="just-logo"
        v-bind:style="{
          width: logoWidth + 'px',
          top: logoTop + 'px',
          'margin-left': logoLeft + 'px',
          fill: 'rgb(' + logoRed + ', ' + logoBlue + ', ' + logoGreen + ')',
        }"
        @click="scrollTo(0)"
      >
        <defs>
          <mask id="flMaskCont">
            <rect id="flMask" x="0" y="0" width="22" height="35" fill="#fff" />
          </mask>
        </defs>
        <g id="full-logo" :mask="mobile ? '' : 'url(#flMaskCont)'">
          <path
            class="logoVector"
            d="M27.65,14.39a3,3,0,0,1-2.06-.79,2.39,2.39,0,0,1-.88-1.85,2.45,2.45,0,0,1,.88-1.89,3.12,3.12,0,0,1,4.13,0,2.48,2.48,0,0,1,.87,1.89,2.69,2.69,0,0,1-.3,1.13,2.45,2.45,0,0,1-1,1.07A3.17,3.17,0,0,1,27.65,14.39ZM25.09,31.58V15.74h5.15V31.58Z"
          />
          <path
            class="logoVector"
            d="M32.94,23.76v-.13a8,8,0,0,1,.71-3.38,7.54,7.54,0,0,1,2-2.65,9,9,0,0,1,3-1.69,11.91,11.91,0,0,1,3.74-.58A10.41,10.41,0,0,1,46,16a8.17,8.17,0,0,1,2.87,1.72,7.8,7.8,0,0,1,2.47,5.71l-.07,1.51H38.09a2.8,2.8,0,0,0,.79,1.79,3.84,3.84,0,0,0,1.82,1,8,8,0,0,0,2,.28,7.87,7.87,0,0,0,2-.28A5.75,5.75,0,0,0,47,26.46l3,2.61A10.53,10.53,0,0,1,42.48,32a12.23,12.23,0,0,1-3.85-.58,8.72,8.72,0,0,1-3.05-1.67,7.46,7.46,0,0,1-1.95-2.6A8.06,8.06,0,0,1,32.94,23.76Zm5.22-1.92h8a2.2,2.2,0,0,0-.38-1.12,3.14,3.14,0,0,0-1.34-1.07,4.73,4.73,0,0,0-2-.45,5.35,5.35,0,0,0-2.89.77A2.5,2.5,0,0,0,38.16,21.84Z"
          />
          <path
            class="logoVector"
            d="M53.79,26.43V9.67h5.15v16a2.09,2.09,0,0,0,.49,1.55,2,2,0,0,0,1.52.49,5,5,0,0,0,1.24-.13v4.15a10.6,10.6,0,0,1-2.45.22,6.52,6.52,0,0,1-4.4-1.35A5.3,5.3,0,0,1,53.79,26.43Z"
          />
          <path
            class="logoVector"
            d="M63.37,23.66a7.25,7.25,0,0,1,.74-3.23,8.51,8.51,0,0,1,2.08-2.71,9.68,9.68,0,0,1,3.11-1.81,11.22,11.22,0,0,1,7.47,0,10.11,10.11,0,0,1,3.13,1.81A8.4,8.4,0,0,1,82,20.43a7.38,7.38,0,0,1,.74,3.23A7.46,7.46,0,0,1,82,26.9a8.26,8.26,0,0,1-2.09,2.7,9.91,9.91,0,0,1-3.13,1.81,11.06,11.06,0,0,1-7.47,0,9.5,9.5,0,0,1-3.11-1.81,8.37,8.37,0,0,1-2.08-2.7A7.32,7.32,0,0,1,63.37,23.66Zm5.15,0a3.78,3.78,0,0,0,.76,2.3A4,4,0,0,0,71.1,27.4a5.25,5.25,0,0,0,2,.41A5.37,5.37,0,0,0,75,27.4,4.06,4.06,0,0,0,76.82,26a3.78,3.78,0,0,0,.76-2.3,4.28,4.28,0,0,0-.45-1.76,4,4,0,0,0-1.59-1.68,4.82,4.82,0,0,0-5.71.5A3.88,3.88,0,0,0,68.52,23.66Z"
          />
          <path
            class="logoVector"
            d="M21.64,10.75A10.75,10.75,0,0,0,11,0H0V32.22H10.89a5.39,5.39,0,0,0,.65-10.74A10.76,10.76,0,0,0,21.64,10.75Zm-16,11.49a1.58,1.58,0,1,1,1.6-1.57A1.59,1.59,0,0,1,5.63,22.24Z"
          />
        </g>
      </svg>
    </div>
    <p
      class="nav-right nav-sides"
      v-bind:style="{
        color:
          'rgb(' +
          navLinksRed +
          ', ' +
          navLinksBlue +
          ', ' +
          navLinksGreen +
          ')',
      }"
      @click="scrollTo(contactBox)"
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="21.9px"
        class="logoNav"
        height="25px"
        viewBox="0 0 21.9 25"
        style="enable-background:new 0 0 21.9 25;"
        xml:space="preserve"
        v-bind:style="{
          fill:
            'rgb(' +
            navLinksRed +
            ', ' +
            navLinksBlue +
            ', ' +
            navLinksGreen +
            ')',
        }"
      >
        <g>
          <path
            class="st0"
            d="M0,12.5C0,9.1,0,5.7,0,2.4C0,1,1,0,2.4,0c5.2,0,10.4,0,15.6,0c1.3,0,2.3,1,2.4,2.3c0,0.8,0,1.5,0,2.3
		c0,0.1,0,0.2,0.2,0.2c0.3,0,0.5,0,0.8,0c0.4,0,0.6,0.2,0.6,0.6c0,0.6,0,1.3,0,1.9c0,0.3-0.3,0.6-0.6,0.6c-0.3,0-0.6,0-0.8,0
		c-0.1,0-0.1,0-0.1,0.1c0,1,0,1.9,0,2.9c0,0.1,0,0.1,0.1,0.1c0.3,0,0.6,0,0.8,0c0.4,0,0.6,0.2,0.6,0.6c0,0.7,0,1.3,0,2
		c0,0.3-0.3,0.6-0.6,0.6c-0.3,0-0.6,0-0.8,0c-0.1,0-0.1,0-0.1,0.1c0,0.9,0,1.9,0,2.8c0,0.1,0,0.1,0.1,0.1c0.3,0,0.5,0,0.8,0
		c0.4,0,0.6,0.2,0.6,0.6c0,0.6,0,1.3,0,1.9c0,0.3-0.3,0.6-0.6,0.6c-0.3,0-0.6,0-0.8,0c-0.1,0-0.1,0-0.1,0.1c0,0.7,0,1.4,0,2.2
		c0,1.2-0.8,2.2-2,2.4c-0.1,0-0.2,0-0.3,0c-5.2,0-10.4,0-15.6,0c-1.1,0-2.1-0.8-2.3-1.9c0-0.2,0-0.3,0-0.5C0,19.2,0,15.9,0,12.5z
		M18,12.5c0-3.3,0-6.7,0-10c0-0.1,0-0.2-0.2-0.2c-5.1,0-10.2,0-15.3,0c-0.2,0-0.2,0-0.2,0.2c0,6.7,0,13.3,0,20c0,0.2,0,0.2,0.2,0.2
		c5.1,0,10.2,0,15.3,0c0.1,0,0.2,0,0.2-0.2C18,19.2,18,15.8,18,12.5z"
          />
          <path
            class="st0"
            d="M10.1,18.8c-1.5,0-2.9,0-4.4,0c-0.3,0-0.5-0.1-0.7-0.2c-0.2-0.2-0.3-0.4-0.4-0.6c0-0.4,0-0.9,0-1.3
		c0.1-0.7,0.4-1.3,1-1.8c0.7-0.6,1.5-0.8,2.4-0.8c0.2,0,0.3,0.1,0.5,0.1c1,0.3,2.1,0.4,3.1,0c1.2-0.4,3.2,0.3,3.7,1.7
		c0.1,0.2,0.2,0.5,0.2,0.8c0,0.4,0,0.8,0,1.2c0,0.4-0.3,0.6-0.7,0.8c-0.1,0.1-0.3,0.1-0.4,0.1C13.1,18.7,11.6,18.8,10.1,18.8z"
          />
          <path
            class="st0"
            d="M10.2,6.3c1.7,0,3.1,1.4,3.1,3.2c0,1.7-1.4,3.1-3.1,3.1C8.4,12.5,7,11.1,7,9.3C7.1,7.6,8.5,6.2,10.2,6.3z"
          />
        </g>
      </svg>
    </p>
  </div>
</template>

<script>
import { gsap } from "gsap";
export default {
  name: "Navbar",
  data() {
    return {
      logoWidth: 400,
      logoTop: 250,
      logoLeft: 0,
      opacity: 0,
      navSidesColor: 238,
      logoRed: 210,
      logoBlue: 230,
      logoGreen: 3,
      navLinksRed: 238,
      navLinksBlue: 238,
      navLinksGreen: 238,
      hideWhale: false,
      historyBox: 0,
      contactBox: 0,
      mobile: false,
    };
  },
  computed: {
    scroll() {
      return this.$store.state.scrollPosition;
    },
  },
  methods: {
    animate: function() {
      gsap.to(".nav-center", {
        duration: 1,
        left: "160px",
        ease: "easeIn",
      });
      gsap
        .to(".nav-center", {
          duration: 2,
          left: "-200px",
          ease: "easeIn",
        })
        .delay(1);
      gsap
        .to("#whMask", {
          duration: 1,
          width: 0,
          x: 93,
          ease: "easeIn",
        })
        .delay(1);
      gsap
        .to("#flMask", {
          duration: 1,
          width: 90,
          ease: "easeOut",
        })
        .delay(1.9);
      setTimeout(
        function() {
          this.hideWhale = true;
        }.bind(this),
        2000
      );
    },
    scrollTo(to) {
      console.log(to);
      window.scroll({
        top: to,
        left: 0,
        behavior: "smooth",
      });
    },
  },
  watch: {
    scroll() {
      console.log(this.scroll);
      let positionOne = this.scroll;
      let positionTwo = this.scroll;

      // scroll props
      let maxNavScroll = 250;
      let opacityStartScroll = 2250;
      let opacityEndScroll = 2400;

      // width props
      let responsiveWidth;
      let responsiveLeft;
      if (this.mobile) {
        responsiveWidth = 230;
        responsiveLeft = 50;
      } else {
        responsiveWidth = 400;
        responsiveLeft = 100;
      }
      let maxWidth = responsiveWidth;
      let minWidth = 130;

      // top props
      let maxTop = 250;
      let minTop = 0;

      // left props
      let endLeft = 0;
      let startLeft = responsiveLeft;

      // color props logo
      let startRed = 82;
      let startBlue = 45;
      let startGreen = 91;
      let endRed = 210;
      let endBlue = 230;
      let endGreen = 3;

      // color props links
      let linkStartRed = 238;
      let linkStartBlue = 238;
      let linkStartGreen = 238;

      if (this.scroll > 2) {
        this.hideWhale = true;
      }

      if (this.scroll > maxNavScroll) {
        positionOne = maxNavScroll;
      }
      if (this.scroll < opacityStartScroll) {
        positionTwo = opacityStartScroll;
      }
      if (this.scroll > opacityEndScroll) {
        positionTwo = opacityEndScroll;
      }
      this.logoWidth =
        maxWidth - (maxWidth - minWidth) * (positionOne / maxNavScroll);

      this.logoTop = maxTop - (maxTop - minTop) * (positionOne / maxNavScroll);
      this.logoLeft =
        endLeft - (endLeft - startLeft) * (positionOne / maxNavScroll);

      this.opacity =
        1 -
        (opacityEndScroll - positionTwo) /
          (opacityEndScroll - opacityStartScroll);

      this.logoRed =
        startRed +
        ((endRed - startRed) * (opacityEndScroll - positionTwo)) /
          (opacityEndScroll - opacityStartScroll);
      this.logoBlue =
        startBlue +
        ((endBlue - startBlue) * (opacityEndScroll - positionTwo)) /
          (opacityEndScroll - opacityStartScroll);
      this.logoGreen =
        startGreen +
        ((endGreen - startGreen) * (opacityEndScroll - positionTwo)) /
          (opacityEndScroll - opacityStartScroll);

      this.navLinksRed =
        startRed +
        ((linkStartRed - startRed) * (opacityEndScroll - positionTwo)) /
          (opacityEndScroll - opacityStartScroll);
      this.navLinksBlue =
        startBlue +
        ((linkStartBlue - startBlue) * (opacityEndScroll - positionTwo)) /
          (opacityEndScroll - opacityStartScroll);
      this.navLinksGreen =
        startGreen +
        ((linkStartGreen - startGreen) * (opacityEndScroll - positionTwo)) /
          (opacityEndScroll - opacityStartScroll);
    },
  },
  created() {
    let wwidth = parseInt(window.innerWidth);
    if (wwidth < 500) {
      console.log("mobile");
      this.mobile = true;
    }
  },
  mounted() {
    let responsiveWidth;
    if (this.mobile) {
      responsiveWidth = 230;
      this.hideWhale = true;
    } else {
      responsiveWidth = 400;
    }
    this.logoWidth = responsiveWidth;
    window.scrollTo(0, 0);

    var home = document.getElementsByTagName("body")[0];
    console.log(home.getBoundingClientRect());

    var viewportOffset1 = document.getElementById("contact-box");
    console.log(viewportOffset1);
    console.log(viewportOffset1.getBoundingClientRect());
    this.contactBox = this.mobile ? 4380 : 9999;

    var viewportOffset2 = document.getElementById("history-box");
    console.log(viewportOffset2);
    console.log(viewportOffset2.getBoundingClientRect());
    this.historyBox = viewportOffset2.getBoundingClientRect().top - 100;
    if (!this.mobile) {
      this.animate();
    }
  },
};
</script>

<style scoped>
#navbar {
  position: fixed;
  top: 0;
  display: grid;
  padding-bottom: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  z-index: 6;
  width: 100%;
}

.nav-sides {
  font-size: 1.4em;
  padding-top: 10px;
  color: var(--neutral-light);
  cursor: pointer;
  z-index: 99;
}

.logoNav {
  cursor: pointer;
}

.nav-left {
  margin-left: 25px;
  text-align: left;
}

.nav-center {
  position: relative;
  left: -110px;
}

.nav-right {
  text-align: right;
  margin-right: 25px;
}

.vector {
  padding-top: 20px;
  position: absolute;
  top: 250px;
}

.hide {
  display: none;
}

#just-logo {
  cursor: pointer;
}

#whale {
  top: 189.4px;
  right: 50%;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 700px) {
  .nav-center {
    padding-top: 20px;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 700px) {
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

img {
  width: 25px;
  float: left;
  margin-right: 10px;
  cursor: pointer;
}
</style>
