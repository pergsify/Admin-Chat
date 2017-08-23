
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));
Vue.component('chat-log', require('./components/ChatLog.vue'));
Vue.component('chat-message', require('./components/ChatMessage.vue'));
Vue.component('chat-composer', require('./components/ChatComposer.vue'));

const app = new Vue({
    el: '#app' ,
    data: {
    	messages: [
			/*
            {
				message: "Hey June",
				user: "jun"
			},
			{
				message: "Hey Rold!",
				user: "Harold"
			}
            */
		]
    }, 
    methods: {
    	addMessage(message) {
    		// add to existing messages
    		//console.log('message added'); 
    		this.messages.push(message);
    		// persist to database etc
            axios.post('messages', message).then(response => {
                // do whatever
            })
    	}
    },
    created() {
        axios.get('messages').then(response => {
           this.messages = response.data;
            //console.log(response);
        });
    }
});
