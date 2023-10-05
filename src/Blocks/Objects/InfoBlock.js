

import PhonelinkRingTwoToneIcon from '@mui/icons-material/PhonelinkRingTwoTone';
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';
import ConstructionTwoTone from '@mui/icons-material/ConstructionTwoTone';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import ExtensionTwoToneIcon from '@mui/icons-material/ExtensionTwoTone';
import {  Paper, Box, Grid, Typography, Avatar, Button, Card } from "@mui/material";
import logo from "../../static/images/Base1.png"
import toast from "react-simple-toasts";

export function copyFunction (value, target, mode) {
    navigator.clipboard.writeText(value)
    toast(target + "has been copied!")
  }

export default function InfoBlock(){
    return(
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
              About Me
            </Typography>
          </Paper>
          <Paper
            sx={{
              my: 1,
              width: 300,
              backgroundColor: (theme) => theme.palette.primary,
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}>
            <Avatar sx={{bgcolor: (theme) => theme.palette.primary.main, color:  "customTextColor.main", width: 150, height: 150, my: 5 }} alt="Profile Picture" src={logo}>BW</Avatar>
            <Typography variant="h5" component="div" sx={{ textJustify: "center"}}>
              Brian Wong Wei Wen
            </Typography>
            <Box sx={{display:'flex', my: 1}}>
              <LocationOnTwoToneIcon sx = {{fontSize: "middle"}}/>
              <Typography variant="body" component="div" sx={{ textJustify: "center"}} display = "block">
                KL, Malaysia
              </Typography>
            </Box>
            <Button value="+60173066026" variant="outlined" mode = "mode" sx={{my : .25 , mx: .25, alignSelf: "stretch"}} onClick={e => copyFunction(e.currentTarget.value, "Phone number ", e.currentTarget.mode)} >
              <PhonelinkRingTwoToneIcon sx = {{fontSize: "middle", marginRight: 1}}/>
              <Typography variant="h6" component="div" sx={{ textJustify: "center"}}>
                +60173066026
              </Typography>
            </Button>
            <Button value="brianwongweiwen94@gmail.com" variant="outlined" mode = "mode" sx={{my : .25, mx: .25, alignSelf: "stretch"}} onClick={e => copyFunction(e.currentTarget.value, "Email ", e.currentTarget.mode)} >
              <MailTwoToneIcon sx = {{fontSize: "middle", marginRight: 1}}/>
              <Typography variant="body" component="div" sx={{ textJustify: "center"}} display = "block">
                brianwongweiwen94@gmail.com
              </Typography>
            </Button>

          </Paper>

          <Paper
            sx={{
              my: 1,
              width: 300,
              backgroundColor: (theme) => theme.palette.primary,
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}>
            <ConstructionTwoTone fontSize="large" sx = {{marginTop: 5}} />
            <Typography variant="h5" component="div" sx={{ textJustify: "center"}}>
              Language Skills
            </Typography>
            <Typography variant="body" component="div" sx={{ textAlign: "center"}} display = "block">
                TypeScripts, JavaScripts, C++, C#, Swift, Python, JSon
            </Typography>

            <br/>
            <ExtensionTwoToneIcon fontSize="large" sx = {{marginTop: 5}} />
            <Typography variant="h5" component="div" sx={{ textJustify: "center"}}>
              Software
            </Typography>
            <Typography variant="body" component="div" sx={{ textAlign: "center"}}  display = "block">
                Cocos2d, Unity, XCode, Photoshop
            </Typography>
            <br/>
            <br/>
          </Paper>
        </Grid>
    )
}