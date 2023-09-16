import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import AppBar from "./Blocks/AppBar";
import Page1 from "./Blocks/Page1";
import { custTheme } from "./themes";
import Paper from "@mui/material/Paper";

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={custTheme}>
        <Paper sx={{ color: "#AAAAAA" }}>
          <AppBar />
          <Page1 />
        </Paper>
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
);
