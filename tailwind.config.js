/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primaire: '#A7AA23',
      secondaire: '#F7F7DA',
      action: '#4FE790',
      bg: '#FEFEFC',
      texte: '#131303',
      p1: '#FAFBEB',
      p2: '#F7F7DA',
      p3: '#EFF0B8',
      p4: '#E8E996',
      p5: '#E0E275',
      p6: '#D9DB53',
      p7: '#D1D431',
      p8: '#A7AA23',
      p9: '#797B1A',
      p10: '#4C4D10',
      p11: '#1E1E06',
      p12: '#000000',
    },
    fontFamily: {
      sans: ['Yanone Kaffeesatz', 'sans-serif'],
      serif: ['Pridi', 'serif'],
    },
    extend: {},
  },
  plugins: [],
};
