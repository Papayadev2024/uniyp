/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "node_modules/preline/dist/*.js"],
  
  theme: {

    screens: {
      'xs': '320px', 
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },

    extend: {

      colors: {
        primary: '#3490dc', // Puedes cambiar el código de color según tus preferencias
        fondo: '#1e2f33',
        fondoboton: '#FFFFFF66',
        azulmundoweb: '#303BE4',
        azuloscuro: '#080B44',
        azulanding: '#091CA6',
        azulecommerce:  '#0017d7',
        azulmoviles: '#0018ff',
        azulform:  '#040a45',
        fondoinput: '#FFFFFF66',
        //colores de las donas
        rosalasdonas: '#DF3876',
        rosasuave: '#fcecf2',
        griscard: '#f8f8f8',
        colorgris: '#7c7c7c',
        verdelasdonas: '#447279',
      },
     
      height: {
        '100': '28rem',
        '128': '32rem',
        '200': '38rem',

      },

      placeholderColor: {
            'rosaplaceholder': '#DF387666',
          
      },

      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
        '16': '16px',

    },

    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

