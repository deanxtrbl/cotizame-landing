/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta VitaPlan
        vita: {
          navy: "#0F2A43",      // titulares y texto principal
          blue: "#0EA5E9",      // azul de marca (logo, detalles)
          blueDark: "#0284C7",  // azul de textos y detalles (el celeste de la versión anterior, sky-600)
          teal: "#14B8A6",      // acento (checks, barra de progreso)
          tealDark: "#0F766E",  // acento oscuro
          mist: "#F0F9FF",      // fondo celeste suave
          ink: "#475C70",       // texto secundario
          line: "#DCEAF3",      // bordes suaves
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}