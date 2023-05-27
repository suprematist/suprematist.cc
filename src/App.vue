<template lang="pug">
the-logo
header.h
	h1.h__t Suprematist
	nav
		ul.h__ul
			li
				a.h__l(
					href="https://instagram.com/suprematistcc"
					target="_blank"
					rel="noopener"
				) Instagram
			li
				a.h__l(
					href="https://facebook.com/suprematistcc"
					target="_blank"
					rel="noopener"
				) Facebook
			li
				a.h__l(
					href="https://twitter.com/suprematistcc"
					target="_blank"
					rel="noopener"
				) Twitter
			li
				a.h__l(
					href="https://t.me/suprematistcc"
					target="_blank"
					rel="noopener"
				) Telegram
			li
				a.h__l(
					href="https://pinterest.com/suprematistcc"
					target="_blank"
					rel="noopener"
				) Pinterest
</template>

<script lang="ts" setup>
import TheLogo from './components/TheLogo.vue'
</script>

<style lang="sass">
.h
	box-sizing: border-box
	display: flex
	justify-content: space-between
	height: var(--vh)
	padding: 25px

	@media (max-width: 1024px)
		flex-direction: column
		gap: 10px

.h__t
	text-transform: lowercase

.h__ul
	display: flex
	gap: 20px
	list-style: none

	@media (max-width: 1024px)
		flex-direction: column
		gap: 0

	// li.--donate
	// 	@media (min-width: 1200px)
	// 		margin-right: 40px

	// 	@media (max-width: 1024px)
	// 		margin-bottom: 40px

.h__l
	padding: 10px
	text-decoration: none

	@media (max-width: 1024px)
		display: inline-block
		padding: 10px 0
</style>
