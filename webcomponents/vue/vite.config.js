const path = require('path')

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		Vue(),
	],

	publicDir: false, // SJJUKT VIKTIG

	build: {
		lib: {
			formats: ['es'],
			entry: path.resolve(__dirname, 'src/main.js'),
			name: 'vue-wc',
			fileName: (format) => `vue-wc.js`
		},
		outDir: path.resolve(__dirname, '../../public/assets'),
		emptyOutDir: false,
		// cssCodeSplit: false,

		rollupOptions: {
			output: {
				entryFileNames: `vue-wc.js`,
				chunkFileNames: `[name].js`,
				assetFileNames: `vue-wc.[ext]`,
			},
		}
	}
})
