import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Brian Wong Wei Wen
          </Typography>
          <Button color="inherit" size="large" href="https://wa.me/60173066026">
            <WhatsAppIcon fontSize="large" />
          </Button>
          <Button
            color="inherit"
            href="https://www.linkedin.com/in/brian-wong-b20137168/"
            target="_blank"
          >
            <LinkedInIcon fontSize="large" />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
