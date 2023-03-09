<template>
    <div>
        <v-container>
            <div v-for="(message, index) in messages" :key="index">
                <message-bubble :message="message"></message-bubble>
            </div>
            <v-text-field v-model="userInput" @keydown.enter="sendUserInput" label="Type your message"></v-text-field>
        </v-container>
    </div>
</template>

<script>
import MessageBubble from './MessageBubble.vue';

export default {
    components: {
        MessageBubble
    },
    data() {
        return {
            messages: [
                { text: 'Hello! How can I assist you today?', isBot: true },
                { text: 'I\'m a chatbot. Nice to meet you!', isBot: true }
            ],
            userInput: '',
            botResponses: [
                { input: 'hello', output: 'Hi there! How can I help?' },
                { input: 'help', output: 'Sure, what do you need help with?' }
            ]
        };
    },
    methods: {
        sendUserInput() {
            this.messages.push({ text: this.userInput, isBot: false });
            this.receiveBotResponse();
            this.userInput = '';
        },
        receiveBotResponse() {
            const userInput = this.userInput.toLowerCase();
            const botResponse = this.botResponses.find(response => response.input === userInput);
            const responseText = botResponse ? botResponse.output : 'I\'m sorry, I don\'t understand.';
            this.messages.push({ text: responseText, isBot: true });
            this.scrollToBottom();
        },
        scrollToBottom() {
            this.$nextTick(() => {
                const board = this.$el.querySelector('.v-card__text');
                board.scrollTop = board.scrollHeight;
            });
        }
    }
};
</script>