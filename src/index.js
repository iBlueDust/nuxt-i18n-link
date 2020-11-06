import path from 'path'

export default function nuxtI18nLink() {
	this.addPlugin({
		src: path.resolve(__dirname, 'plugin.js'),
		ssr: false,
		filename: 'nuxt-i18n-link.js',
	})
}

export { default as meta } from '../package.json'
