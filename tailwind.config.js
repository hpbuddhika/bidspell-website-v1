module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 6s linear infinite',
       }
    },
  },
  variants: {
    extend: {
      display: ['responsive', 'group-hover', 'group-focus'],
      scale: ['group-hover'],
      visibility: ['group-hover'],
    }, 
    animation: ['responsive', 'motion-safe', 'motion-reduce']
  },
  plugins: [],
}
