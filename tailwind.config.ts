/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'

const config: Config = {
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './components/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: "jit",
  theme: {
    extend: {
      colors:{
      "primary":"#00A8A8",
      "dark": "#161E21"
     },
     backgroundImage: {
      'hero-bg': "url('/stars.png')"
    }
    },
  },
  plugins: [],
}
export default config
