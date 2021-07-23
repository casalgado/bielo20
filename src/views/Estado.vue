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
    <div class="icon-cont">
      <span @click="print"><i class="fas fa-save fa-2x icon"></i></span>
      <!-- <span class="icon" @click="print"><i class="fas fa-print fa-2x"></i></span> -->
      <span @click="$router.push({ name: 'home' })"
        ><i class="fas fa-home fa-2x icon"></i
      ></span>
    </div>
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

.icon-cont {
  padding-top: 25px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 400px;
  margin: 0 auto;
}

.icon {
  cursor: pointer;
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

@media print {
  @page {
    margin: 0;
  }
  .icon-cont {
    display: none;
  }
  table {
    color: var(--primary-dark);
    border: 1px solid var(--primary-dark);
  }
}
</style>