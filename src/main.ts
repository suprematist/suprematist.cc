import './styles/base.sass'
import { createApp } from 'vue'

import App from './App.vue'

let prevHeight: number
function handleResize (): void {
	let el = document.documentElement
	let height = el.clientHeight
	if (height === prevHeight) return
	requestAnimationFrame(() => {
		el.style.setProperty('--vh', `${height}px`)
		prevHeight = height
	})
}
handleResize()

window.addEventListener('resize', handleResize)

createApp(App).mount('#suprematist')
