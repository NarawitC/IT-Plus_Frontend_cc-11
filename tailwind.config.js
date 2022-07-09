module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: ['pastel', 'light', 'luxury', 'winter', 'dark'],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
  },
};

// module.exports = {
//   content: [
//     ...,
//     'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
//   ],
//   plugins: [..., require('flowbite/plugin')],
// };
