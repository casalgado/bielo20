<template>
  <div class="c-item">
    <h2 @click="sendEmail">{{ title }}</h2>
    <form id="contact-form">
      <input v-model="client.name" :disabled="sent" :placeholder="info2" />
      <input v-model="client.email" :disabled="sent" :placeholder="info3" />
      <input v-model="client.phone" :disabled="sent" :placeholder="info4" />
      <textarea
        v-model="client.comment"
        :disabled="sent"
        :placeholder="info1"
      />
      <button
        @click.stop.prevent="sendEmail"
        :disabled="sent"
        :class="sent ? 'msg-sent' : ''"
      >
        {{ text }}
      </button>
    </form>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  name: "ContactItemForm",
  props: {
    title: {
      type: String,
      default: () => "titulo",
    },
    info1: {
      type: String,
      default: () => null,
    },
    info2: {
      type: String,
      default: () => null,
    },
    info3: {
      type: String,
      default: () => null,
    },
    info4: {
      type: String,
      default: () => null,
    },
  },
  data() {
    return {
      sent: false,
      text: "enviar",
      client: {
        name: "",
        email: "",
        phone: "",
        client: "",
      },
    };
  },
  methods: {
    sendEmail() {
      this.text = "enviando...";
      console.log(emailjs);
      console.log(this.client);
      let serviceID = "gmail";
      let templateID = "contact_email";
      let userID = process.env.VUE_APP_EMAIL_API_USER_ID;
      let templateParams = {
        client_name: this.client.name,
        client_email: this.client.email,
        client_phone: this.client.phone,
        client_comment: this.client.comment,
      };
      if (!this.sent) {
        emailjs.send(serviceID, templateID, templateParams, userID).then(
          function(response) {
            console.log("SUCCESS!", response.status, response.text);
            this.sent = true;
            this.text = "mensaje enviado";
          }.bind(this),
          function(error) {
            console.log("FAILED...", error);
          }
        );
      }
    },
  },
};
</script>

<style scoped>
.c-item {
  font-family: "Pt sans";
  text-align: left;
  font-weight: light;
}

h2 {
  border-bottom: 2px solid var(--primary-dark);
}

#contact-form textarea,
#contact-form input {
  font-family: "Pt sans";
  width: 100%;
  font-size: 1.4em;
  margin-top: 10px;
  margin-bottom: 0px;
  background-color: transparent;
  border: none;
}

#contact-form textarea::placeholder,
#contact-form input::placeholder {
  color: var(--primary-dark);
}

#contact-form input::placeholder:focus {
  color: gray;
}

#contact-form button {
  margin: 0 auto;
  padding: 5px 15px 5px 15px;
  font-size: 1.4em;
  font-family: "Pt sans";
  border-radius: 8px;
  border: 2px solid rgb(55, 30, 61);
  color: var(--neutral-light);
  background-color: var(--primary-dark);
  cursor: pointer;
}

#contact-form button:hover {
  background-color: rgb(69, 38, 77);
}

.msg-sent {
  cursor: default !important;
  border: 1px solid rgb(189, 189, 189) !important;
  background-color: rgb(189, 189, 189) !important;
}

p {
  font-size: 1.4em;
  margin-top: 10px;
  margin-bottom: 0px;
}
</style>
