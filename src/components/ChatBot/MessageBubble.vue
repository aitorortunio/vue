<template>
    <v-btn color="grey lighten-2" depressed text left class="ma-2 mb-2" fab small @click="toggleChatBot">
        <v-icon>{{ icon }}</v-icon>
    </v-btn>
</template>

<script>
export default {
  props: {
    isChatBotVisible: Boolean
  },
  computed: {
    icon() {
      return this.isChatBotVisible ? 'mdi-close' : 'mdi-message-reply-text'
    }
  },
  methods: {
    toggleChatBot() {
      this.$emit('toggle-chat-bot')
    }
  }
}
</script>