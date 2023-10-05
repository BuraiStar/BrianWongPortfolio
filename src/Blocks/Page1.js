
import {  Paper, Box, Grid, Typography, Avatar, Button, Card } from "@mui/material";
import "../static/css/toast-theme.css"
import React from "react";
import InfoBlock from "./Objects/InfoBlock";
import PreviousWork from "./Objects/PreviousWork";



export default function DisplayPage1() {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx = {{flexGrow: 1, py:2, backgroundColor: "customBackgroundColor.even", height: 850}}>
      <Grid container spacing={1} sx = {{mx : 1}} >
        <InfoBlock/>
        <PreviousWork/>
        <Grid item sx ={{mx:1.5, display: "flex"}}>
          <Paper
            sx={{
              my: 1,
              display: "flex",
              height: 800,
              backgroundColor: (theme) => theme.palette.primary
            }}>
          </Paper>
        </Grid>
      </Grid>
      
    </Box>
    
  );
}
