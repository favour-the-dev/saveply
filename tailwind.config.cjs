/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
      extend: {
        colors: {
          purp: "#7f0799",
          yello: "#fec81f",
        },
      },
    },
    plugins: [],
  };