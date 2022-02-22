import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Cloe from '../Images/cloe.jpg';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  allContent: {
    backgroundColor: '#fbe5f4', // old nav bar colour
    height: '100%'
  },
  title: {
    paddingTop: 20,
    paddingBlock: 20,
    textDecoration: 'underline',
    [ '@media (max-width:800px)' ]: {
      marginTop: 50,
    },
  },
  container: {
    marginTop: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
    paddingRight: 20,
    paddingLeft: 20,
    [ '@media (max-width:400px)' ]: {
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-block',
      marginLeft: 0,
      marginRight: 0,
      paddingRight: 0,
      paddingLeft: 0,
    },
    [ '@media (max-width:600px)' ]: {
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-block',

    },
    [ '@media (max-width:700px)' ]: {
      alignItems: 'start'
    },
    [ '@media (max-width:800px)' ]: {
      alignItems: 'start'
    },
    [ '@media (max-width:900px)' ]: {
      alignItems: 'start'
    },
    [ '@media (max-width:1000px)' ]: {
      alignItems: 'start'
    },
  },
  imageSection: {
    flexBasis: '40%',
    maxWidth: '400px',
    [ '@media (max-width:600px)' ]: {
      maxWidth: '600px'
    },
    [ '@media (max-width:700px)' ]: {

    },
  },
  image: {
    [ '@media (max-width:400px)' ]: {
      width: '200px',
      height: '300px'
    },
    [ '@media (max-width:600px)' ]: {
      width: '300px',
      height: '400px',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    [ '@media (max-width:700px)' ]: {
      width: '250px',
      height: '400px',
    },
    [ '@media (max-width:800px)' ]: {
      width: '250px',
      height: '300px',
    },
    [ '@media (max-width:900px)' ]: {
      width: '300px',
      height: '400px',
    },
  },
  text: {
    marginTop: -50,
    height: '100%',
    top: 0,
    paddingLeft: '20px',
    textAlign: 'center',
    maxWidth: '40%',
    [ '@media (max-width:400px)' ]: {
      marginTop: 0,
      paddingLeft: 0,
      display: 'inline-block',
      maxWidth: '70%',
      height: '100%'
    },
    [ '@media (max-width:600px)' ]: {
      marginTop: 0,
      paddingLeft: 0,
      display: 'inline-block',
      maxWidth: '70%',
      height: '100%'
    },
    [ '@media (max-width:700px)' ]: {
      marginTop: -30,
      height: '100%',
      maxWidth: '80%'
    },
    [ '@media (max-width:800px)' ]: {
      marginTop: -30,
      height: '100%',
      maxWidth: '80%'
    },
    [ '@media (max-width:1000px)' ]: {
      marginTop: -30,
      height: '100%',
      maxWidth: '80%'
    },
    [ '@media (max-width:1100px)' ]: {
      marginTop: -60,
      height: '100%',
      maxWidth: '80%'
    },
  }
}));

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.allContent}>
      <div className={classes.container}>
        <div className={classes.imageSection}>


          <img src={Cloe} alt="nothing" height="600px" width="400px" className={classes.image}/>
        </div>
        <div className={classes.text}>
          <Typography variant='h5' className={classes.title}>About me</Typography>
          <Typography>There was something in the sky. What exactly was up there wasnt immediately clear. But there was definitely something in the sky and it was getting bigger and bigger.
I love the feel of wood curls flying off the lathe as I begin to shape the log in front of me. The sound of scraping changes based on the wetness of the wood, the speed at which the lathe is turning, and the type of cut I am making. <br /> <br /> The smell and feel of wet wood being turned are unique. The water is sprayed out as I cut through the different layers of wood. A log can turn into anything ones imagination can think of with the right set of hands-on tools. I have those hands and imagination. I use all of my senses and intuition to create a beautiful object. That is why I enjoy turning wood.
Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets.<br /> <br /> Dave went through his mental list of the most important papers and documents that they couldnt leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. 

          </Typography>
        </div>
      </div>
    
    </div>
  );
};

export default About;
