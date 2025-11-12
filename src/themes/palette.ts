import type { PaletteOptions } from "@mui/material/styles";

const palette: PaletteOptions = {
  mode: "light",

  primary: {
    main: "#1976d2",
    light: "#63a4ff",
    dark: "#004ba0",
    contrastText: "#ffffff",
  },

  secondary: {
    main: "#9c27b0",
    light: "#d05ce3",
    dark: "#6a0080",
    contrastText: "#ffffff",
  },

  error: {
    main: "#d32f2f",
  },

  warning: {
    main: "#ed6c02",
  },

  info: {
    main: "#0288d1",
  },

  success: {
    main: "#2e7d32",
  },

  text: {
    primary: "#1a1a1a",
    secondary: "#555555",
    disabled: "#9e9e9e",
  },

  background: {
    default: "#f9f9f9",
    paper: "#ffffff",
  },
};

export default palette;
