<template>
  <div>
    <AuxNav />
    <h4>Datos de la transacción</h4>
    <table>
      <tr v-for="(value, name) in paramsToShowClient" :key="name">
        <td class="c1">{{ value }}:</td>
        <td class="c2">{{ params[name] }}</td>
      </tr>
    </table>
    <button @click="print">a</button>
  </div>
</template>

<script>
import AuxNav from "../components/AuxNav.vue";
export default {
  name: "Estado",
  components: { AuxNav },
  data() {
    return {
      params: {},
      paramsToShowClient: {
        lapTransactionState: "Estado de la Transaccion",
        processingDate: "Fecha",
        description: "Descripcion",
        trazabilityCode: "Codigo de Trazabilidad",
        lapPaymentMethod: "Forma de Pago",
        TX_VALUE: "Valor",
        buyerEmail: "Email Comprador",
        referenceCode: "Codigo de Referencia",
        transactionId: "Id de Transaccion",
      },
    };
  },
  created() {
    this.params = this.$route.params;
    console.log(this.$route.params);
  },
  methods: {
    print: function () {
      window.print();
    },
  },
};
</script>

<style scoped>
#logo-cont {
  height: 40px;
}

.cls-1 {
  fill: #d2e603;
}

.c1 {
  text-align: left;
}

.c2 {
  text-align: right;
}

table {
  margin: 0 auto;
  background-color: var(--primary-dark);
  color: var(--neutral-light);
  padding: 10px;
  border-radius: 5px;
}

tr {
  padding: 5px 0px 5px 0px;
}
</style>