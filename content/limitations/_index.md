---
title: "Limitations"
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

There are some limitations to what this theme can do. 
Since we still want to use d3js we can't get around styling elements inside the svg. 
Handling `text`-tags is still a thing, where I found no solution.

My quick fix is to find a good number that works in *responsive* settings too and
move it to `assets/js/vis-utils.js`, so all chart js-files can access it. It's loaded
early, whereas chart js-files are loaded through the markdown-shortcodes when needed.

If you want to add more or have a larger project (which this theme is not ment for), 
add new js files `partial "head/js.html"` in `head.html`. For charts it's better to 
use the shortcode `visual.html`.

If you can help me remove or reduce some limitations, I'd be more then happy.
Consider a PR if you got some ideas.
