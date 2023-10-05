import { createTheme, PaletteMode } from "@mui/material";
import React from "react";
import { getDesignTokens } from "./theme";
import toast, { toastConfig } from "react-simple-toasts";

export const useColorTheme = () => {
  const [mode, setMode] = React.useState<PaletteMode>("dark");
  toastConfig({theme: "toast-moonlight-dark" })

  const toggleLightColorMode = () =>{
    setMode("light");
    toast("Light Mode", {theme:"toast-moonlight"})
    toastConfig({theme: "toast-moonlight" })
  }

  const toggleDarkColorMode = () => {
    setMode("dark");
    toast("Dark Mode", {theme:"toast-moonlight-dark"})
    toastConfig({theme: "toast-moonlight-dark" })
  }

  const modifiedTheme = React.useMemo(
    () => createTheme(getDesignTokens(mode)),
    [mode]
  );

  return {
    theme: modifiedTheme,
    mode,
    toggleLightColorMode,
    toggleDarkColorMode,
  };

  
};