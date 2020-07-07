module.exports = {
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#C96362',
      ivory: '#FAF7F7',
    }),
    colors: {
      black: '#4d4b4d',
      white: '#ffffff',
    },
    screens: {
      sm: '640px',
      lg: '980px',
    },
    extend: {
      textColor: {
        primary: '#c3504f',
      },
      fontSize: {
        '7xl': '5rem',
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
