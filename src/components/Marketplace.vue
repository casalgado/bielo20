<template>
  <div class="marketplace">
    <div class="">
      <h1 v-if="lang == 'es'" class="title-text">
        LA LIBERTAD Y EL RESENTIMIENTO
      </h1>
      <h1 v-else class="title-text">FREEDOM AND RESENTMENT</h1>
      <div class="marketplace-grid">
        <div class="image-cont dos_caminos">
          <img src="../assets/img/dos_caminos.jpg" alt="" />
        </div>
        <div class="right-side">
          <p>
            Para nuestros talleres de lectura no hay que saber nada,
            absolutamente nada, de filosofía. Basta con una pequeña dosis de
            coraje y muchas ganas de aprender, pensar y dialogar.
          </p>
          <p>
            Filosofar no es cuestión de memorizar nombres, fechas o incluso
            teorías enteras. Se trata más bien de aprender a pensar con claridad
            en los conceptos y precisión en las palabras. Y no hay mejor manera
            de hacerlo que a través de la lectura y el diálogo.
          </p>
          <p>
            Con David y Octavio como guías, recorremos los vericuetos de textos
            icónicos de la filosofía para entender las ideas que los hacen
            memorables.
          </p>
          <div class="marketplace-grid">
            <div
              class="button-cont"
              @click="show('.register')"
              :class="showRegister ? 'disable' : ''"
            >
              <div class="button">Inscribete</div>
            </div>
            <div
              class="button-cont"
              @click="show('.more_information')"
              :class="showMoreInformation ? 'disable' : ''"
            >
              <div class="button">Más información</div>
            </div>
          </div>
        </div>
      </div>
      <div class="marketplace-grid register">
        <div class="info_container">
          <h4>
            Dos sesiones virtuales: <br />1 sesión expositiva (2 horas), seguida
            de 1 sesión de preguntas, respuestas y discusión (1 hora)
          </h4>
          <h4>
            Fechas: sabado 7 de agosto (sesión expositiva) y sabado 14 de agosto
            (sesión de discusión)
          </h4>
          <h4>Hora: 10:00 a.m. de México y Colombia / 5:00 p.m. de Madrid</h4>
          <h4>Costo: $150,000 COP</h4>
          <p>Cupos limitados.</p>
        </div>
        <div class="right-side">
          <form
            method="post"
            action="https://checkout.payulatam.com/ppp-web-gateway-payu"
            ref="form"
          >
            <label for="fn">Nombre Completo:</label>
            <input name="payerFullName" id="fn" value="" />
            <label for="cc">Cedula:</label>
            <input name="payerDocument" id="cc" value="" />
            <label for="mp">Telefono:</label>
            <input name="mobilePhone" id="mp" value="" />
            <label for="em">Correo:</label>
            <input name="buyerEmail" id="em" value="" />
            <label for="cc">Dirección:</label>
            <input name="billingAddress" label="dir" value="" />
            <input name="merchantId" type="hidden" :value="merchantId" />
            <input
              name="ApiKey"
              type="hidden"
              value="4Vj8eK4rloUd272L48hsrarnUA"
            />
            <input name="accountId" type="hidden" :value="accountId" />
            <input name="description" type="hidden" :value="description" />
            <input name="referenceCode" type="hidden" :value="referenceCode" />
            <input name="amount" type="hidden" :value="amount" />
            <input name="tax" type="hidden" value="0" />
            <input name="taxReturnBase" type="hidden" value="0" />
            <input name="currency" type="hidden" :value="currency" />
            <input name="signature" type="hidden" :value="signature" />
            <input name="test" type="hidden" value="0" />
            <input
              name="responseUrl"
              type="hidden"
              value="https://www.bielomedia.io/"
            />
            <input
              name="confirmationUrl"
              type="hidden"
              value="http://www.test.com/confirmation"
            />
            <div class="button-cont form-button" @click="submit">
              <div class="button">Reservar Cupo</div>
            </div>
          </form>
        </div>
      </div>
      <div class="marketplace-grid more_information">
        <div class="quote_container">
          <h3>
            “Definitivamente fue la mejor manera de aproximarse a leer a un
            autor como Nietzsche, de la mano de David y Octavio.”
          </h3>
          <h3>
            “La pasé súper, me divertí mucho y redescubrí mi amor por la
            filosofía.”
          </h3>
          <h3>
            “Una disciplina tan densa, casi inabordable para legos, la comprendí
            y me apasioné por ella. La lucidez de David y la capacidad de
            comunicación de Octavio crean una mezcla de la cual uno se siente
            parte.”
          </h3>
        </div>
        <div class="right-side">
          <p>
            “La libertad y el resentimiento” es tal vez el ensayo de filosofía
            moral más importante del siglo XX. A pesar de su brevedad (consta de
            unas 25 páginas), con este texto Strawson transformó el debate sobre
            el libre albedrío y el determinismo. ¿Es acaso posible tratarnos
            unos a otros como seres libres y responsables, como sujetos de
            admiración o sanción, si el devenir del mundo está plenamente
            determinado por la causalidad natural?
          </p>
          <p>
            Vamos a adentrarnos en una de las más apasionantes discusiones de la
            filosofía, sobre la posibilidad misma de la libertad humana.
          </p>
          <p>
            Las personas inscritas podrán acceder a una copia digital del ensayo
            de Strawson en español y, para quienes lo deseen, una copia del
            original en inglés también.
          </p>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import moment from "moment";
