/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'custom-blue': '#005F71',
        'custom-blue-lighter': '#007C8A',
      },
      textColor: {
        'custom-primary': '#FC2169',
        'custom-secondary': '#193259',
      },
      extend: {
        fontSize: {
          '16': '16px',
          '17': '17px',
        },
        fontWeight: {
          'bold': 'bold',
        },
      },
    },
  },
  plugins: [],
}
