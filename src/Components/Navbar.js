import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  ToolbarDesign: {
    display:"flex", justifyContent: "space-between"
  },
  divstyle:{
    display: "flex"
  },

});
const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position='static'>
        <Toolbar className={classes.ToolbarDesign}>
          <ArrowBackIcon
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </ArrowBackIcon>
          <div className={classes.divstyle}>
          <Typography variant='h6' component='div' style={{marginRight: "15px"}}>
            RESANA
          </Typography>   
          <Typography variant='h6' component='div'>
            SPARA
          </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
