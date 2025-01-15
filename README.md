# hugo-datavis

This is a simple theme to experiment with d3js and hugo, for simple data
projects that want to be deployed as static sides with hugo.
It uses [tailwindcss](https://tailwindcss.com) for fast styling, [d3.js](https://d3js.org) 
to visualize data and [hugo](https://gohugo.io) build the static side. 

>This theme is **not a blog-theme**. 

It's ment to have a single page and a few menu pages for isolated data projects. 
Feel free to extend it for alternative layouts. Happy hacking ✊.

## Features

* D3.js for visualization via shortcode {{< visual src="js/<sourceJs>.js" id="<some-id>" >}}
* Fast adjustments with `tailwindcss`

A d3.js chart script could look something like this (see [multi-line-example.js](https://github.com/arrrrrmin/hugo-datavis/blob/main/assets/js/multi-line-example.js)):
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

Use it in markdown: `{{< visual src="js/multi-line-example.js" id="seaice-extent" >}}`.

For more info see [`content/_index.md`](content/_index.md) or [Hugo-Shortcodes](https://gohugo.io/content-management/shortcodes/) 
on how to use shortcodes in markdown.

## Installation

* Install node.js to install tailwind and other optional dependencies later
* `git clone https://github.com/arrrrrmin/hugo-datavis.git` into your themes
* `cd themes/hugo-datavis` and install some dependencies with
* `npm install --save-dev` such that we can use tailwind
* Open another terminal window and do you'r `hugo serve`

## Configuration

To use social-icons, do it like you would in papermod where I stole this feature from. Nobody
did it better as far as I know 🤷‍♂️. Use the following yaml-template to add social-icons in the footer.
Icons, and everything is jsut slightly adepted but mostly copied from 
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
