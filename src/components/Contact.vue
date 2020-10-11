<template>
  <div class="contact">
    <ContactItem
      title="Contacto"
      info1="Andres Vergara"
      info2="info@bielomedia.io"
    />
    <ContactItemForm
      title="Mensaje Directo"
      info1="Nombre"
      info2="Correo"
      info3="Telefono"
      info4="Motivo"
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
  grid-template-columns: 1fr 1fr;
  gap: 10%;
  margin: 20px 10% 180px 10%;
}
</style>
