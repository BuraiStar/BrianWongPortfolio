import {  Paper, Box, Grid, Typography, Avatar, Button, Card, CardHeader } from "@mui/material";

export default function PreviousWork(){
    return (
        <Grid item sx={{justifyContent: "center"}}>
            <Paper
            sx={{
              my: 1,
              width: 300,
              backgroundColor: (theme) => theme.palette.primary,
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}>
            <Typography variant="h2" component="div" sx={{ textJustify: "center",  my : 2}}>
                Work Experiences
            </Typography>
            </Paper>
            <Paper
                sx={{
                my: 1,
                width: 300,
                backgroundColor: (theme) => theme.palette.primary
                }}>
                <Card variant= "outlined" sx={{my:1, mx:1}}>
                    <CardHeader>
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="Latest">
                        
                        </Avatar>
                    </CardHeader>
                    Hi
                </Card>
            </Paper>
        </Grid>
    )
}