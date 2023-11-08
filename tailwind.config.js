/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    fontFamily: {
     
      'roboto': ['Roboto', 'sans-serif'],
    },
    
    colors:{
       
    'primary':{
      100: "#fff7e2",
      200: "#feefc6",
      300: "#fee6a9",
      400: "#fdde8d",
      500: "#fdd670",
      600: "#caab5a",
      700: "#988043",
      800: "#65562d",
      900: "#332b16"
    },
    
    'secondary':{
      100: "#ffdcdd",
      200: "#ffb8bb",
      300: "#ff959a",
      400: "#ff7178",
      500: "#ff4e56",
      600: "#cc3e45",
      700: "#992f34",
      800: "#661f22",
      900: "#331011"
    },
    
    'neutral' : {
        100: "#d3d3d3",
        200: "#a7a7a7",
        300: "#7a7a7a",
        400: "#4e4e4e",
        500: "#222222",
        600: "#1b1b1b",
        700: "#141414",
        800: "#0e0e0e",
        900: "#070707"
    
          },

          'white': {
            100: "#ffffff",
            200: "#ffffff",
            300: "#ffffff",
            400: "#ffffff",
            500: "#ffffff",
            600: "#cccccc",
            700: "#999999",
            800: "#666666",
            900: "#333333"
        },     
      
        'skeleton': {
          100: "#f9fafc",
          200: "#f3f6f9",
          300: "#eef1f6",
          400: "#e8edf3",
          500: "#e2e8f0",
          600: "#b5bac0",
          700: "#888b90",
          800: "#5a5d60",
          900: "#2d2e30"
      },
    } ,

    
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
         'homebanner' : "/img/homebanner.png"
      },
    },
  },
  plugins: [],
}

