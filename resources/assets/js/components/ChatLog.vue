<<<<<<< HEAD
<template>
	<div class="chat-log">
		<chat-message v-for="message in messages" :message="message"></chat-message>
=======
<template lang="html">
	<div class="chat-log">
		<chat-message v-for="message in messages" v-bind:message="message"></chat-message>
>>>>>>> develop
	</div>
</template>

<script>
	export default {
		props: ['messages']
<<<<<<< HEAD
=======
		
>>>>>>> develop
	}
</script>

<style lang="css">
	.chat-log .chat-message:nth-child(even) {
		background-color: #ccc; 
	}
</style>

