import { createTheme, responsiveFontSizes } from "@mui/material"
import './App.css';

let theme = createTheme({
    palette: {
      primary: {
        main: "#012c32",
      },
      secondary: {
        main: "#fbf5df",
      },
    },

    typography: {
        fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
      
    },
  });

  theme = responsiveFontSizes(theme);
  export default theme
