---
title: "Styles & config"
date: 2025-01-14T08:00:00-07:00
draft: false
tags:
    - data
    - data-vis
    - visualization
    - d3js
    - hugo
    - hugo-theme
---

You can adjust this theme quite easily. You have to do the [install](/#install) steps first.
When you'r done adjust things in `/tailwind.config.js`.
There are a few hints for this see: [Tailwind-Plugins](https://tailwindcss.com/docs/plugins).
A simple tip, just import `colors` or `typography` and see the default definitions:

* `const colors = require('tailwindcss/colors');`

If you do, you can ctrl+click into the source and see how certain things are named - this 
confused me a bit at first.

To use social-icons, do it like you would in papermod where I stole this feature from. Nobody
did it better as far as I know 🤷‍♂️. Use the following yaml-template to add social-icons in the footer.
Icons, and everything is jsut slightly adepted from 
[adityatelange/hugo-PaperMod](https://github.com/adityatelange/hugo-PaperMod/).

```yaml
params:
  author: <you>
  description: ...
  disableScrollToTop: false
  socialIcons:
    - name: Github
      title: View source on Github
      url: "<your-repo>"
    - name: Mastodon
      title: ...
      url: "<your-account>"
    - name: Bluesky
      title: ...
      url: "<your-account>"
    # ...

```