import md5 from "js-md5";
import { gsap } from "gsap";
export default {
  name: "Marketplace",
  data() {
    return {
      merchantId: 918167,
      accountId: 925331,
      referenceCode: "",
      apiKey: "",
      description: "Taller de Lectura Urbi et Orbi",
      amount: 12000,
      currency: "COP",
      signature: "",
      target_height: "800px",
      mobile: false,
      showRegister: false,
      showMoreInformation: false,
    };
  },
  computed: {
    lang: function () {
      return this.$store.state.lang;
    },
  },
  methods: {
    show: function (target) {
      gsap.to(target, {
        duration: 1,
        height: this.target_height,
        ease: "easeIn",
      });
      if (target == ".register") {
        this.showRegister = true;
      } else {
        this.showMoreInformation = true;
      }
    },

    submit: function () {
      this.referenceCode = this.createCode();
      let input = `${this.apiKey}~${this.merchantId}~${this.referenceCode}~${this.amount}~${this.currency}`;
      this.signature = this.sign(input);
      console.log(this.$refs.form);
      console.log(this.referenceCode);
      console.log(this.signature);
      setTimeout(
        function () {
          this.$refs.form.submit();
        }.bind(this),
        0
      );
    },
    testPayUfetch: function () {
      let key = process.env.VUE_APP_PAYU_API_KEY;
      console.log(key);
    },
    sign(input) {
      return md5(input);
    },
    createCode() {
      console.log(moment().format("X"));
      return this.sign(moment().format("X"));
    },
    testPayU: function () {
      let data = {
        merchantId: 918167,
        accountId: 925331,
        description: "",
        referenceCode: "",
        amount: "",
        tax: "",
        taxReturnBase: "",
        currency: "",
        signature: "",
        test: "",
        buyerEmail: "",
        responseUrl: "",
      };

      console.log("test");
      this.axios({
        method: "post",
        url: "https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/",
        data: data,
        transformRequest: [
          function (data, headers) {
            console.log(data);
            console.log(headers);
            return data;
          },
        ],
      }).then((response) => {
        console.log("response");
        console.log(response);
      });
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
    this.apiKey = process.env.VUE_APP_PAYU_API_KEY;
    if (this.mobile) {
      this.target_height = "800px";
    } else {
      this.target_height = "400px";
    }
  },
};
</script>

<style scoped>
.marketplace-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 80%;
  margin: 0 auto;
}

.register {
  height: 0px;
  overflow: hidden;
}

.more_information {
  height: 0px;
  overflow: hidden;
}

.marketplace {
  color: var(--primary-dark);
  z-index: 5;
  font-family: "Agrandir";
}

.image-cont {
  justify-self: center;
  max-width: 400px;
  max-height: 400px;
  overflow: hidden;
}

.image-cont img {
  display: block;
  max-width: 400px;
  width: auto;
  height: auto;
}

.dos_caminos img {
  position: relative;
  top: -50px;
}

.right-side p {
  text-align: justify;
}

.right-side p:first-child {
  padding-top: 20px;
}

.button-cont {
  color: var(--neutral-light);
  background-color: var(--primary-dark);
  border-radius: 50px;
  padding: 5px 15px 5px 15px;
  display: table;
  margin: 0 auto;
  cursor: pointer;
}

.button-cont:hover {
  background-color: var(--primary-accent);
}

.button {
  display: table-cell;
  vertical-align: middle;
  padding-top: 5px;
}

.disable {
  cursor: default;
  opacity: 0.5;
}

.disable:hover {
  background-color: var(--primary-dark);
}

form {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 10px;
  margin-top: 80px;
}

input {
  font-family: "Pt sans";
  color: var(--primary-dark);
  font-size: 1.1em;

  background-color: transparent;
  border: 1px solid var(--primary-dark);
  border-radius: 5px;
  cursor: pointer;
}

label {
  justify-self: start;
}

.form-button {
  grid-column: span 2;
  margin-top: 20px;
}

.quote_container {
  padding: 20px 20px 5px 20px;
  color: var(--primary-accent);
}

.info_container {
  padding: 60px 30px 5px 30px;
}

@media only screen and (max-width: 700px) {
  .marketplace-grid {
    grid-template-columns: 1fr;
    width: 90%;
    margin: 0 auto;
  }
  .button-cont {
    margin-bottom: 15px;
  }
}

.hide {
  display: none;
}
</style>