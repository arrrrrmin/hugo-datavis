// I like to use tailwind colors, so please modify to you'r wishes.
// If you want to stay in the default tw color scheme, visit: https://tailwindcss.com/docs/customizing-colors

// Some examples
colors = {
    "red": "#ef4444",
    "black": "#292524",
    "green": "#16a34a",
    "yellow": "#facc15",
    "pink": "#db2777",
    "grayLight": "#a8a29e",
    "blue": "#60a5fa",
    "purple": "#9333ea",
    "grayDark": "#57534e",
}
defaultColors = {
    dark: "#334155",
    light: "#94a3b8",
    highlight: "#f87171",
}

applyFontConfig = (element, selectText = false, fSize = 16, fWeight = 400) => {
    if (selectText) {
        element
            .selectAll("text")
            .attr("font-size", fSize)
            .attr("font-weight", fWeight)
    } else {
        element
            .attr("font-size", fSize)
            .attr("font-weight", fWeight)
    }
}
