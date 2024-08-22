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
        fontFamily: "segoe UI",
      
    },
  });

  theme = responsiveFontSizes(theme);
  export default theme
