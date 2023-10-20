import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { ThemeContextProvider, useThemeContext } from "./Scripts/ColorChangeContext";
import BaseBlock from "./Blocks/BaseBlock";

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <BrowserRouter>
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
          <ThemeContextProvider>
            <Routes>
              <Route path="/../Blocks" element={<BaseBlock/>}/>
            </Routes>
            <BaseBlock/>
          </ThemeContextProvider>
        </StyledEngineProvider>
      </React.StrictMode>
  </BrowserRouter>
);
``