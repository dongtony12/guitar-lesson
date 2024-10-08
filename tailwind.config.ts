import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontSize: {
        'h1-300': ['24px', { fontWeight: 700, letterSpacing: '-2%' }],
        'h2-300': ['20px', { fontWeight: 700, letterSpacing: '-1%' }],
        'h3-300': ['18px', { fontWeight: 700, letterSpacing: '0%' }],
        's1-300': ['16px', { fontWeight: 700, letterSpacing: '0%' }],
        's1-200': ['16px', { fontWeight: 500, letterSpacing: '0%' }],
        's3-200': ['14px', { fontWeight: 500, letterSpacing: '0%' }],
        's3-300': ['14px', { fontWeight: 700, letterSpacing: '0%' }],
        'b1-100': ['16px', { fontWeight: 400, letterSpacing: '-2%' }],
        'b2-200': ['14px', { fontWeight: 500, letterSpacing: '-0.28px' }],
        'b3-100': ['14px', { fontWeight: 400, letterSpacing: '-1%' }],
        'btn1-300': ['16px', { fontWeight: 700, letterSpacing: '-1%' }],
        'btn1-200': ['16px', { fontWeight: 500, letterSpacing: '-1%' }],
        'btn2-200': ['14px', { fontWeight: 500, letterSpacing: '-1%' }],
        'btn3-300': ['12px', { fontWeight: 700, letterSpacing: '0%' }],
        'c1-100': ['13px', { fontWeight: 400, letterSpacing: '0%' }],
        'c2-100': ['12px', { fontWeight: 400, letterSpacing: '0%' }],
      },
      colors: {
        'gray-50': '#FFFFFF',
        'gray-100': '#F7F8FA',
        'gray-200': '#EDF0F5',
        'gray-300': '#DCE0E8',
        'gray-400': '#C5CBD6',
        'gray-500': '#999FAD',
        'gray-600': '#6B7280',
        'gray-700': '#474D59',
        'gray-800': '#181C25',
        'gray-900': '#000000',
        'main-100': '#FFF9FA',
        'main-200': '#FFE6EF',
        'main-300': '#FFC2D0',
        'main-400': '#FF005C',
        'main-gradient': '',
        'sub-blue': '#4C89FF',
        'sub-green': '#00B68A',
        'sub-red': '#FC5555',
        'sub-yellow': '#FFBC0F',
        'branch-blue': '#EDF3FF',
      },
    },
  },
  plugins: [],
}
export default config
