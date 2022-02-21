import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Box, Avatar } from '@material-ui/core';

import Facebook from '../Images/Facebook.svg';
import Twitter from '../Images/Twitter.svg';
import LinkedIn from '../Images/Linkedin.svg';


const useStyles = makeStyles((theme) => ({
  allContent: {
    maxWidth: '100%',
    width: '100%',
    backgroundColor: '#F0F0F0',
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position:'fixed',
    left:0,
  },
  title: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  box: {
    width: '90%',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icons: {
    marginTop: theme.spacing(2),
    width: '60%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  avatar: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(2)
  }
}));
const Footer = () => {
  const classes = useStyles();

  return (
    <Container className={classes.allContent}>
      <Box className={classes.box}>

        <Typography variant='h5' className={classes.title}>Follow me!</Typography>

 
        <div className={classes.icons}>
          <a href="https://www.linkedin.com/in/chloe-roper/" target="_blank" rel="noopener noreferrer">

            <Avatar alt="Remy Sharp" src={LinkedIn} className={classes.avatar} />

          </a>
  
          <a href="https://twitter.com/Cloeblencoe" target="_blank" rel="noopener noreferrer">

            <Avatar alt="Cindy Baker" src={Twitter} className={classes.avatar} />
          </a>

          <a href="https://www.facebook.com/cloe.roperblencoe/" target="_blank" rel="noopener noreferrer">

            <Avatar alt="Travis Howard" src={Facebook} className={classes.avatar} />
          </a>

        </div>
      </Box>
    </Container >
  );
};

export default Footer;
