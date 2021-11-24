<template>
	<div class="chat" :style="{ color: props.color }">
		<h4>Chatto</h4>
		<input type="text" @keydown.enter="send" v-model="text" />
		<pre>{{ JSON.stringify(store.messages, null, 2) }}</pre>
	</div>
</template>

<script setup>
import store from '../../global';
import { ref } from 'vue';

const text = ref('test');

const props = defineProps({
	color: {
		type: String,
		default: '#333',
	},
});

const send = () => {
	store.messages.push(text.value);
	text.value = '';
};
</script>

