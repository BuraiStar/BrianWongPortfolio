
import {Box, Grid} from "@mui/material";
import "../static/css/toast-theme.css"
import React from "react";
import InfoBlock from "./Objects/InfoBlock";
import PreviousWork from "./Objects/PreviousWork";
import Qualifications from "./Objects/Qualifications";

export default function DisplayPage1(windowSize) {
  const [newState, setNewState] = React.useState({gridOneOpen: false, gridTwoOpen: false})

  const handleCallback = (ChildID, gridOpen) => {
    if (ChildID==0){
      setNewState({gridOneOpen: gridOpen,gridTwoOpen: false});
    }else if (ChildID == 1){
      setNewState({gridOneOpen: false,gridTwoOpen: gridOpen});
    }
    
  }
  function getIfOneExpanded(){
    if (newState.gridOneOpen || newState.gridTwoOpen) return true;
    return false
  }

  function getWhichExpanded(){
    if (newState.gridOneOpen) return true;
    return false
  }
  
  return (
    <Box sx = {{flexGrow: 1, py:2, backgroundColor: (theme) => theme.palette.customBackgroundColor.even}}>
      <Grid container direction="row" justifyContent={"space-around"} alignItems={"flex-start"} spacing={1} sx = {{transition: "all .3s ease-in-out" }}>
      {
        windowSize.windowSize ? 
          <><Grid item xs={3} sx={{ transition: "all .3s ease-in-out" }}>
              <InfoBlock />
            </Grid><Grid item xs={getIfOneExpanded() ? getWhichExpanded() ? 4 : 3 : 3} sx={{ transition: "all .3s ease-in-out" }}>
              <PreviousWork parentCallback={handleCallback} isWidthBigger = {false}/>
              </Grid><Grid item xs={getIfOneExpanded() ? getWhichExpanded() ? 3 : 4 : 3} sx={{ transition: "all .3s ease-in-out" }}>
                <Qualifications />
              </Grid></>
       :<Grid item xs={11} sx={{transition: "all .3s ease-in-out" }}>
          <InfoBlock/>
          <PreviousWork parentCallback={handleCallback} isWidthBigger = {true}/>
          <Qualifications/>
        </Grid>
      }
      </Grid> 
      
    </Box>
    
  );
}
