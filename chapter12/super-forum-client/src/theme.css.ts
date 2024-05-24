import { createTheme } from "@vanilla-extract/css";

// TODO: Set up a theme for the App
export const [themeClass, vars] = createTheme({
  colors: {
    primary: "blue",
  },
});