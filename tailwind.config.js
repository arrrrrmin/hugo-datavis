/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./content/**/*.{html,js}", "./layouts/**/*.{html,js}", "./assets/js/*.js"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, config }) {
      addBase({
        "h1": {
          marginTop: config("theme.padding.2"),
          
          fontSize: config("theme.fontSize.3xl"),
          fontWeight: config("theme.fontWeight.semibold"),
          color: config("theme.colors.stone.800"),
        },
        "h2": {
          marginTop: config("theme.padding.4"),
          paddingTop: config("theme.padding.2"),
          paddingBottom: config("theme.padding.1"),

          fontSize: config("theme.fontSize.2xl"),
          fontWeight: config("theme.fontWeight.semibold"),
          color: config("theme.colors.stone.800"),
        },
        "h3": {
          marginTop: config("theme.padding.2"),
          paddingTop: config("theme.padding.2"),
          paddingBottom: config("theme.padding.1"),

          fontSize: config("theme.fontSize.1xl"),
          fontWeight: config("theme.fontWeight.semibold"),
          color: config("theme.colors.stone.800"),
        },
        "a": {
          textDecoration: "underline",
          color: config("theme.colors.stone.800"),
        },
        "p": {
          paddingTop: config("theme.padding.2"),
          paddingBottom: config("theme.padding.2"),

          fontSize: config("theme.fontSize.md"),
          fontWeight: config("theme.fontWeight.regular"),
          color: config("theme.colors.stone.800"),
        },
        "pre": {
          padding: config("theme.padding.2"),
          borderRadius: config("theme.spacing.1"),
          border: "1px solid",
          borderColor: config("theme.colors.stone.200"),
          fontSize: config("theme.fontSize.sm"),
          fontWeight: config("theme.fontWeight.regular"),
          overflowX: 'auto',
        },
        "*>code": {
          padding: config("theme.spacing.05"),
          borderRadius: config("theme.spacing.1"),
          border: "1px solid",
          borderColor: config("theme.colors.stone.200"),
          fontSize: config("theme.fontSize.sm"),
          color: config("theme.colors.stone.600"),
        },
        "pre>code": {border: "none"},
        "blockquote": {
          paddingTop: config("theme.padding.2"),
          paddingBottom: config("theme.padding.2"),
          paddingLeft: config("theme.spacing.2"),
          paddingRight: config("theme.spacing.2"),

          border: "1px solid",
          borderColor: config("theme.colors.stone.200"),
          color: config("theme.colors.stone.600"),
        },
        "ul": {
          marginLeft: config("theme.spacing.5"),
          paddingTop: config("theme.padding.2"),
          paddingBottom: config("theme.padding.2"),
          
          listStyle: "disc",
        },
      })
    }),
  ],
}

