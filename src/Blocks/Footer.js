import { Paper, Typography } from "@mui/material"


export default function Footer() {
    return (
    <Paper sx={{backgroundColor: (theme) => theme.palette.primary.main, width: "100%", height: "100px", display: "flex",
    alignItems: "center", verticalAlign: "center", textAlign: "center", justifyContent : "center", flexWrap: "wrap", flexGrow: "1"}}> 
        <Typography variant="h2" sx={{ textJustify: "center"}} overflow={"hidden"} textOverflow={'ellipsis'}>
            &copy; Brian Wong Wei Wen, 2023
        </Typography>
    </Paper>)
}