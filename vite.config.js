import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue({
		script: {
			refSugar: true,
		},
	})],
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/main.js'),
			name: 'hg',
			formats: ['es', 'umd'],
			fileName: (format) => `hg.${format}.js`
		},
		rollupOptions: {
			// Externalize VUE
			external: ['vue'],
			output: {
				globals: {
					vue: 'Vue'
				}
			}
		}
	}
})
