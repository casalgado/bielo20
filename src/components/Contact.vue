<template>
  <div class="contact">
    <ContactItem
      title="New Business"
      info1="Andres Vergara"
      info2="andres@bielomedia.io"
      info3="+57 315 123 2345"
    />
    <ContactItem
      title="Mensaje Directo"
      info1="Nombre"
      info2="Correo"
      info3="Telefono"
      info4="Motivo"
    />
    <ContactItem
      title="Newsletter"
      info1="Para estar al dia con nuestras Historias"
    />
  </div>
</template>

<script>
import ContactItem from "./ContactItem";
export default {
  name: "Contact",
  components: { ContactItem },
};
</script>

<style scoped>
.contact {
  display: grid;
  z-index: 3;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10%;
  margin: 20px 10% 180px 10%;
}
</style>
