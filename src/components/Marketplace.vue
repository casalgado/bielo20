<template>
  <div class="marketplace">
    <div class="hide">
      <h1 v-if="lang == 'es'" class="title-text">TALLER DE FILOSOFIA</h1>
      <h1 v-else class="title-text">PHILOSOPHY WORKSHOP</h1>
      {{ testApi }}
      <div class="marketplace-grid">
        <div class="image-cont">
          <img src="../assets/img/urbietorbilogo.png" alt="" />
        </div>
        <div class="right-side">
          <p>
            Inscribete en nuestro taller de filosofia con Urbi et Orbi donde
            aprenderemos a pensar criticamemnte sobre el cambiante mundo que nos
            rodea
          </p>
          <div class="button-cont" @click="testPayU">
            <div class="button">Inscripciones abiertas</div>
          </div>
        </div>
      </div>
    </div>
    <div class="button-cont" @click="testPayU">
      <div class="button">.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Marketplace",
  data() {
    return {
      testApi: "a",
    };
  },
  computed: {
    lang: function () {
      return this.$store.state.lang;
    },
  },
  methods: {
    testPayU: function () {
      let data = {
        merchantId: 508029,
        ApiKey: "4Vj8eK4rloUd272L48hsrarnUA",
        referenceCode: "TestPayU",
        accountId: 512326,
        description: "Test PAYU",
        amount: 3,
        tax: 0,
        taxReturnBase: 0,
        currency: "USD",
        signature: "ba9ffa71559580175585e45ce70b6c37",
        test: 1,
        buyerEmail: "test@test.com",
      };
      let headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      };

      console.log("test");
      this.axios
        .post(
          "https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/",
          data,
          headers
        )
        .then((response) => {
          this.testApi = response;
        });
    },
  },
  mounted() {
    this.axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
  },
};
</script>

<style scoped>
* {
  padding: 0px;
  margin: 0px;
}

.hide {
  display: none;
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
}

.image-cont img {
  display: block;
  max-width: 400px;
  max-height: 400px;
  width: auto;
  height: auto;
}

.marketplace-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.right-side p {
  padding: 55px;
  margin-top: 80px;
  text-align: justify;
}

.button-cont {
  color: var(--primary-dark);
  background-color: var(--primary-neutral);
  border-radius: 50px;
  padding: 5px 15px 5px 15px;
  display: table;
  margin: 0 auto;
}

.Abutton-cont:hover {
  background-color: var(--primary-accent);
}

.button {
  display: table-cell;
  vertical-align: middle;
  padding-top: 5px;
}
</style>