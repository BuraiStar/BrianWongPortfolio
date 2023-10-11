import { PaletteMode } from "@mui/material";
import { amber, orange, grey, yellow, red, lightBlue, purple } from "@mui/material/colors";

const theme = {
  palette: {
    mode:"dark",
    primary: lightBlue,
    secondary: lightBlue,
    customBackgroundColor:{
      even: "#464545",
      odd:  "#575656",
      defaultDarker: "#e1f5fe"
    }
  },
  typography: {
    htmlFontSize: 8,
    h1: { fontSize: '5rem' },
    h2: { fontSize: '4rem' },
    h3: { fontSize: '3rem' },
    h4: { fontSize: '2.5rem' },
    h5: { fontSize: "2rem"},
    h6: { fontSize: "1.5rem"},
    body: {fontSize : "1rem"}
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
          primary: lightBlue,
          secondary: lightBlue,
          divider: purple[200],
          background: {
            default: "#f3e5f5",
            defaultDarker: "#e1f5fe",
            paper: "#e1f5fe",
          },
          text: {
            primary: purple[900],
            secondary: purple[800],
          },
          customBackgroundColor:{
            even: yellow,
            odd:  "#ddd",
            defaultDarker: "#b3e5fc"
          },
          customCarouselColor: {
            primary : "hsl(196, 60%, calc(100% - var(--abs-offset) * 50%))"
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
            default: "#222",
            defaultDarker: "#111",
            paper: "#111",
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
          customBackgroundColor:{
            even: "#464545",
            odd:  "#575656", 
            defaultDarker: "#111"
          },
          customCarouselColor: {
            primary : "hsl(0, 0%, calc(0% + var(--abs-offset) * 50%))"
          },
          customTextColor:{
            main: "#fff"
          },
          toastColor: orange[500],
        }
      ),
  },typography: {
    htmlFontSize: 16,
    h1: { fontSize: '5rem' },
    h2: { fontSize: '4rem' },
    h3: { fontSize: '3rem' },
    h4: { fontSize: '2.5rem' },
    h5: { fontSize: "2rem"},
    h6: { fontSize: "1.5rem"},
    body: {fontSize : "1rem"}
  },
});

export default theme;