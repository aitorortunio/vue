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
//import Chatbot from './components/ChatBot/Chatbot.vue';
import { VueBotUI } from 'vue-bot-ui'

export default {
  components: {
    Navbar,
    VueBotUI,
    Footer,
  },
  data() {
    return {
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
      this.botTyping = true
      setTimeout(() => {
        this.botTyping = false
        this.messageData.push({
          agent: 'bot',
          type: 'text',
          text: 'Opciones disponibles: 1 2'
        })
      }, 1)
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
      let msg;
      switch (value.text) {
        case '1':
          msg = 'Seleccionó 1'
          break;
        case '2':
          msg ='Seleccionó 2';
          break;
        default:
          msg ='Opción no disponible';
      }

      const replyMessage = {
        agent: 'bot',
        type: 'text',
        text: msg
      }
      //this.inputDisable = response.disableInput
      this.messageData.push(replyMessage)
      // finish
      this.botTyping = false

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
