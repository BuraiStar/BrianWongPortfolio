import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { ThemeContextProvider, useThemeContext } from "./Scripts/ColorChangeContext";
import BaseBlock from "./Blocks/BaseBlock";

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <BrowserRouter>
    </BrowserRouter>
    <StyledEngineProvider injectFirst>
      <ThemeContextProvider>
        <BaseBlock/>
      </ThemeContextProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
);
``