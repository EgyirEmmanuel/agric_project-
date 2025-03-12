/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bgBody: '#132A13',
			bgButton: '#CCE86B',
			textColors: '#313131',
      hoverColor: '#CCE86B',
      menuColor: '#706A6A',
      guageColor: '#434242',
      alertColor: '#2B87A1',
      barToolColor: '#908A8A',
      barColorOne: '#002C06',
      barColorTwo: '#CDEE64'
			
      },
      boxShadow: {
        'dropShadow': '0 10px 4px 0 #CCE86B',
      }
    },
  },
  plugins: [],
};
