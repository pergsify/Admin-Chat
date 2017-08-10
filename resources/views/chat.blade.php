<!DOCTYPE html>
<html>
<head>
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<title>Chat Room</title>
	<link rel="stylesheet" type="text/css" href="css/app.css">
</head>
<body>
	<div id="app">
		<h1>Chat Room</h1>
		<chat-log :messages="messages"></chat-log>
		<chat-composer v-on:messagesent="addMessage"></chat-composer>
	</div>
	<script type="text/javascript" src="js/app.js"></script>
</body>
</html>