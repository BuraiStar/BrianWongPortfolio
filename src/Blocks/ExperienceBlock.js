import { Card, CardMedia, Grid, Typography, Rating } from "@mui/material";
import Paper from "@mui/material/Paper";
import StackGrid from "react-stack-grid";
import { FadeInSection } from "./Objects/InfoBlock";

export default function ExperienceBlock({ windowSize, softwarePosts, languagePosts }) {
    let language = [...languagePosts]
    let software = [...softwarePosts]
    let softwareSplit = [software.slice(0, Math.ceil(software.length / 2)),software.slice(Math.ceil(software.length / 2), Math.ceil(software.length / 2) + Math.ceil(software.length / 2))];
    let languageSplit = [language.slice(0, Math.ceil(language.length / 2)),language.slice(Math.ceil(language.length / 2), Math.ceil(language.length / 2) + Math.ceil(language.length / 2))];
    let softwareChunks1 = software.splice(0, Math.ceil(software.length / 3));
    let softwareChunks2 = software.splice(0, Math.ceil(software.length / 2));
    let softwareChunks3 = software;
    let languageChunks1 = language.splice(0, Math.ceil(language.length / 3));
    let languageChunks2 = language.splice(0, Math.ceil(language.length / 2));
    let languageChunks3 = language;
    return (
        <Paper sx={{
            backgroundColor: (theme) => theme.palette.customBackgroundColor.odd, py: 1,
            alignItems: "center", verticalAlign: "center", textAlign: "center", flexWrap: "wrap", flexGrow: "1"
        }}>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
            >
                <Grid item xs={3}>
                    <Card sx={{ py: 1, px: 1.2, my: 1, maxWidth: 250 }}><Typography variant="h2" fontWeight={"bold"} textAlign="center">Skills</Typography></Card>
                </Grid>

                <Grid item xs={3}>
                    <Card sx={{ py: 1, px: 1.2, marginBottom: 2, maxWidth: 250 }}><Typography variant="h5" textAlign="center">Programming Languages</Typography></Card>
                </Grid>
            </Grid>
            <Grid container direction="row" justifyContent={"center"} alignItems={"flex-start"} spacing={3} sx={{ transition: "all .3s ease-in-out" }}>
                {
                    windowSize ? <><Grid item>
                        {
                            language && languageChunks1.map((record, id) => {
                                return <FadeInSection key={id}> <Card key={record.Name} sx={{ marginBottom: 2, maxWidth: 200 }}>
                                    <CardMedia
                                        component="img"
                                        width="50%"
                                        image={record.image} />
                                    <Typography>{record.name}</Typography>
                                    <Typography>{record.shortDescription}</Typography>
                                    <Typography>Experience</Typography>
                                    <Rating name="read-only" value={record.amountOfExperience / 2} precision={0.5} readOnly />
                                </Card></FadeInSection>
                            })}
                    </Grid>
                        <Grid item>
                            {
                                language && languageChunks2.map((record, id) => {
                                    return <FadeInSection key={id - 3}>  <Card key={record.Name} sx={{ marginBottom: 2, maxWidth: 200 }}>
                                        <CardMedia
                                            component="img"
                                            width="50%"
                                            image={record.image} />
                                        <Typography>{record.name}</Typography>
                                        <Typography>{record.shortDescription}</Typography>
                                        <Typography>Experience</Typography>
                                        <Rating name="read-only" value={record.amountOfExperience / 2} precision={0.5} readOnly />
                                    </Card></FadeInSection>
                                })}
                        </Grid>
                        <Grid item>
                            {
                                language && languageChunks3.map((record, id) => {
                                    return <FadeInSection key={id - 6}><Card key={record.Name} sx={{ marginBottom: 2, maxWidth: 200 }}>
                                        <CardMedia
                                            component="img"
                                            width="50%"
                                            image={record.image} />
                                        <Typography>{record.name}</Typography>
                                        <Typography>{record.shortDescription}</Typography>
                                        <Typography>Experience</Typography>
                                        <Rating name="read-only" value={record.amountOfExperience / 2} precision={0.5} readOnly />
                                    </Card>
                                    </FadeInSection>
                                })}
                        </Grid></> : <>
                        <Grid item>
                            {
                                language && languageSplit[0].map((record, id) => {
                                    return <FadeInSection key={id}><Card key={record.Name} sx={{ marginBottom: 2, maxWidth: 200 }}>
                                        <CardMedia
                                            component="img"
                                            width="50%"
                                            image={record.image} />
                                        <Typography>{record.name}</Typography>
                                        <Typography>{record.shortDescription}</Typography>
                                        <Typography>Experience</Typography>
                                        <Rating name="read-only" value={record.amountOfExperience / 2} precision={0.5} readOnly />
                                    </Card></FadeInSection>
                                })}
                        </Grid>
                        <Grid item>
                            {
                                language && languageSplit[1].map((record, id) => {
                                    return <FadeInSection key={id - 5}><Card key={record.Name} sx={{ marginBottom: 2, maxWidth: 200 }}>
                                        <CardMedia
                                            component="img"
                                            width="50%"
                                            image={record.image} />
                                        <Typography>{record.name}</Typography>
                                        <Typography>{record.shortDescription}</Typography>
                                        <Typography>Experience</Typography>
                                        <Rating name="read-only" value={record.amountOfExperience / 2} precision={0.5} readOnly />
                                    </Card></FadeInSection>
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
                    <Card sx={{ py: 1, px: 1.2, marginBottom: 2, maxWidth: 250 }}><Typography variant="h5" textAlign="center">Software</Typography></Card>
                </Grid>
            </Grid>
            <Grid container direction="row" justifyContent={"center"} alignItems={"flex-start"} spacing={3} sx={{ transition: "all .3s ease-in-out" }}>
                {
                    windowSize ? <>
                        <Grid item>
                            {
                                software && softwareChunks1.map((record, id) => {
                                    return <FadeInSection key={id - 3}> <Card key={record.Name} sx={{ marginBottom: 2, maxWidth: 200 }}>
                                        <CardMedia
                                            component="img"
                                            width="50%"
                                            image={record.image} />
                                        <Typography>{record.name}</Typography>
                                        <Typography>{record.shortDescription}</Typography>
                                        <Typography>Experience</Typography>
                                        <Rating name="read-only" value={record.amountOfExperience / 2} precision={0.5} readOnly />
                                    </Card></FadeInSection>
                                })}
                        </Grid>
                        <Grid item>
                            {
                                software && softwareChunks2.map((record, id) => {
                                    return <FadeInSection key={id}><Card key={record.Name} sx={{ marginBottom: 2, maxWidth: 200 }}>
                                        <CardMedia
                                            component="img"
                                            width="50%"
                                            image={record.image} />
                                        <Typography>{record.name}</Typography>
                                        <Typography>{record.shortDescription}</Typography>
                                        <Typography>Experience</Typography>
                                        <Rating name="read-only" value={record.amountOfExperience / 2} precision={0.5} readOnly />
                                    </Card>

                                    </FadeInSection>
                                })}
                        </Grid>
                        <Grid item>
                            {
                                software && softwareChunks3.map((record, id) => {
                                    return id < 3 && <FadeInSection key={id}><Card key={record.Name} sx={{ marginBottom: 2, maxWidth: 200 }}>
                                        <CardMedia
                                            component="img"
                                            width="50%"
                                            image={record.image} />
                                        <Typography>{record.name}</Typography>
                                        <Typography>{record.shortDescription}</Typography>
                                        <Typography>Experience</Typography>
                                        <Rating name="read-only" value={record.amountOfExperience / 2} precision={0.5} readOnly />
                                    </Card>

                                    </FadeInSection>
                                })}
                        </Grid>
                    </> : <>
                        <Grid item>
                            {
                                software && softwareSplit[0].map((record, id) => {
                                    return <FadeInSection key={id - 3}> <Card key={record.Name} sx={{ marginBottom: 2, maxWidth: 200 }}>
                                        <CardMedia
                                            component="img"
                                            width="50%"
                                            image={record.image} />
                                        <Typography>{record.name}</Typography>
                                        <Typography>{record.shortDescription}</Typography>
                                        <Typography>Experience</Typography>
                                        <Rating name="read-only" value={record.amountOfExperience / 2} precision={0.5} readOnly />
                                    </Card></FadeInSection>
                                })}
                        </Grid>
                        <Grid item>
                            {
                                software && softwareSplit[1].map((record, id) => {
                                    return <FadeInSection key={id}><Card key={record.Name} sx={{ marginBottom: 2, maxWidth: 200 }}>
                                        <CardMedia
                                            component="img"
                                            width="50%"
                                            image={record.image} />
                                        <Typography>{record.name}</Typography>
                                        <Typography>{record.shortDescription}</Typography>
                                        <Typography>Experience</Typography>
                                        <Rating name="read-only" value={record.amountOfExperience / 2} precision={0.5} readOnly />
                                    </Card>

                                    </FadeInSection>
                                })}
                        </Grid>
                    </>
                }

            </Grid>


        </Paper>
    )
}