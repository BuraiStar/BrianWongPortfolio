
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
	const [carouselState, setCarouselState] = useState({
		loading: 0,
		carouselPosts: null,
	});
	const [softwareState, setSoftwareState] = useState({
		loading: 0,
		softwarePosts: null,
	});
	const [experienceState, setExperienceState] = useState({
		loading: 0,
		experiencePosts: null,
	});
	const [qualificationState, setQualificationState] = useState({
		loading: 0,
		qualificationPosts: null,
	});
	const [languageState, setLanguageState] = useState({
		loading: 0,
		languagePosts: null,
	});

	useEffect(() => {
		setCarouselState({ loading: 0 });
		const apiUrl = `https://s22gssg9w4.execute-api.us-east-1.amazonaws.com/dev/api`;
		fetch(apiUrl)
			.then((data) => data.json())
			.then((posts) => {
				setCarouselState({ loading: 1, carouselPosts: posts });
			}).catch((error) => {
                setCarouselState({ loading: 2, carouselPosts: null });
            });
	}, [setCarouselState]);

    useEffect(() => {
		setQualificationState({ loading: 0 });
		const apiUrl = `https://s22gssg9w4.execute-api.us-east-1.amazonaws.com/dev/api/qualification`;
		fetch(apiUrl)
			.then((data) => data.json())
			.then((posts) => {
				setQualificationState({ loading: 1, qualificationPosts: posts });
			}).catch((error) => {
                setQualificationState({ loading: 2, qualificationPosts: null });
            });
	}, [setQualificationState]);

    useEffect(() => {
		setSoftwareState({ loading: 0 });
		const apiUrl = `https://s22gssg9w4.execute-api.us-east-1.amazonaws.com/dev/api/software`;
		fetch(apiUrl)
			.then((data) => data.json())
			.then((posts) => {
				setSoftwareState({ loading: 1, softwarePosts: posts });
			}).catch((error) => {
                setSoftwareState({ loading: 2, softwarePosts: null });
            });
	}, [setSoftwareState]);

    useEffect(() => {
		setLanguageState({ loading: 0 });
		const apiUrl = `https://s22gssg9w4.execute-api.us-east-1.amazonaws.com/dev/api/language`;
		fetch(apiUrl)
			.then((data) => data.json())
			.then((posts) => {
				setLanguageState({ loading: 1, languagePosts: posts });
			}).catch((error) => {
                setLanguageState({ loading: 2, languagePosts: null });
            });
	}, [setLanguageState]);

    useEffect(() => {
		setExperienceState({ loading: 0 });
		const apiUrl = `https://s22gssg9w4.execute-api.us-east-1.amazonaws.com/dev/api/workExperience`;
		fetch(apiUrl)
			.then((data) => data.json())
			.then((posts) => {
				setExperienceState({ loading: 1, experiencePosts: posts });
			}).catch((error) => {
                setExperienceState({ loading: 2, experiencePosts: null });
            });
	}, [setExperienceState]);

    const [isWidthBigger, setIsWidthBigger] = useState(false) 
    useEffect(() => {
        function detectWindowSize() {
            setIsWidthBigger(window.innerWidth >= 800);
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
        window.innerWidth >= 800 ? setIsWidthBigger(true) : setIsWidthBigger(false);
    }
    
    window.onresize = detectWindowSize;
    return (
        <ThemeProvider theme={responsiveFontSizes(theme, { breakpoints: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'], factor: 5 })}>
            <CssBaseline/>
            <Paper sx={{ color: "#AAAAAA"}}>
                <AppBar />
                {
                    carouselState && carouselState.loading === 1 ? (
                        <React.Fragment>
                            <FirstPageCarousel windowSize = {isWidthBigger} carouselPosts = {carouselState.carouselPosts}/>
                            {
                                qualificationState && experienceState && qualificationState.loading == 1 && experienceState.loading == 1 ? (
                                    <>
                                        <Page1  windowSize = {isWidthBigger} qualificationPosts = {qualificationState.qualificationPosts} experiencePosts = {experienceState.experiencePosts} />
                                        {
                                            softwareState && languageState && softwareState.loading == 1 && languageState.loading == 1 ? (
                                                <>
                                                    <ExperienceBlock windowSize = {isWidthBigger} softwarePosts = {softwareState.softwarePosts} languagePosts = {languageState.languagePosts}/>
                                                </>
                                            ) : softwareState && languageState && softwareState.loading == 2 || languageState.loading == 2 ? (
                                                <>
                                                    <Paper>
                                                        <Typography variant="h1" sx={{minHeight:"calc(100vh - 165px)", display: "flex", alignItems: "center", verticalAlign: "center", textAlign: "center", justifyContent : "center"}} >Page ran into an error, please refresh the page.</Typography>
                                                    </Paper>
                                                </>
                                            ) : (
                                                <>
                                                    <Paper>
                                                        <Typography variant="h1" sx={{minHeight:"calc(100vh - 165px)", display: "flex",alignItems: "center", verticalAlign: "center", textAlign: "center", justifyContent : "center"}} >Page Loading...</Typography>
                                                    </Paper>
                                                </>
                                            )
                                        }
                                    </>
                                ) : qualificationState && experienceState && qualificationState.loading == 2 || experienceState.loading == 2 ? (
                                    <>
                                        <Paper>
                                            <Typography variant="h1" sx={{minHeight:"calc(100vh - 165px)", display: "flex", alignItems: "center", verticalAlign: "center", textAlign: "center", justifyContent : "center"}} >Page ran into an error, please refresh the page.</Typography>
                                        </Paper>
                                    </>
                                ) : (
                                    <>
                                        <Paper>
                                            <Typography variant="h1" sx={{minHeight:"calc(100vh - 165px)", display: "flex",alignItems: "center", verticalAlign: "center", textAlign: "center", justifyContent : "center"}} >Page Loading...</Typography>
                                        </Paper>
                                    </>
                                )
                            }
                        </React.Fragment>
                    ) : carouselState && carouselState.loading === 2 ?  (
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