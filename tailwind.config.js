/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './screens/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter_100Thin: ['Inter_100Thin'],
        Inter_200ExtraLight: 'Inter_200ExtraLight',
        Inter_300Light: 'Inter_300Light',
        Inter_400Regular: 'Inter_400Regular',
        Inter_500Medium: 'Inter_500Medium',
        Inter_600SemiBold: ['Inter_600SemiBold'],
        Inter_700Bold: ['Inter_700Bold'],
        Inter_800ExtraBold: ['Inter_800ExtraBold'],
        Inter_900Black: ['Inter_900Black'],
        Comfortaa_300Light: ['Comfortaa_300Light'],
        Comfortaa_400Regular: ['Comfortaa_400Regular'],
        Comfortaa_500Medium: ['Comfortaa_500Medium'],
        Comfortaa_600SemiBold: ['Comfortaa_600SemiBold'],
        Comfortaa_700Bold: ['Comfortaa_700Bold']
      },
      colors: {
        mint: {
          100: '#CBFFF2',
          500: '#9BE1CF',
          900: '#17554D'
        },
        grey: {
          800: '#3C3C50'
        },
        red: {
          500: '#FD6359'
        }
      }
    }
  },
  plugins: []
};
