import React from "react";
import { FaReact } from "react-icons/fa";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import './Navbarcss/Navbar.css'

const Navbar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
            <FaReact  className="react__icon"/>
          </IconButton>
     
          <Typography variant="h6">
            <em>Covid-Tracker-2021</em>
          </Typography>
         
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
