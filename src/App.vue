<template>
  <v-app id="App" :style="{ background: '#9FD8DF' }">
    <Navbar />
    <v-main>
      <router-view />
    </v-main>
    <VueBotUI :messages="messageData" :options="botOptions" @init="botStart" @msg-send="msgSend" />
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from './components/Footer.vue'
import { VueBotUI } from 'vue-bot-ui'
import axios from "axios";

let apikey = { key: 'A30E067B-DDDD-4503-A091-77127CA0C01F' };

export default {
  components: {
    Navbar,
    VueBotUI,
    Footer,
  },
  data() {
    return {
      //APIresult: {},
      messageData: [], // See Data example below
      botOptions: {
        colorScheme: '#8B5E83',
        //set url to bot avatar image
        botAvatarImg: 'https://st3.depositphotos.com/8950810/17657/v/600/depositphotos_176577870-stock-illustration-cute-smiling-funny-robot-chat.jpg',
        botAvatarSize: 40,
        msgBubbleBgUser: '#8B5E83',
      }
    }
  },
  methods: {
    botStart() {
      // Get token if you want to build a private bot
      // Request first message here
      // Fake typing for the first message
      this.messageData = []
      this.botTyping = true
      setTimeout(() => {
        this.botTyping = false
        this.messageData.push({
          agent: 'bot',
          type: 'text',
          text: 'Consulte el precio de cualquiera crypto ingresando su abreviación.'
        })
      }, 250)
      setTimeout(() => {
        this.messageData.push({
          agent: 'bot',
          type: 'text',
          text: 'Ejemplo: BTC, ETH, XRP, etc...'
        })
      }, 500)
    },
    msgSend(value) {
      // Push the user's message to board
      this.messageData.push({
        agent: 'user',
        type: 'text',
        text: value.text
      })
      this.getResponse(value)
    },
    // Submit the message from user to bot API, then get the response from Bot
    getResponse(value) {
      // Loading
      this.botTyping = true
      axios
        .get("https://rest.coinapi.io/v1/exchangerate/" + value.text.toUpperCase() + "/USD?apikey=" + apikey.key)
        .then((response) => {
          const msg = response.data.rate.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + " USD";
          const replyMessage = {
            agent: 'bot',
            type: 'text',
            text: msg
          };
          this.messageData.push(replyMessage);
          this.botTyping = false;
        })
        .catch((error) => {
          this.error = true;
          this.loaded = false;
          const msg = "No se encontró el precio de '" + value.text + "'. Intente nuevamente.";
          const replyMessage = {
            agent: 'bot',
            type: 'text',
            text: msg
          };
          this.messageData.push(replyMessage);
          this.botTyping = false;
          console.log(error);
        });
    }

  }
}
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
