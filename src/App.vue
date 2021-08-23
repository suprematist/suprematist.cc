<template lang="pug">
the-logo
header.h
	.h__t Suprematist
	nav
		ul.h__ul
			li.--shop
				a.h__l(href="https://suprematistco.gumroad.com" target="_blank" rel="noopener") Shop
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
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import TheLogo from './components/TheLogo.vue'

export default defineComponent({
	name: 'App',
	components: { TheLogo }
})
</script>

<style lang="stylus">
.h
	padding: 25px
	display: flex
	justify-content: space-between
	@media (max-width: 1024px)
		gap: 10px
		height: 100%
		box-sizing: border-box
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
</style>
