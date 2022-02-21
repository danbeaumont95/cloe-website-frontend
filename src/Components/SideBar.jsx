/* eslint-disable no-unused-vars */
import React from 'react';
import { Drawer, Divider, List, ListItem, ListItemText, IconButton, Button, ListItemIcon } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import HomeIcon from '@material-ui/icons/Home';
import ArticleIcon from '@material-ui/icons/Description';
import PdfIcon from '@material-ui/icons/PictureAsPdfRounded';
import ContactIcon from '@material-ui/icons/ContactMail';
import SchoolIcon from '@material-ui/icons/School';
import AboutIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/styles';

const drawerWidth = 240;

const useStyles = makeStyles(() => ({
  exitButton: {
    hover: 'grey',
    borderRadius: 0,
    height: '8%',
    [ '@media (max-width:600px)' ]: {
      height: '7%'
    },
    backgroundColor: '#F0F0F0',
    '&:hover': {
      background: '#DCDCDC',
    },
  },
}));

const SideBar = (props) => {
  const { handleDrawerClose } = props;
  const classes = useStyles();
  
  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <IconButton onClick={handleDrawerClose} className={classes.exitButton}>
          {<ChevronLeftIcon />}
        </IconButton>
        
        <Divider />
        <List>
   
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText>Tutoring</ListItemText>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <AboutIcon />
            </ListItemIcon>
            <ListItemText>About me</ListItemText>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText>Blog</ListItemText>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <ContactIcon />
            </ListItemIcon>
            <ListItemText>Contact me</ListItemText>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <PdfIcon />
            </ListItemIcon>
            <ListItemText>Papers</ListItemText>
          </ListItem>
           
        </List>
        <Divider />
  
      </Drawer>
    </>
  );
};

export default SideBar;
