<template lang="pug">
the-logo
header.h
	.h__t Suprematist
	.h__f
		.h__f-i
			a.h__l(href="https://instagram.com/suprematistco" target="_blank" rel="noopener") Instagram
		.h__f-i
			a.h__l(href="https://facebook.com/suprematistco" target="_blank" rel="noopener") Facebook
		.h__f-i
			a.h__l(href="https://twitter.com/suprematistco" target="_blank" rel="noopener") Twitter
		.h__f-i
			a.h__l(href="https://t.me/suprematistco" target="_blank" rel="noopener") Telegram
		.h__f-i
			a.h__l(href="https://pinterest.com/suprematistco" target="_blank" rel="noopener") Pinterest
		.h__f-i
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

.h__f
	gap: 20px
	display: flex
	list-style: none
	@media (max-width: 1024px)
		gap: 0
		flex-direction: column

.h__l
	padding: 10px
	text-decoration: none
	@media (max-width: 1024px)
		display: inline-block
		padding: 10px 0
</style>
