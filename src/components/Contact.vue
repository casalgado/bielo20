<template>
  <div class="contact">
    <ContactItem :title="title()" info1="info@bielomedia.io" />
    <ContactItemForm
      :title="title2()"
      :info1="info1()"
      :info2="info2()"
      :info3="info3()"
      :info4="info4()"
    />
  </div>
</template>

<script>
import ContactItem from "./ContactItem";
import ContactItemForm from "./ContactItemForm";
export default {
  name: "Contact",
  components: { ContactItem, ContactItemForm },
  methods: {
    title: function () {
      return this.$store.state.lang == "es" ? "Contacto" : "Contact";
    },
    title2: function () {
      return this.$store.state.lang == "es"
        ? "Queremos Contar Tu Historia"
        : "Let Us Help You Tell Your Story";
    },
    info1: function () {
      return this.$store.state.lang == "es"
        ? "Escríbenos para más información"
        : "Contact us for more information";
    },
    info2: function () {
      return this.$store.state.lang == "es" ? "Nombre" : "Name";
    },
    info3: function () {
      return this.$store.state.lang == "es" ? "Correo" : "Email";
    },
    info4: function () {
      return this.$store.state.lang == "es" ? "Telefono" : "Phone";
    },
  },
};
</script>

<style scoped>
.contact {
  display: grid;
  z-index: 3;
  grid-template-columns: 1fr;
  gap: 10%;
  margin: 20px 10% 180px 10%;
  color: var(--primary-dark);
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 700px) {
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 700px) {
  .contact {
    grid-template-columns: 1fr 1fr;
  }
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
</style>
