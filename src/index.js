import path from 'path'

export default function nuxtI18nLink() {
	this.addPlugin(path.resolve(__dirname, 'plugin.js'))
}

export { default as meta } from '../package.json'
