import {  Paper, Box, Grid, Typography, Avatar, Button, Card, CardHeader, CardContent, CardActions, CardMedia, IconButton, Collapse } from "@mui/material";
import { red } from "@mui/material/colors";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { ExpandMore } from "../../Scripts/styles/ExpandMoreButton";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from "react";
import { FadeInSection } from "./InfoBlock";

export default function PreviousWork(props){
    const [arrayExpanded, setArrayExpanded] = React.useState([]);
    const handleExpandClickSingle = (index) => {
        if (arrayExpanded[index] == undefined){
            setArrayExpanded([...arrayExpanded, false])
        }
        return () => {
            let tempArray = [...arrayExpanded]
            for (let i = 0; i < tempArray.length; i++){
                if (i != index){
                    tempArray[i] = false;
                }
            }
            props.parentCallback(0,!tempArray[index]);
            tempArray[index] = !tempArray[index]
            setArrayExpanded(tempArray);
        }
    }
    function getIfOneExpanded () { 
        for (let i = 0; i < arrayExpanded.length; i++){
            if (arrayExpanded[i]){
                return true
            }
        }
        return false;
    }
    return (
        <Grid item sx={{justifyContent: "center", my: props.isWidthBigger ? 5 : 0}}>
            {
                getIfOneExpanded() ? (
                    <>
                        <Paper
                        sx={{
                            my: 1,
                            backgroundColor: (theme) => theme.palette.background.default,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            transition: "all .3s ease-in-out"
                        }}>
                            <Typography variant="h2"  sx={{ textJustify: "center", my: 2 }}  overflow={"hidden"} textOverflow={'ellipsis'}>
                                Work Experiences
                            </Typography>
                        </Paper>
                    
                    <Paper
                        sx={{
                            my: 1,
                            backgroundColor: (theme) => theme.palette.customBackgroundColor.defaultDarker,
                            transition: "all .3s ease-in-out"
                        }}>
                            {props.experiencePosts && props.experiencePosts.map((record, i) => {
                                return (
                                    <FadeInSection key={i }>
                                        <Card variant="outlined" sx={{ my: 1, transition: "all .3s ease-in-out", bgcolor: (theme) => theme.palette.background.default }} key={record.companyName + i}>
                                            <CardHeader
                                                avatar={<Avatar sx={{  bgcolor: (theme) => theme.palette.text.primary}} aria-label="Latest">
                                                    BW
                                                </Avatar>}
                                                title={record.companyName}
                                                subheader={record.duration}
                                            >
                                            </CardHeader>
                                            <CardMedia
                                                component="img"
                                                width = "100%"
                                                image={record.image1}
                                                alt={record.companyName}
                                                key={record.companyName + "1"}/>
                                            <CardContent>
                                                <Collapse in={!arrayExpanded[i]} timeout="auto" unmountOnExit>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {record.shortDescription}
                                                    </Typography>
                                                </Collapse>
                                            </CardContent>
                                            <CardActions disableSpacing>
                                                <IconButton aria-label={record.linkArial} href={record.link} target="_blank" title={record.linkArial}>
                                                    <OpenInNewIcon />
                                                </IconButton>
                                                <ExpandMore expand={arrayExpanded[i]}
                                                    onClick={handleExpandClickSingle(i)}
                                                    aria-expanded={arrayExpanded[i]}
                                                    aria-label="Show more">
                                                    <ExpandMoreIcon />
                                                </ExpandMore>
                                            </CardActions>
                                            <Collapse in={arrayExpanded[i]} timeout="auto" unmountOnExit>
                                                <CardContent>
                                                    <Typography>
                                                        {record.longDescription1}
                                                    </Typography>
                                                    <CardMedia
                                                        component="img"
                                                        image={record.image2}
                                                        alt={record.companyName}
                                                        key={record.companyName + "2"}/>
                                                    <Typography>
                                                        {record.longDescription2}
                                                    </Typography>
                                                    <CardMedia
                                                        component="img"
                                                        height="194"
                                                        image={record.image3}
                                                        alt={record.companyName}
                                                        key={record.companyName + "3"}
                                                        sx={{ my: 1.5 }} />
                                                </CardContent>
                                            </Collapse>
                                        </Card>
                                    </FadeInSection>
                                    
                                );
                            })}
                        </Paper></>
                ) : (<>
                
                        <Paper
                            sx={{
                                my: 1,
                                backgroundColor: (theme) => theme.palette.background.default,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                transition: "all .3s ease-in-out"
                            }}>
                            <Typography variant="h2" component="div" sx={{ textJustify: "center", my: 2 }}>
                                Work Experiences
                            </Typography>
                        </Paper>
                    <Paper
                        sx={{
                            my: 1,
                            backgroundColor: (theme) => theme.palette.customBackgroundColor.defaultDarker,
                            transition: "all .3s ease-in-out"
                        }}>
                            {props.experiencePosts && props.experiencePosts.map((record, i) => {
                                return (
                                    <FadeInSection key={i}>
                                        <Card variant="outlined" sx={{ my: 1, transition: "all .3s ease-in-out", bgcolor: (theme) => theme.palette.background.default }} key={record.companyName + i}>
                                            <CardHeader
                                                avatar={<Avatar sx={{  bgcolor: (theme) => theme.palette.text.primary}} aria-label="Latest">
                                                    BW
                                                </Avatar>}
                                                title={record.companyName}
                                                subheader={record.duration}
                                            >
                                            </CardHeader>
                                            <CardMedia
                                                component="img"
                                                width = "100%"
                                                image={record.image1}
                                                alt={record.companyName}
                                                key={record.image1 + "1"} />
                                            <CardContent>
                                                <Collapse in={!arrayExpanded[i]} timeout="auto" unmountOnExit>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {record.shortDescription}
                                                    </Typography>
                                                </Collapse>
                                            </CardContent>
                                            <CardActions disableSpacing>
                                                <IconButton aria-label={record.linkArial} href={record.link} target="_blank" title={record.linkArial}>
                                                    <OpenInNewIcon />
                                                </IconButton>
                                                <ExpandMore expand={arrayExpanded[i]}
                                                    onClick={handleExpandClickSingle(i)}
                                                    aria-expanded={arrayExpanded[i]}
                                                    aria-label="Show more">
                                                    <ExpandMoreIcon />
                                                </ExpandMore>
                                            </CardActions>
                                            <Collapse in={arrayExpanded[i]} timeout="auto" unmountOnExit>
                                                <CardContent>
                                                    <Typography>
                                                        {record.longDescription1}
                                                    </Typography>
                                                    <CardMedia
                                                        component="img"
                                                        height="194"
                                                        image={record.image2}
                                                        alt={record.companyName}
                                                        key={record.companyName + "2"}
                                                        sx={{ my: 1.5 }} />
                                                    <Typography>
                                                        {record.longDescription2}
                                                    </Typography>
                                                    <CardMedia
                                                        component="img"
                                                        height="194"
                                                        image={record.image3}
                                                        alt={record.companyName}
                                                        key={record.companyName + "3"}
                                                        sx={{ my: 1.5 }} />
                                                </CardContent>
                                            </Collapse>
                                        </Card>
                                    </FadeInSection>
                                );
                            })}

                        </Paper></>)
            }
        </Grid>
    )
}