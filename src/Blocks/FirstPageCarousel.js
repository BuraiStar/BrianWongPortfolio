import Paper from "@mui/material/Paper/Paper"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardActions from "@mui/material/CardActions"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography";
import React, {useState} from "react"
import "../static/css/card.scss"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {TiChevronLeftOutline, TiChevronRightOutline} from "react-icons/ti"
import  CircularProgress  from "@mui/material/CircularProgress"
import  Fade  from "@mui/material/Fade"

const MAX_VISIBILITY = 3;
const PORTRAIT_MAX_VISIBILITY = 2;
const OFFSET = 3;
const PORTRAIT_OFFSET = 5;
const CardObject = ({jsonObject}) => {
    const [hasImageLoaded, setHasImageLoaded] = useState(false);
    return (
        <Card variant="outlined" sx={{ maxHeight: 650, padding: "1rem", borderColor: (theme) => theme.palette.divider, borderRadius: "1rem", transition : " all 0.3s ease-out", backgroundColor: (theme) => theme.palette.customCarouselColor.primary}}>
            {
                !hasImageLoaded && <CircularProgress/>
            }
            <Fade in={hasImageLoaded} timeout={1000}><CardMedia
                component="img"
                image={jsonObject.image}
                onLoad={() => setHasImageLoaded(true)}/>
            </Fade>
            
            <Typography align="left" variant= "h3" overflow={"hidden"} textOverflow={'ellipsis'}  sx={{py:2, px: 0.5, maxHeight: 150}}>{jsonObject.title}</Typography>
            <Typography align="left" variant= "body" overflow={"hidden"} textOverflow={'ellipsis'} sx={{py:2 , maxHeight: 100}}>{jsonObject.shortDescription}</Typography>
            <CardActions disableSpacing>
                <IconButton aria-label={jsonObject.linkDescription} href={jsonObject.link} target="_blank" title={jsonObject.linkDescription}>
                    <OpenInNewIcon />
                </IconButton>
                {
                    jsonObject.videoLink && (
                        <IconButton href={jsonObject.videoLink} target="_blank" align='auto'>
                            <YouTubeIcon />
                        </IconButton>
                    )
                }
            </CardActions>
        </Card>
    )
  };

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

export default function FirstPageCarousel({windowSize, carouselPosts}){
    return (
        <Paper sx={{backgroundColor: (theme) => theme.palette.customBackgroundColor.odd, height: windowSize ? "890px" : "880px",
         alignItems: "center", verticalAlign: "center", textAlign: "center", justifyContent : "center"}}>
            <Typography variant= "h1" component="div" sx={{py: 5, fontWeight: "Bold"}}> Welcome to my Portfolio</Typography>
            <Typography variant= "h3"> These are my past works</Typography>
            <Carousel isWidthBigger={windowSize} >
                {carouselPosts && carouselPosts.map((value, i) => (
                    <CardObject key={value.title} jsonObject={value}/>
                ))}
            </Carousel>
        </Paper>
    )
}