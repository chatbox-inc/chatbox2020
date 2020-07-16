module.exports = {
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#c3504f',
      ivory: '#FAF7F7',
    }),
    colors: {
      black: '#4d4b4d',
      white: '#ffffff',
      gray: '#cccccc',
    },
    screens: {
      sm: '640px',
      lg: '980px',
    },
    extend: {
      colors: {
        primary: '#c3504f',
        secondly: '#4d4b4d',
      },
      fontSize: {
        xsm: '0.95rem',
        '3.5xl': '2.2rem',
        '7xl': '5rem',
        '42px': '42px',
        '28px': '28px',
        '15px': '15px',
        '35px': '35px',
      },
      height: {
        '500px': '500px',
        '200px': '200px',
        '340px': '340px',
        '325px': '325px',
        '800px': '800px',
      },
      width: {
        '700px': '700px',
      },
    },
  },
  variants: {},
  plugins: [],

  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
