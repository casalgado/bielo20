<template>
  <div class="marketplace">
    <!-- div is hidden with css -->
    <div class="">
      <h1 v-if="lang == 'es'" class="title-text">
        La libertad de la voluntad y el concepto de persona
      </h1>
      <h1 v-else class="title-text">FREEDOM AND RESENTMENT</h1>
      <div class="marketplace-grid">
        <div class="image-cont dos_caminos">
          <img src="../assets/img/club2.png" alt="" />
        </div>
        <div class="right-side">
          <p>
            Para nuestros talleres de lectura no hay que saber nada,
            absolutamente nada, de filosofía. Basta con una pequeña dosis de
            coraje y muchas ganas de aprender, pensar y dialogar.
          </p>
          <p>
            Con David y Octavio como guías, recorremos los vericuetos de textos
            icónicos de la filosofía para entender las ideas que los hacen
            memorables.
          </p>
          <p>
            No nos crean a nosotros; créanle a quienes nos han acompañado en
            nuestros talleres anteriores. En una escala de 1 a 10, donde 10 es
            que volverían a inscribirse “a ojo cerrado”, nuestro promedio va en
            9.9.
          </p>

          <div class="marketplace-grid">
            <div class="button-cont" @click="stripe">
              <div class="button">Inscríbete</div>
            </div>
            <div
              class="button-cont"
              @click="show('.more_information')"
              :class="`${showMoreInformation ? 'disable' : ''} ${
                this.expanded ? 'hide' : ''
              }`"
            >
              <div class="button">Más información</div>
            </div>
          </div>
        </div>
      </div>
      <div class="marketplace-grid register hide">
        <div class="info_container">
          <h4>
            Dos sesiones: <br />1 sesión expositiva (2 horas), seguida de<br />
            1 sesión de preguntas, respuestas y discusión (2 horas)
          </h4>
          <h4>
            Fechas: <br />24 de septiembre (sesión expositiva de 2 horas) y
            <br />1 de octubre (sesión de discusión de 2 horas)
          </h4>
          <h4>Hora: 10:00 a.m. de México y Colombia / 5:00 p.m. de Madrid</h4>
          <h4>Costo: $200,000 COP ≈45 USD (IVA incluido)</h4>
          <p>Cupos limitados.</p>
        </div>
        <div class="right-side">
          <form
            class="hide"
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
          <div class="button-cont form-button" @click="stripe">
            <div class="button">Reservar Cupo</div>
          </div>
        </div>
      </div>
      <div
        class="marketplace-grid more_information"
        :class="this.expanded ? 'show' : ''"
      >
        <div class="info_container">
          <h4>Fechas: <br />24 de septiembre y 1 de octubre</h4>
          <h4>
            Hora: <br />10:00 a.m. de México y Colombia / 5:00 p.m. de Madrid
          </h4>
          <h4>
            Estructura del Taller: <br />24 de septiembre - 2 horas sesión
            expositiva<br />
            1 de octubre - 2 horas sesión de discusión (preguntas y respuestas)
          </h4>

          <h4>Costo: $200,000 COP (IVA incluido)</h4>
          <p>Cupos limitados.</p>
        </div>

        <div class="right-side">
          <p>
            «La libertad de la voluntad y el concepto de persona» es tal vez el
            más célebre ensayo filosófico de Harry Frankfurt, uno de los
            filósofos contemporáneos preferidos de David. En él Frankfurt
            examina un de las ideas más comunes sobre la libertad, la de que una
            persona ha obrado en libertad solamente en la medida en que hubiera
            podido obrar de manera distinta de cómo en efecto lo ha hecho.
          </p>
          <p>
            Con este memorable y muy corto ensayo, queremos explorar la cuestión
            fundamental y apasionante de la libertad humana.
          </p>
          <p>
            Las personas inscritas podrán acceder a una copia digital del ensayo
            de Frankfurt en español y, para quienes lo deseen, una copia del
            original en inglés también.
          </p>
        </div>
        <!-- <div class="quote_container span2">
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
        </div> -->
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
  props: {
    expanded: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      merchantId: 918167,
      accountId: 925331,
      referenceCode: "",
      apiKey: "",
      description: "Taller de Lectura Urbi et Orbi",
      amount: 150000,
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
    stripe: function () {
      //window.open("https://buy.stripe.com/14k7w6fYMevf2eA7sT", "_blank");
      //window.open("https://biz.payulatam.com/L0e0297211663A0", "_blank");
      window.open("https://biz.payulatam.com/B0e0297F76EBEC1", "_blank");
    },
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
    if (this.expanded) {
      this.show(".register");
      this.show(".more_information");
    }
  },
};
</script>

<style scoped>
.marketplace {
  display: none;
}
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
  padding: 30px 30px 5px 30px;
}

.info_container h4:first-child {
  margin-top: 0px;
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

.title-text {
  text-transform: uppercase;
}

.span2 {
  grid-column: span 2;
}

.show {
  height: 800px;
}
</style>
