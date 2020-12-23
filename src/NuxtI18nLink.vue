<template>
	<nuxt-link :to="localePath(to, lang)">
		<slot />
	</nuxt-link>
</template>

<script>
export default {
	name: "nuxt-i18n-link",
	props: {
		to: {
			type: [String, Object],
			required: true,
		},
		lang: String,
	},
};
</script>
