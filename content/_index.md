---
title: "Hugo-datavis Theme"
date: 2025-01-14T08:00:00-07:00
draft: false
---

This is a simple theme to experiment with d3js and hugo, for simple data
projects that want to deploy static sides with hugo.
It uses [tailwindcss](https://tailwindcss.com) for fast styling, [d3.js](https://d3js.org) 
to visualize data and [hugo](https://gohugo.io) build the static side. 

>This theme is **not a blog-theme**. 

It's ment to have a single page and a few menu pages for isolated data projects. 
Feel free to extend it for alternative layouts. Happy hacking ✊.

## A visualization

As an example, let's use the sea ice extent dataset as shown in the 
[D3.js examples](https://observablehq.com/@d3/sea-ice-extent-1978-2017)
the data is available at 
[NSIDC](https://nsidc.org/sea-ice-today/sea-ice-tools)/
[Tom Shanley](http://bl.ocks.org/tomshanley/77f12d419e71e572f4250a52ef9bf1ad).

{{< visual src="js/multi-line-example.js" id="seaice-extent" >}}

## Install

* Install node.js to install tailwind and other optional dependencies later
* `git clone https://github.com/arrrrrmin/hugo-datavis.git` into your themes
* `cd themes/hugo-datavis` and install some dependencies with
* `npm install --save-dev` such that we can use tailwind
* Open another terminal window and do you'r `hugo serve`

To adjust styles see [this](/tailwind).

## Using d3.js

A d3.js chart script could look something like this (for more see [multi-line-example.js](/assets/js/multi-line-example.js)):
```JavaScript
renderMultilineChart = async (targetId) => {
    initializeButton = () => {
        // Initialize navigations required for interactions from within the chart js.
        // I'd recommend to add navigations to the same div as you'r animation.
        d3.select(`div#${targetId}`)
            // Add your tailwind classes here (this works fine for all elements outside of an svg).
            .append("div").attr("class", "...")
            .append("button").attr("class", "...")
            .on("click", draw)
            .html("Animate")
    }
    // ...
    const data = await d3.csv("northern-seaice-extent.csv").then(
        // ...    
    );
    // ...
    d3.select(`#${targetId}`)
        .append("svg")
        //...
}

renderMultilineChart("visual-id");
```

## Add visualization by shortcode
In this case it's simple, you'll need a js file which lives in `/assets/js/visual.js`, 
but is referenced as `src="js/visual.js"`, since hugo builds your assets in the public folder as `js/visual.js`.
All together: `\{\{< visual src="js/multi-line-example.js" id="seaice-extent" >\}\}`, but use it **without** `\`, since
this page is made from a markdown file, I can't use it properly or I'd place the visualization again.
