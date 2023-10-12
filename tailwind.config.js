/** @type {import('tailwindcss').Config} */

import {colors as colorsPalette} from './src/utils/colors'
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryRed1: colorsPalette.primaryRed1,
        primaryRed2: colorsPalette.primaryRed2,
        tableFree: colorsPalette.tableFree,
        tableBusy: colorsPalette.tableBusy,
        tablePay: colorsPalette.tablePay,
      }
    },
  },
  plugins: [],
}
