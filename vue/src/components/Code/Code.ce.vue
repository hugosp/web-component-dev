<template>
	<div style="display: none">
		<slot></slot>
	</div>

	<pre><code ref="code" :class="codeClass">{{code}}</code></pre>
</template>

<script>
import Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-twig';

export default {
	name: 'hg-code',
	props: {
		language: {
			type: String,
			default: 'javascript',
		},
	},
	data() {
		return {
			code: '',
		};
	},
	mounted() {
		this.code = this.$el.parentNode
			.querySelector('slot')
			.assignedNodes()
			.map((i) => i.outerHTML || i.textContent)
			.filter((i) => i != '')
			.join('\n');

		this.$nextTick(() => Prism.highlightElement(this.$refs.code));
	},
	computed: {
		codeClass() {
			return {
				[`language-${this.language}`]: true,
			};
		},
	},
};
</script>

<style lang="scss">
@import '../../../node_modules/prismjs/themes/prism-tomorrow.css';
pre,
code {
	tab-size: 2;
	white-space: normal;
	padding: 2px;
}
</style>
