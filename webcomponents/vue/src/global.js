import { reactive } from 'vue';

export default {
	state: reactive({
		messages: [],
	}),
	addMessage: function (msg) {
		console.log('adding message', msg)
		this.state.messages.unshift(msg);
	},
	deleteMessage: function (index) {
		console.log('deleting message', index)
		this.state.messages.splice(index, 1)
	}
}
