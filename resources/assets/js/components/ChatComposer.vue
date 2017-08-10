<template lang="html">
	<div class="chat-composer">
		<input type="text" name="message" placeholder="Enter your message here..." v-model="messageText" @keyup.enter="sendMessage" required="">
		<button class="btn btn-primary" @click="sendMessage">Send</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				messageText: ''
			}
		},
		methods: {
			sendMessage() {
				//console.log(this.messageText);
				this.$emit('messagesent', {
					message: this.messageText,
					user: "John Cena"
					});
				this.messageText = '';
			}
		}
	}
</script>

<style lang="css">
	.chat-composer {
		display: flex;
	}

	.chat-composer input {
		flex: 1 auto;
	}

	.chat-composer button {
		border-radius: 0;
	}
</style>