<template lang="pug">
the-logo
header.h
	h1.h__t Suprematist
	nav
		ul.h__ul
			li.--shop
				a.h__l(href="#shop") Shop
			li
				a.h__l(href="https://instagram.com/suprematistco" target="_blank" rel="noopener") Instagram
			li
				a.h__l(href="https://facebook.com/suprematistco" target="_blank" rel="noopener") Facebook
			li
				a.h__l(href="https://twitter.com/suprematistco" target="_blank" rel="noopener") Twitter
			li
				a.h__l(href="https://t.me/suprematistco" target="_blank" rel="noopener") Telegram
			li
				a.h__l(href="https://pinterest.com/suprematistco" target="_blank" rel="noopener") Pinterest
			li
				a.h__l(href="https://vk.com/suprematistco" target="_blank" rel="noopener") VK
section#shop(ref="shop")
	article.product
		a.product__l(href="https://gumroad.com/l/Flxrk")
			.product__t
				h2 S001
				p The first pack
			.product__i
				img(
					srcset=`
						./products/S001-1280w.jpg 1280w,
						./products/S001-960w.jpg 960w,
						./products/S001-480w.jpg 480w,
						./products/S001-640w.jpg 640w,
						./products/S001-240w.jpg 240w
					`
					sizes="(max-width: 1024px) 100vw, 30vw"
					src="./products/S001-1280w.jpg"
					alt="S001. The first pack."
				)
			.product__p
				| $
				data(value="7") 7
			.product__b Buy
</template>

<script lang="ts">
import { useIntersectionObserver } from '@vueuse/core'
import { defineComponent, ref } from 'vue'

import TheLogo from './components/TheLogo.vue'

declare function createGumroadOverlay (): void

export default defineComponent({
	name: 'App',
	components: { TheLogo },
	setup () {
		let shop = ref(null)

		let { stop } = useIntersectionObserver(
			shop,
			([{ isIntersecting }]) => {
				if (isIntersecting) {
					let script = document.createElement('script')
					script.setAttribute('src', 'https://gumroad.com/js/gumroad.js')
					document.querySelectorAll('head')[0].append(script)
					script.addEventListener('load', (): void => {
						setTimeout(() => {
							function creteGumroad (): void {
								if (typeof createGumroadOverlay !== 'undefined') {
									stop()
								} else {
									setTimeout(creteGumroad, 10)
								}
							}
							creteGumroad()
						})
					})
				}
			},
			{ threshold: 0.7 }
		)

		return { shop }
	}
})
</script>

<style lang="stylus">
.h
	height: var(--vh)
	padding: 25px
	display: flex
	box-sizing: border-box
	justify-content: space-between
	@media (max-width: 1024px)
		gap: 10px
		flex-direction: column

.h__t
	text-transform: lowercase

.h__ul
	gap: 20px
	display: flex
	list-style: none
	@media (max-width: 1024px)
		gap: 0
		flex-direction: column

.h__ul .--shop
	@media (min-width: 1200px)
		margin-right: 40px
	@media (max-width: 1024px)
		margin-bottom: 40px

.h__l
	padding: 10px
	text-decoration: none
	@media (max-width: 1024px)
		display: inline-block
		padding: 10px 0

#shop
	height: var(--vh)

.product
	width: calc(30% + 50px)
	height: 100%
	padding: 25px
	position: relative
	box-sizing: border-box
	user-select: none
	display: flex
	@media (max-width: 1024px)
		width: auto
		height: var(--vh)

.product:after
	content: ""
	position: absolute
	top: 25px
	right: 0
	bottom: 25px
	border-right: 1px solid var(--s-color-white-02)
	@media (max-width: 1024px)
		border: 0px

.product__l
	width: 100%
	height: 100%
	display: flex
	position: relative
	text-decoration: none
	@media (max-width: 1024px)
		width: 100%

.product__l:hover
	color: inherit

	.product__i img
		transform: scale(1.05)

.product__t
	position: absolute
	top: 0
	left: 0

.product__t p
	color: var(--s-color-white-05)

.product__p
	position: absolute
	left: 0
	bottom: 0
	line-height: 50px

.product__b
	position: absolute
	right: 0
	bottom: 0
	line-height: 50px
	padding: 0 25px
	border: 1px solid var(--s-color-white-02)
	border-radius: 30px

.product__i
	width: 100%
	height: 100%
	padding: 75px 0
	position: relative
	display: flex
	align-items: center
	align-self: center
	overflow: hidden
	z-index: -1

.product__i img
	width: 100%
	aspect-ratio: 1 / 1
	transition: transform 0.15s ease-in
</style>
