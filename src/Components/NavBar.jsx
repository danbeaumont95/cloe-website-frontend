/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { AppBar, Box ,Button, Toolbar, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SideBar from './SideBar';

const useStyles = makeStyles(() => ({
  appBar: {
    backgroundColor: 'white',
    height: '10%'
  },
  drawers: {
    height: '100vh',
    backgroundColor : 'red',
  },
  title: {
    marginLeft: '40%',
    [ '@media (max-width:800px)' ]: {
    },
    [ '@media (max-width:700px)' ]: {
      marginLeft: '34%'
    },
    [ '@media (max-width:568px)' ]: {
      marginLeft: '29%'
    },
    [ '@media (max-width:450px)' ]: {
      marginLeft: '27%'
    },
    [ '@media (max-width:380px)' ]: {
      marginLeft: '25%'
    }
  },
  navButton: {
    textAlign: 'center',
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [sideBarClicked, setSideBarClicked] = useState(false);

  const handleDrawerOpen = () => {
    setSideBarClicked(true);
  };

  const handleDrawerClose = () => {
    setSideBarClicked(false);
  };
  return (
    <>
      {sideBarClicked ? (

        <SideBar handleDrawerClose={handleDrawerClose}/>
      ) : null}
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"

            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.title}>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
              style={{ color: 'black' }}
            >
          Cloe Roper
            </Typography>
          </div>
 
          <Box sx={{ flexGrow: 1 }} />
          {/* <Button className={classes.navButton} >Address</Button> */} {/* Shows when rest of navbar hidden dependant on screen size */}

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button className={classes.navButton} >Tutoring</Button>
            <Button className={classes.navButton} >About me</Button>
            <Button className={classes.navButton} >Blog</Button>
            <Button className={classes.navButton} >Contact Me</Button>
            <Button className={classes.navButton} >Papers</Button>
          </Box>

        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
