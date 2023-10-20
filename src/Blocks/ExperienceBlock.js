import { Card, CardMedia, Grid, Typography, Rating } from "@mui/material";
import Paper from "@mui/material/Paper";
import StackGrid from "react-stack-grid";
import Experiences from "../Scripts/Json/Experience.json"

export default function ExperienceBlock(windowSize){
    return (
        <Paper sx={{backgroundColor: (theme) => theme.palette.customBackgroundColor.odd, py: 1,
        alignItems: "center", verticalAlign: "center", textAlign: "center",flexWrap: "wrap", flexGrow: "1"}}>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
            >
                <Grid item xs={3}>
                    <Card sx={{  py:1, px: 1.2, my: 1, maxWidth: 250}}><Typography variant="h2" fontWeight={"bold"} textAlign="center">Skills</Typography></Card>
                </Grid>
                
                <Grid item xs={3}>
                    <Card sx={{  py:1, px: 1.2, marginBottom: 2, maxWidth: 250}}><Typography variant="h5" textAlign="center">Programming Languages</Typography></Card>
                </Grid>
            </Grid>
            <Grid container direction="row" justifyContent={"center"} alignItems={"flex-start"} spacing={3} sx = {{transition: "all .3s ease-in-out" }}>
                {
                    windowSize.windowSize ? <><Grid item>
                    {
                    Experiences && Experiences.Language.map((record,id)=> {
                        return id < 3 && <Card key={record.Name} sx={{marginBottom : 2, maxWidth: 200}}>
                            <CardMedia
                            component="img"
                            width = "50%"
                            image={record.ImageLink}/>
                            <Typography>{record.Name}</Typography>
                            <Typography>{record.ShortDescription}</Typography>
                            <Typography>Experience</Typography>
                            <Rating name="read-only" value={record.AmountOfExperience/2} precision={0.5} readOnly />
                        </Card>
                    })}
                </Grid>
                <Grid item>
                    {
                    Experiences && Experiences.Language.map((record,id)=> {
                        return id >= 3 && id < 6 && <Card key={record.Name} sx={{marginBottom : 2, maxWidth: 200}}>
                            <CardMedia
                            component="img"
                            width = "50%"
                            image={record.ImageLink}/>
                            <Typography>{record.Name}</Typography>
                            <Typography>{record.ShortDescription}</Typography>
                            <Typography>Experience</Typography>
                            <Rating name="read-only" value={record.AmountOfExperience/2} precision={0.5} readOnly />
                        </Card>
                    })}
                </Grid>
                <Grid item>
                    {
                    Experiences && Experiences.Language.map((record,id)=> {
                        return id >= 6 && <Card key={record.Name} sx={{marginBottom : 2, maxWidth: 200}}>
                            <CardMedia
                            component="img"
                            width = "50%"
                            image={record.ImageLink}/>
                            <Typography>{record.Name}</Typography>
                            <Typography>{record.ShortDescription}</Typography>
                            <Typography>Experience</Typography>
                            <Rating name="read-only" value={record.AmountOfExperience/2} precision={0.5} readOnly />
                        </Card>
                    })}
                </Grid></> : <>
                <Grid item>
                    {
                    Experiences && Experiences.Language.map((record,id)=> {
                        return id < 5 && <Card key={record.Name} sx={{marginBottom : 2, maxWidth: 200}}>
                            <CardMedia
                            component="img"
                            width = "50%"
                            image={record.ImageLink}/>
                            <Typography>{record.Name}</Typography>
                            <Typography>{record.ShortDescription}</Typography>
                            <Typography>Experience</Typography>
                            <Rating name="read-only" value={record.AmountOfExperience/2} precision={0.5} readOnly />
                        </Card>
                    })}
                </Grid>
                <Grid item>
                    {
                    Experiences && Experiences.Language.map((record,id)=> {
                        return id >= 5 && <Card key={record.Name} sx={{marginBottom : 2, maxWidth: 200}}>
                            <CardMedia
                            component="img"
                            width = "50%"
                            image={record.ImageLink}/>
                            <Typography>{record.Name}</Typography>
                            <Typography>{record.ShortDescription}</Typography>
                            <Typography>Experience</Typography>
                            <Rating name="read-only" value={record.AmountOfExperience/2} precision={0.5} readOnly />
                        </Card>
                    })}
                </Grid></>
                    
                }
                
            </Grid>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
            >
                <Grid item xs={3}>
                    <Card sx={{ py:1, px: 1.2, marginBottom: 2, maxWidth: 250}}><Typography variant="h5" textAlign="center">Software</Typography></Card>
                </Grid>
            </Grid>
            <Grid container direction="row" justifyContent={"center"} alignItems={"flex-start"} spacing={3} sx = {{transition: "all .3s ease-in-out" }}>
                <Grid item>
                    {
                    Experiences && Experiences.Software.map((record,id)=> {
                        return id >= 3 && <Card key={record.Name} sx={{marginBottom : 2, maxWidth: 200}}>
                            <CardMedia
                            component="img"
                            width = "50%"
                            image={record.ImageLink}/>
                            <Typography>{record.Name}</Typography>
                            <Typography>{record.ShortDescription}</Typography>
                            <Typography>Experience</Typography>
                            <Rating name="read-only" value={record.AmountOfExperience/2} precision={0.5} readOnly />
                        </Card>
                    })}
                </Grid>
                <Grid item>
                    {
                    Experiences && Experiences.Software.map((record,id)=> {
                        return id < 3 && <Card key={record.Name}  sx={{marginBottom : 2, maxWidth: 200}}>
                            <CardMedia
                            component="img"
                            width = "50%"
                            image={record.ImageLink}/>
                            <Typography>{record.Name}</Typography>
                            <Typography>{record.ShortDescription}</Typography>
                            <Typography>Experience</Typography>
                            <Rating name="read-only" value={record.AmountOfExperience/2} precision={0.5} readOnly />
                        </Card>
                    })}
                </Grid>
            </Grid>
                
                    
        </Paper>
    )
}