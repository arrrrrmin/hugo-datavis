
renderMultilineChart = async (targetId) => {

    initializeButton = () => {
        // Initialize navigations required for interactions from within the chart js.
        // I'd recommend to add navigations to the same div as you'r animation.
        d3.select(`div#${targetId}`)
            .append("div")
            .attr("class", "flex")
            .append("button")
            // Add your tailwind classes here (this works fine for all elements outside of an svg).
            .attr("class", "bg-transparent font-semibold py-1.5 px-2.5 border hover:underline rounded")
            .on("click", draw)
            .html("Animate")
    }

    intrayear = (date) => {
        date = new Date(+date);
        date.setUTCFullYear(2000);
        return date;
    }

    initializeButton();
    const width = 928;
    const height = 720;
    const marginTop = 20;
    const marginRight = 30;
    const marginBottom = 80;
    const marginLeft = 40;

    const data = await d3.csv("northern-seaice-extent.csv").then(
        D => D.map(
            (d) => ({ date: new Date(d.year, d.month, d.day), value: 1e6 * d.extent }
            )).sort((a, b) => a.date - b.date)
    );
    console.log(data);

    // Create the scales.
    const x = d3.scaleUtc([Date.UTC(2000, 0, 1), Date.UTC(2001, 0, 0)], [marginLeft, width - marginRight]);
    const y = d3.scaleLinear([0, d3.max(data, d => d.value)], [height - marginBottom, marginTop]);
    const z = d3.scaleSequential(d3.extent(data, d => d.date.getUTCFullYear()), t => d3.interpolateSpectral(1 - t));

    const line = d3.line()
        .defined(d => !isNaN(d.value))
        .x(d => x(intrayear(d.date)))
        .y(d => y(d.value));

    // This is how we link to the shortcode, which in turn links back to our markdown.
    // So make sure to get the id right at the bottom of your code, the rest is up to you.
    // Happy hacking ✊
    const svg = d3.select(`div#${targetId}`)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height])
        .attr("style", "max-width: 100%; height: auto;");

    // Create the axes.
    const gx = svg.append("g")
        .attr("transform", `translate(0,${height - marginBottom})`)
        .call(d3.axisBottom(x)
            .ticks(width / 80, "%B")
            .tickSizeOuter(0))
        .call(g => g.selectAll("text")
            .attr("text-anchor", "end")
            .attr("transform", "rotate(-60)")
            .attr("dy", "0.5em")
        );

    applyFontConfig(gx, true);

    const gy = svg.append("g")
        .attr("transform", `translate(${marginLeft},0)`)
        .call(d3.axisLeft(y).ticks(null, "s"))
        .call(g => g.select(".domain").remove())
        .call(g => g.selectAll(".tick:not(:first-of-type) line").clone()
            .attr("x2", width)
            .attr("stroke", "#ddd"))
        .call(g => g.select(".tick:last-of-type text").clone()
            .attr("x", 3)
            .attr("text-anchor", "start")
            .attr("font-weight", "bold")
            .text("km²"));

    applyFontConfig(gy, true);

    // Create the container for lines.
    const g = svg.append("g")
        .attr("id", "sea-extent-g-lines")
        .attr("font-family", "sans-serif")
        .attr("font-size", 10)
        .attr("fill", "none")
        .attr("stroke-width", 1.5)
        .attr("stroke-miterlimit", 1);

    function draw() {

        g.selectAll("path").remove().exit();
        g.selectAll("text").remove().exit();

        var i = 0;
        for (const [key, values] of d3.group(data, d => d.date.getUTCFullYear())) {

            g.append("path")
                .attr("d", line(values))
                .attr("stroke", z(key))
                .attr("stroke-dasharray", "0,1")
                .transition()
                .delay(i * 120)
                .ease(d3.easeLinear)
                .attrTween("stroke-dasharray", () => {
                    const length = data.length;
                    return d3.interpolate(`0,${length}`, `${length},${length}`);
                }).end();

            if (!isNaN(values[values.length - 1].value)) {
                g.append("text")
                    .attr("paint-order", "stroke")
                    .attr("stroke", "white")
                    .attr("stroke-width", 3)
                    .attr("fill", z(key))
                    .attr("dx", 4)
                    .attr("dy", "0.32em")
                    .transition()
                    .delay(i * 120)
                    .attr("x", x(intrayear(values[values.length - 1].date)))
                    .attr("y", y(values[values.length - 1].value))
                    .text(key);
            }
            i += 1;
        }
    }
    draw();
}

// Please use this id in you'r shortcode call in your markdown.
const id = "seaice-extent";
renderMultilineChart(id);
