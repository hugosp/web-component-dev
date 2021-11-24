const path = require('path')

import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			formats: ['es'],
			entry: path.resolve(__dirname, 'src/main.js'),
			name: 'vanilla-wc',
			fileName: (format) => `vanilla-wc.js`
		},
		outDir: path.resolve(__dirname, '../../public/assets'),
		emptyOutDir: false,
		// cssCodeSplit: false,

		rollupOptions: {
			output: {
				entryFileNames: `vanilla-wc.js`,
				chunkFileNames: `[name].js`,
				assetFileNames: `vanilla-wc.[ext]`,
			},
		}
	}
})
