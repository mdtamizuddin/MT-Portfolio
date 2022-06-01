module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#2caffd",

          "secondary": "#831843",

          "accent": "#0ea5e9",

          "neutral": "#3F3F50",

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F90000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
