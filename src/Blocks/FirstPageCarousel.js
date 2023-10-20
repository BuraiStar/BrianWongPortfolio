import Paper from "@mui/material/Paper/Paper"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardActions from "@mui/material/CardActions"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography";
import React, {useState, useEffect} from "react"
import "../static/css/card.scss"
import CarouselItems from "../Scripts/Json/CarouselItems.json"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {TiChevronLeftOutline, TiChevronRightOutline} from "react-icons/ti"

const MAX_VISIBILITY = 3;
const PORTRAIT_MAX_VISIBILITY = 2;
const OFFSET = 3;
const PORTRAIT_OFFSET = 5;

const CardObject = ({jsonObject}) => (
    <Card variant="outlined" sx={{ maxHeight: 550, padding: "1rem", borderColor: (theme) => theme.palette.divider, borderRadius: "1rem", transition : " all 0.3s ease-out", backgroundColor: (theme) => theme.palette.customCarouselColor.primary}}>
        <CardMedia
            component="img"
            width = "100%"
            image={jsonObject.imageLink}/>
        <Typography  align="left" variant= "h3" sx={{py:2, px: 0.5}}>{jsonObject.Title}</Typography>
        <Typography  align="left" variant= "body" overflow={"hidden"} textOverflow={'ellipsis'} sx={{py:2}}>{jsonObject.ShortDescription}</Typography>
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

  const Carousel = ({children, isWidthBigger}) => {
    const [active, setActive] = useState(0);
    const count = React.Children.count(children);
    return (
      <div className='carousel'>
        {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}><TiChevronLeftOutline/></button>}
        {React.Children.map(children, (child, i) => (
          <div className='card-container' style={{
              '--active': i === active ? 1 : 0,
              '--offset': isWidthBigger.isWidthBigger ? (active - i) / OFFSET : (active - i) / PORTRAIT_OFFSET,
              '--direction': Math.sign(active - i),
              '--abs-offset': isWidthBigger.isWidthBigger ? Math.abs(active - i) / OFFSET : Math.abs(active - i) / PORTRAIT_OFFSET,
              'pointerEvents': active === i ? 'auto' : 'none',
              'opacity': Math.abs(active - i) >= 3 ? '0' : '1',
              'display': Math.abs(active - i) > 3 ? 'none' : 'block',
            }}>
            {child}
          </div>
        ))}
        {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}><TiChevronRightOutline/></button>}
      </div>
    );
  };

export default function FirstPageCarousel(windowSize){
    console.log(windowSize)
    return (
        <Paper sx={{backgroundColor: (theme) => theme.palette.customBackgroundColor.odd, height: windowSize.windowSize ? "890px" : "750px",
         alignItems: "center", verticalAlign: "center", textAlign: "center", justifyContent : "center"}}>
            <Typography variant= "h1" component="div" sx={{py: 5, fontWeight: "Bold"}}> Welcome to my Portfolio</Typography>
            <Typography variant= "h3"> These are my past works</Typography>
            <Carousel isWidthBigger={windowSize.windowSize} >
                {CarouselItems && CarouselItems.CarouselItems.map((value, i) => (
                    <CardObject key={value.ID} jsonObject={value}/>
                ))}
            </Carousel>
        </Paper>
    )
}