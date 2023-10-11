
import Paper from "@mui/material/Paper";
import AppBar from "./AppBar";
import Page1 from "./Page1";
import { CssBaseline, responsiveFontSizes } from "@mui/material";
import {  useThemeContext } from "../Scripts/ColorChangeContext";
import { ThemeProvider } from "@emotion/react";
import FirstPageCarousel from "./FirstPageCarousel";
import ExperienceBlock from "./ExperienceBlock";
import Footer from "./Footer";

export default function BaseBlock() {
    const { theme } = useThemeContext();
    return (
        <ThemeProvider theme={responsiveFontSizes(theme, { breakpoints: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'], factor: 5 })}>
            <CssBaseline/>
            <Paper sx={{ color: "#AAAAAA" }}>
                <AppBar />
                <FirstPageCarousel/>
                <Page1/>
                <ExperienceBlock/>
                <Footer/>
            </Paper>
        </ThemeProvider>
    )
}