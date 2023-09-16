import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import AppBar from "./AppBar";
import { custTheme } from "./src/themes";

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={custTheme}>
        <AppBar />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
