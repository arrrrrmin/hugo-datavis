---
title: "Hugo-datavis Theme"
date: 2025-01-14T08:00:00-07:00
draft: false
---

This is a simple theme to experiment with d3js and hugo, for data projects that want to 
build static sides with hugo.
It uses [tailwindcss](https://tailwindcss.com) for fast styling, [d3.js](https://d3js.org) 
to visualize data and obviously [hugo](https://gohugo.io) to build the static side. 

{{< js id="example" src="js/multi-line-example.js" >}}
renderMultilineChart("example", "northern-seaice-extent.csv");
{{< /js >}}

The above example is a d3.js-generated svg (using the sea ice extent dataset) as shown in the 
[D3.js examples](https://observablehq.com/@d3/sea-ice-extent-1978-2017)
the data is available at 
[NSIDC](https://nsidc.org/sea-ice-today/sea-ice-tools)/
[Tom Shanley](http://bl.ocks.org/tomshanley/77f12d419e71e572f4250a52ef9bf1ad).

## Install

* Install node.js to install tailwind and other optional dependencies later
* `git clone https://github.com/arrrrrmin/hugo-datavis.git` into your themes
* `cd themes/hugo-datavis` and install some dependencies with
* `npm install --save-dev` such that we can use tailwind
* Open another terminal window and do you'r `hugo serve`

Be aware d3 in this theme lives at `/assets/js/d3.min.js` (7.9.0). If you need a different version
download it from [d3js.org](https://d3js.org/getting-started) and replace the existing.
To adjust styles see [this](/tailwind).

## Using d3.js

A d3.js chart script could look something like this (for more see [multi-line-example.js](https://github.com/arrrrrmin/hugo-datavis/blob/main/assets/js/multi-line-example.js)):
```JavaScript
renderMultilineChart = async (targetId, dataPath) => {
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
    const data = await d3.csv(dataPath).then(
        // ...
    );
    // ...
    d3.select(`#${targetId}`)
        .append("svg")
        //...
}
```

## Add visualization by shortcode

In this case it's simple, you'll need a js file which lives in `/assets/js/vis.js`, 
but is referenced as `src="js/vis.js"`, since hugo builds your assets in the public folder as `js/visual.js`.
So to add a markdown shortcode do 
```
\{\{< js id="my-id" src="js/my-src.js" >\}\} 
renderMultilineChart("my-id", "path/to/data") 
\{\{< /js >\}\}
``` 
but use it **without** `\`. Since this page is made from a markdown file, I can't use it properly or the 
shortcode would be placed. See [_index.md](https://github.com/arrrrrmin/hugo-datavis/blob/main/content/_index.md)
for the full example. 

## Find the data

> Place your data in `static/`, depending on the file in which you'r using the js shortcode,
> you'r data might not be found at first, be aware:
> * `content/_index.md` -> `/your-data.csv`
> * `content/other.md` -> `../your-data.csv`

For your main page (home (`content/_index.md`)) the path to data is `your-data.csv` in the root of your side. 
When you'r on a different side, for example `content/styles-config.md`, the structure in public is a 
little different. In `public/` `index.html` is next to your data but `content/styles-config.md` is written to
`styles-config/index.html`, so to access you'r data in the shortcode `\{\{ js \}\}`, you need to pass go a dir
back (`../your-data.csv`).

## Appendix

>This theme is **not a blog-theme**. 

It's ment to have a single page and a few menu pages for isolated data projects. 
Feel free to extend it for alternative layouts. Happy hacking ✊.
