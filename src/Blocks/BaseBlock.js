
import Paper from "@mui/material/Paper";
import AppBar from "./AppBar";
import Page1 from "./Page1";
import { CssBaseline, responsiveFontSizes } from "@mui/material";
import {  useThemeContext } from "../Scripts/ColorChangeContext";
import { ThemeProvider } from "@emotion/react";
import FirstPageCarousel from "./FirstPageCarousel";
import ExperienceBlock from "./ExperienceBlock";
import Footer from "./Footer";
import React,{useEffect, useState} from "react";

export default function BaseBlock() {
    const { theme } = useThemeContext();
	/*const [appState, setAppState] = useState({
		loading: false,
		posts: null,
	});

	useEffect(() => {
		setAppState({ loading: true });
		const apiUrl = `http://127.0.0.1:8000/api/`;
		fetch(apiUrl)
			.then((data) => data.json())
			.then((posts) => {
				setAppState({ loading: false, posts: posts });
                console.log(posts);
			});
	}, [setAppState]);*/

    const [isWidthBigger, setIsWidthBigger] = useState(false) 

    useEffect(() => {
        window.screen.width >= 630 ? setIsWidthBigger(true) : setIsWidthBigger(false);
    }, [window.screen.width]);

    function detectWindowSize() {
        window.innerWidth >= 630 ? setIsWidthBigger(true) : setIsWidthBigger(false);
    }
    
    window.onresize = detectWindowSize;
    
    return (
        <ThemeProvider theme={responsiveFontSizes(theme, { breakpoints: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'], factor: 5 })}>
            <CssBaseline/>
            <Paper sx={{ color: "#AAAAAA" }}>
                <AppBar />
                <FirstPageCarousel windowSize = {isWidthBigger}/>
                <Page1 windowSize = {isWidthBigger}/>
                <ExperienceBlock windowSize = {isWidthBigger}/>
                <Footer/>
            </Paper>
        </ThemeProvider>
    )
}