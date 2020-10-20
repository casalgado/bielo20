<template>
  <div class="contact">
    <ContactItem
      title="Contacto"
      info1="Andres Vergara"
      info2="info@bielomedia.io"
    />
    <ContactItemForm
      title="Mensaje Directo"
      info1="Cuentanos Algo"
      info2="Nombre"
      info3="Correo"
      info4="Telefono"
    />
  </div>
</template>

<script>
import ContactItem from "./ContactItem";
import ContactItemForm from "./ContactItemForm";
export default {
  name: "Contact",
  components: { ContactItem, ContactItemForm },
};
</script>

<style scoped>
.contact {
  display: grid;
  z-index: 3;
  grid-template-columns: 1fr;
  gap: 10%;
  margin: 20px 10% 180px 10%;
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
