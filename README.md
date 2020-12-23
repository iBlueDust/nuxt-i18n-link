# nuxt-i18n-link

<img style="display: inline-block;" src="http://img.shields.io/npm/v/nuxt-i18n-link" />
<img style="display: inline-block;" src="https://img.shields.io/bundlephobia/min/nuxt-i18n-link" />
<img style="display: inline-block;" src="http://img.shields.io/npm/l/nuxt-i18n-link" />

A convenient replacement for `<nuxt-link>` component when using [nuxt-i18n](https://i18n.nuxtjs.org).
It is simply a replacement for this exact code:

```vue
<nuxt-link :to="localePath("/page")">
	Link
</nuxt-link>
```

into

```vue
<nuxt-i18n-link to="/page">
	Link
</nuxt-i18n-link>
```

This prevents the mistake of omitting `localePath()` that would often fall under the radar. [More details](#Motivation)

## Usage

Install with

```bash
npm i nuxt-i18n-link
```

Note: Add `--save` if npm < 5.0.0

Then nuxt.config.js

```js
{
	modules: [
		'nuxt-i18n-link'
	]
}
```

Finally, use like

```vue
<nuxt-i18n-link to="/page" lang="en">
	Link
</nuxt-i18n-link>

// or

<nuxt-i18n-link to="{ path: '/page', hash: '#conclusion'}" lang="en">
	Link
</nuxt-i18n-link>
```

For more details, see [router-link](https://router.vuejs.org/api/#router-link).

### Props

<!-- prettier-ignore-start -->
|Name    |Type            |Default   |Required|Description                  |
|--------|----------------|----------|--------|-----------------------------|
|to      |string \| object|-         | [x]    |Destination Route (see [router-link](https://router.vuejs.org/api/#router-link-props)) |
|lang    |string          |undefined | [ ]    |Two-letter ISO language code |
<!-- prettier-ignore-end -->

<br />

## Motivation

The use of `localePath()` in `<nuxt-link>` is necessary for [Nuxt.js](https://www.nuxtjs.org) projects that use [nuxt-i18n](https://i18n.nuxtjs.org).

To demonstrate, say a project has two routes:

1. Home page `/`
2. About page `/about`

Using [nuxt-i18n](https://i18n.nuxtjs.org), these routes will become

<!-- prettier-ignore-start -->
|        |English    |French     |
|--------|-----------|-----------|
|`/`     |`/en/`     |`/fr/`     |
|`/about`|`/en/about`|`/fr/about`|
<!-- prettier-ignore-end -->

<br />

However, `<nuxt-link to="/about">` will not route to `/en/about` nor `/fr/about` but to `/about` which does not exist anymore. The documented solution to this is to use `localePath()` as `<nuxt-link :to="localePath('/about')">`, which will route to `/en/about` or `/fr/about` according to the current language.

The documented solution is easily forgotten, and `<nuxt-link to="about">` will not produce any errors when a default language is defined. Moreover, the error is not immediately obvious unless the non-default languages are being tested.

Hence, `<nuxt-i18n-link>` was made.

## [MIT License](./LICENSE)
