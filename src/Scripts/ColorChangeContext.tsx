import { createTheme, Theme } from "@mui/material";
import { createContext, FC, PropsWithChildren, useContext, useEffect, useState} from "react";
import React from "react"
import { useColorTheme } from "./UseColorTheme";

type ThemeContextType = {
  mode: string;
  toggleLightColorMode: () => void;
  toggleDarkColorMode: () => void;
  theme: Theme;
};

export const ThemeContext = createContext<ThemeContextType>({
  mode: "light",
  toggleLightColorMode: () => {},
  toggleDarkColorMode: () => {},
  theme: createTheme(),
});

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const value = useColorTheme();
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

