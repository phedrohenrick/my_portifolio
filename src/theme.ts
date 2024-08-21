import { createTheme, responsiveFontSizes } from "@mui/material"
import './App.css';

let theme = createTheme({
    palette: {
      primary: {
        main: "#fbf5df",
      },
      secondary: {
        main: "#12300f",
      },
    },

    typography: {
        fontFamily: "segoe UI",
      
    },
  });

  theme = responsiveFontSizes(theme);
  export default theme
