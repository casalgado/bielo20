<template>
  <div class="marketplace">
    <div class="hide">
      <h1 v-if="lang == 'es'" class="title-text">TALLER DE FILOSOFIA</h1>
      <h1 v-else class="title-text">PHILOSOPHY WORKSHOP</h1>
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
    <div>
      <div>{{ sign("input") }}</div>
      <form
        method="post"
        action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu"
        ref="form"
      >
        <input name="merchantId" type="hidden" value="508029" />
        <input name="ApiKey" type="hidden" value="4Vj8eK4rloUd272L48hsrarnUA" />
        <input name="accountId" type="hidden" value="512326" />
        <input name="description" type="hidden" value="Test PAYU" />
        <input name="referenceCode" type="hidden" :value="referenceCode" />
        <input name="amount" type="hidden" :value="amount" />
        <input name="tax" type="hidden" value="0" />
        <input name="taxReturnBase" type="hidden" value="0" />
        <input name="currency" type="hidden" :value="currency" />
        <input name="signature" type="hidden" :value="signature" />
        <input name="test" type="hidden" value="1" />
        <input name="buyerEmail" type="hidden" value="test@test.com" />
        <input name="responseUrl" type="hidden" value="http://localhost:8080" />
        <input
          name="confirmationUrl"
          type="hidden"
          value="http://www.test.com/confirmation"
        />
        <div class="button-cont" @click="submit">
          <div class="button">Inscripciones abiertas</div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import md5 from "js-md5";
export default {
  name: "Marketplace",
  data() {
    return {
      merchantId: 508029,
      accountId: 512326,
      referenceCode: "",
      amount: 3,
      currency: "USD",
      signature: "",
    };
  },
  computed: {
    lang: function () {
      return this.$store.state.lang;
    },
  },
  methods: {
    submit: function () {
      this.referenceCode = this.createCode();
      let input = `4Vj8eK4rloUd272L48hsrarnUA~${this.merchantId}~${this.referenceCode}~${this.amount}~${this.currency}`;
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
  mounted() {
    /* 
    let data = {
        merchantId: "508029",
        accountId: "512321",
        description: "Test PAYU",
        referenceCode: "TestPayU",
        amount: "20000",
        tax: "3193",
        taxReturnBase: "16806",
        currency: "COP",
        signature: "7ee7cf808ce6a39b17481c54f2c57acc",
        test: "0",
        buyerFullName: "testo test",
        buyerEmail: "test@test.com",
        responseUrl: "http://www.test.com/response",
        confirmationUrl: "http://www.test.com/confirmation",
      };

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
    */
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
  color: var(--neutral-light);
  background-color: var(--primary-dark);
  border-radius: 50px;
  padding: 5px 15px 5px 15px;
  display: table;
  margin: 0 auto;
  cursor: pointer;
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