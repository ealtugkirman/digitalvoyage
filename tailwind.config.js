/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      ws: ["var(--font-ws)"],
    },
    extend: {
      animation: {
        scroll: 'scroll 40s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-250px * 7))' },
        },
      },   
      colors: {
        dark: "#000000",
        light: "#FAF6F0",
        newcolor: "#311ed6",
        accent: "#7B00D3",
        accentDark: "#ffdb4d",
        gray: "#747474",
      },
    },
  },
  plugins: [],
}
