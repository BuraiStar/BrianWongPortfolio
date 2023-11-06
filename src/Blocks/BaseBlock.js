
import Paper from "@mui/material/Paper";
import AppBar from "./AppBar";
import Page1 from "./Page1";
import { CssBaseline, Typography, responsiveFontSizes } from "@mui/material";
import {  useThemeContext } from "../Scripts/ColorChangeContext";
import { ThemeProvider } from "@emotion/react";
import FirstPageCarousel from "./FirstPageCarousel";
import ExperienceBlock from "./ExperienceBlock";
import Footer from "./Footer";
import React,{useEffect, useState} from "react";

export default function BaseBlock() {
    const { theme } = useThemeContext();
	const [appState, setAppState] = useState({
		loading: 0,
		carouselPosts: null,
	});

	useEffect(() => {
		setAppState({ loading: true });
		const apiUrl = `https://s22gssg9w4.execute-api.us-east-1.amazonaws.com/dev/api`;
		fetch(apiUrl)
			.then((data) => data.json())
			.then((posts) => {
				setAppState({ loading: 1, carouselPosts: posts });
			}).catch((error) => {
                console.error(error)
                setAppState({ loading: 2, carouselPosts: null });
            });
	}, [setAppState]);

    const [isWidthBigger, setIsWidthBigger] = useState(false) 
    useEffect(() => {
        function detectWindowSize() {
            setIsWidthBigger(window.innerWidth >= 630);
          }
    }, [window.screen.width]);
    useEffect(() => {    
        detectWindowSize(); // Initial call to set the state based on the window width
        window.addEventListener('resize', detectWindowSize); // Listen for window resize
    
        return () => {
          window.removeEventListener('resize', detectWindowSize); // Clean up the event listener
        };
      }, []);

    function detectWindowSize() {
        window.innerWidth >= 630 ? setIsWidthBigger(true) : setIsWidthBigger(false);
    }
    
    window.onresize = detectWindowSize;
    return (
        <ThemeProvider theme={responsiveFontSizes(theme, { breakpoints: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'], factor: 5 })}>
            <CssBaseline/>
            <Paper sx={{ color: "#AAAAAA"}}>
                <AppBar />
                {
                    appState && appState.loading === 1 ? (
                        <React.Fragment>
                            <FirstPageCarousel windowSize = {isWidthBigger} carouselPosts = {appState.carouselPosts}/>
                            <Page1  windowSize = {isWidthBigger}/>
                            <ExperienceBlock windowSize = {isWidthBigger}/>
                        </React.Fragment>
                    ) : appState && appState.loading === 2 ?  (
                        <Typography variant="h1" sx={{minHeight:"calc(100vh - 165px)", display: "flex", alignItems: "center", verticalAlign: "center", textAlign: "center", justifyContent : "center"}} >Page ran into an error, please refresh the page.</Typography>
                    ) : (
                        <Typography variant="h1" sx={{minHeight:"calc(100vh - 165px)", display: "flex",alignItems: "center", verticalAlign: "center", textAlign: "center", justifyContent : "center"}} >Page Loading...</Typography>
                    )
                }
                <Footer />
            </Paper>
        </ThemeProvider>
    )
}