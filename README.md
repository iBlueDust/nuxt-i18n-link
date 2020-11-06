# nuxt-i18n-link

<img src="http://img.shields.io/npm/v/nuxt-i18n-link" />
<img src="http://img.shields.io/npm/l/nuxt-i18n-link" />

A convenient replacement for `<nuxt-link>` component when using [nuxt-i18n](https://i18n.nuxtjs.org).
It is simply a replacement for this exact code:

```
<nuxt-link :to="localePath("/page")">
	Link
</nuxt-link>
```

into

```
<nuxt-i18n-link to="/page">
	Link
</nuxt-i18n-link>
```

This prevents the mistake of omitting `localePath()` that would often fall under the radar. [More details](#Motivation)

## Usage

Install with

```
npm i nuxt-i18n-link
```

Note: Add `--save` if npm < 5.0.0

Use like

```
<nuxt-i18n-link to="/page" lang="en">
	Link
</nuxt-i18n-link>
```

### Props

<!-- prettier-ignore-start -->
|Name    |Type    |Default   |Required|Description|
|--------|--------|----------|--------|-----------------------------|
|to      |string  |-         | [x]  |Destination Route            |
|lang    |string  |undefined | [ ]  |Two-letter ISO language code |
<!-- prettier-ignore-end -->

<br />

## Motivation

The use of `localePath()` in `<nuxt-link>` is necessary for [Nuxt.js](https://www.nuxtjs.org) projects.

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

## License

```
MIT License

Copyright (c) 2020 Peter R. Raozen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
