<template>
	<div class="chat" :style="{ color: props.color }">
		<h4>Chatto #{{ id }}</h4>
		<input type="text" @keydown.enter="send" v-model="text" />
		<ul class="lines">
			<li v-for="(item, i) in store.state.messages" :key="i">
				<b>{{ item.id }} </b>
				<span>{{ item.msg }} </span>
				<button @click="deleteMsg(i)">X</button>
			</li>
		</ul>
		<details>
			<summary>DEBUG</summary>
			<pre>{{ JSON.stringify(store.state, null, 2) }}</pre>
		</details>
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

const id = Math.floor(Math.random() * 1000000);

const deleteMsg = (i) => {
	store.deleteMessage(i);
};

const send = () => {
	store.addMessage({
		id: id,
		msg: text.value,
	});
	text.value = '';
};
</script>

<style lang="scss">
.chat {
	display: grid;
	border: 2px solid #aaa;
	padding: 0 10px;
}
.lines {
	overflow-y: scroll;
	height: 200px;
	padding: 5px;
	li {
		display: grid;
		grid-template-columns: 75px auto 30px;
	}
}
</style>
