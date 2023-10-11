import Paper from "@mui/material/Paper/Paper"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardActions from "@mui/material/CardActions"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography";
import React, {useState} from "react"
import "../static/css/card.scss"
import CarouselItems from "../Scripts/Json/CarouselItems.json"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {TiChevronLeftOutline, TiChevronRightOutline} from "react-icons/ti"

const MAX_VISIBILITY = 3;

const CardObject = ({jsonObject}) => (
    <Card variant="outlined" sx={{ padding: "1rem", borderColor: (theme) => theme.palette.divider, borderRadius: "1rem", transition : " all 0.3s ease-out", backgroundColor: (theme) => theme.palette.customCarouselColor.primary}}>
        <CardMedia
            component="img"
            width = "100%"
            image={jsonObject.imageLink}/>
        <Typography  align="left" variant= "h3" sx={{py:2, px: 0.5}}>{jsonObject.Title}</Typography>
        <Typography  align="left" variant= "body" sx={{py:2}}>{jsonObject.ShortDescription}</Typography>
        <CardActions disableSpacing>
            <IconButton aria-label={jsonObject.LinkDescription} href={jsonObject.Link} target="_blank" title={jsonObject.LinkDescription}>
                <OpenInNewIcon />
            </IconButton>
            {
                jsonObject.youtubeLink && (
                    <IconButton href={jsonObject.youtubeLink} target="_blank" align='auto'>
                        <YouTubeIcon />
                    </IconButton>
                )
            }
        </CardActions>
    </Card>
  );

  const Carousel = ({children}) => {
    const [active, setActive] = useState(0);
    const count = React.Children.count(children);
    
    return (
      <div className='carousel'>
        {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}><TiChevronLeftOutline/></button>}
        {React.Children.map(children, (child, i) => (
          <div className='card-container' style={{
              '--active': i === active ? 1 : 0,
              '--offset': (active - i) / 3,
              '--direction': Math.sign(active - i),
              '--abs-offset': Math.abs(active - i) / 3,
              'pointerEvents': active === i ? 'auto' : 'none',
              'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
              'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
            }}>
            {child}
          </div>
        ))}
        {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}><TiChevronRightOutline/></button>}
      </div>
    );
  };

export default function FirstPageCarousel(){

    return (
        <Paper sx={{backgroundColor: (theme) => theme.palette.customBackgroundColor.odd, width: "100%", height: "890px",
         alignItems: "center", verticalAlign: "center", textAlign: "center", justifyContent : "center", flexWrap: "wrap", flexGrow: "1"}}>
            <Typography variant= "h1" component="div" sx={{py: 5, fontWeight: "Bold"}}> Welcome to my Portfolio</Typography>
            <Typography variant= "h3"> These are my past works</Typography>
            <Carousel>
                {CarouselItems && CarouselItems.CarouselItems.map((value, i) => (
                    <CardObject key={value.ID} jsonObject={value}/>
                ))}
            </Carousel>
        </Paper>
    )
}