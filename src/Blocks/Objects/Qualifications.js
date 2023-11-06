import {  Paper, Box, Grid, Typography, Avatar, Button, Card, CardHeader, CardContent, CardActions, CardMedia, IconButton, Collapse } from "@mui/material";
import { red } from "@mui/material/colors";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import React from "react";
import QualificationExperiences from "../../Scripts/Json/QualificationExperiences.json";
import { FadeInSection } from "./InfoBlock";

export default function Qualifications(){
    return(
            <Grid item sx={{justifyContent: "center"}}>
                <Paper
                    sx={{
                        my: 1,
                        backgroundColor: (theme) => theme.palette.background.default,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        transition: "all .3s ease-in-out"
                    }}>
                    <Typography variant="h2" component="div" sx={{ textJustify: "center", my: 2 }} overflow={"hidden"} textOverflow={'ellipsis'}>
                        Qualifications
                    </Typography>
                </Paper>
                <Paper
                    sx={{
                        my: 1,
                        backgroundColor: (theme) => theme.palette.background.defaultDarker,
                        transition: "all .3s ease-in-out"
                }}> 
                    {QualificationExperiences && QualificationExperiences.qualifications.map((record, i) => {
                        return (
                            <FadeInSection key={i}>
                                <Card variant="outlined" sx={{ my: 1, transition: "all .3s ease-in-out", bgcolor: (theme) => theme.palette.background.default }} key={record.qualificationName + i}>
                                    <CardHeader
                                        avatar={<Avatar sx={{ bgcolor: (theme) => theme.palette.text.primary }} aria-label="Latest">
                                            BW
                                        </Avatar>}
                                        title={record.qualificationName}
                                        subheader={record.duration}
                                    >
                                    </CardHeader>
                                    <CardMedia
                                        component="img"
                                        width = "100%"
                                        image={record.pictures.imageLink}
                                        alt={record.qualificationName}
                                        key={record.pictures.imageKey}/>
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            {record.shortDescription}
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <IconButton aria-label={record.linkArial} href={record.link} target="_blank" title={record.linkArial}>
                                            <OpenInNewIcon />
                                        </IconButton>
                                        <IconButton sx= {{marginLeft: "auto"}} aria-label={record.qualificationName + "_Qualification"} href={record.qualificationLink} target="_blank" title={record.qualificationName + "_Qualification"}>
                                            <AccountBoxIcon />
                                        </IconButton>
                                    </CardActions>
                                </Card>
                            </FadeInSection>
                        );
                    })}

                </Paper>
            </Grid>
    )
}