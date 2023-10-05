import CreateTheme from "@mui/material/styles/createTheme";
import { orange, purple } from "@mui/material/colors";


export const custTheme = CreateTheme({
  palette: {
    mode: "dark",
    primary: {
      main: orange[500],
      light: "#F7F7F7",
      dark: orange[500]
    },
    secondary: {
      main: "#151515",
      light: purple[500],
      dark: "#151515"
    }
  },
  typography: {
    fontFamily: "Roboto"
  }
});
