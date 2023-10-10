import PhonelinkRingTwoToneIcon from '@mui/icons-material/PhonelinkRingTwoTone';
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';
import ConstructionTwoTone from '@mui/icons-material/ConstructionTwoTone';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import ExtensionTwoToneIcon from '@mui/icons-material/ExtensionTwoTone';
import {Paper, Box, Grid, Typography, Avatar, Button, Card } from "@mui/material";
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
              backgroundColor: (theme) => theme.palette.background.default,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transition: "all .3s ease-in-out"
            }}>
            <Typography variant="h2" sx={{ textJustify: "center",  my : 2}} overflow={"hidden"} textOverflow={'ellipsis'}>
              About Me
            </Typography>
          </Paper>
          <Paper
            sx={{
              my: 1,
              backgroundColor: (theme) => theme.palette.background.default,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transition: "all .3s ease-in-out"
            }}>
              <Avatar sx={{bgcolor: (theme) => theme.palette.primary.main, color:  "customTextColor.main", width: "90%", height: "auto", maxWidth: 150, maxHeight: 150, my: 5 }} alt="Profile Picture" src="/images/Base1.png">BW</Avatar>
              <Typography variant="h5" component="div" sx={{ textJustify: "center"}} overflow={"hidden"} textOverflow={'ellipsis'}> 
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
                <Typography variant="h6" component="div" sx={{ textJustify: "center"}} display = "block" overflow={"hidden"} textOverflow={'ellipsis'}>
                  +60173066026
                </Typography>
              </Button>
              <Button value="brianwongweiwen94@gmail.com" variant="outlined" mode = "mode" sx={{my : .25, mx: .25, alignSelf: "stretch"}} onClick={e => copyFunction(e.currentTarget.value, "Email ", e.currentTarget.mode)} >
                <MailTwoToneIcon sx = {{fontSize: "middle", marginRight: 1}}/>
                <Typography variant="body" sx={{ textJustify: "center"}} display = "block" overflow={"hidden"} textOverflow={'ellipsis'}>
                  brianwongweiwen94@gmail.com
                </Typography>
              </Button>

          </Paper>

          <Paper
            sx={{
              my: 1,
              backgroundColor: (theme) => theme.palette.background.default,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transition: "all .3s ease-in-out"
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