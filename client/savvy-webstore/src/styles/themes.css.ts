import { createGlobalTheme } from "@vanilla-extract/css";

export const root = createGlobalTheme(":root", {
  fonts: {
    body: "'Poppins', sans-serif",
  },
  fontWeights: {
    extraLight: "200",
    light: "300",
    regular: "400",
    bold: "700",
    extraBold: "800",
  },
  fontSizes: {
    "1x": "0.6rem",
    "2x": "0.8rem",
    "3x": "1rem",
    "4x": "1.25rem",
    "5x": "1.563rem",
    "6x": "1.953rem",
    "7x": "2.441rem",
    "8x": "3.052rem",
  },
  spacing: {
    none: "0",
    "1x": "10px",
    "2x": "15px",
    "3x": "20px",
    "4x": "25px",
  },
  colours: {
    primary: "#FFFFFF",
    secondary: "#2C4259",
    brand: "#c2410c",
    lightBrand: "#f97316",
    darkBrand: "#9a3412",
    lightGrey: "#EAEAEA",
    grey: "#F5F5F5"
  }
});
