module.exports = {
<<<<<<< HEAD
  content: [
    './src/**/*.{html,js}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
=======
  content: ['./src/**/*.{html,js,jsx}'],
>>>>>>> Feat-layout_route
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: ['light', 'luxury', 'winter'],
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
