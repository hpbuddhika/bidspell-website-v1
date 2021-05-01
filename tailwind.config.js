module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
    },
  },
  variants: {
    extend: {
      display: ['responsive', 'group-hover', 'group-focus','focus'],
      scale: ['responsive', 'group-hover', 'group-focus','focus'],
      visibility: ['responsive', 'group-hover', 'group-focus','focus'],
      maxHeight:['responsive', 'group-hover', 'group-focus','focus'],
      backgroundColor: ['group-focus','focus'],
    },
    animation: ['responsive', 'motion-safe', 'motion-reduce']
  },
  plugins: [],
}
