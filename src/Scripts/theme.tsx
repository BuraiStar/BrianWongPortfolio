import { PaletteMode } from "@mui/material";
import { amber, orange, grey, yellow, red } from "@mui/material/colors";

const theme = {
  palette: {
    mode:"dark",
    primary: amber,
    secondary: yellow,
    customBackgroundColor:{
      even: "#464545",
      odd:  "#575656"
    }
  },
  typography: {
    h1: { fontSize: '5rem' },
    h5: { fontSize: "2rem"},
    h6: { fontSize: "1.5rem"},
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 425,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
      '3xl': 1920,
      '4xl': 2560,
      '5xl': 3200,
    },
  },
};

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: amber,
          secondary: yellow,
          divider: amber[200],
          text: {
            primary: red[900],
            secondary: red[800],
          },
          customBackgroundColor:{
            even: yellow,
            odd:  yellow
          },
          customTextColor:{
            main: "#000"
          },
          toastColor: amber[500],
        }
      : {
          // palette values for dark mode
          primary: orange,
          secondary: red,
          divider: orange[700],
          background: {
            default: "#111",
            paper: "#111",
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
          customBackgroundColor:{
            even: "#464545",
            odd:  "#575656"
          },
          customTextColor:{
            main: "#fff"
          },
          toastColor: orange[500],
        }
      ),
  },
});

export default theme;