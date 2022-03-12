/* eslint-disable react/no-unescaped-entities */
import { Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import HorizontalLine from './Custom/HorizontalLine';

const useStyles = makeStyles(() => ({
  allContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    flexDirection: 'column'
  },
  title: {
    marginTop: '20px',
    marginBottom: '20px',
  },
  paragraph: {
    maxWidth: '40%',
    marginTop: '20px',
    textAlign: 'center',
    marginBottom: '10px',
    [ '@media (max-width:1000px)' ]: {
      maxWidth: '50%',
    },
    [ '@media (max-width:500px)' ]: {
      maxWidth: '80%',
    },
  }
}));
const Tutoring  = () => {
  const classes = useStyles();
  return (
    <div className={classes.allContent}>

      <Typography variant='h5' className={classes.title}>Tutoring</Typography>
      <HorizontalLine />
      <Typography className={classes.paragraph}>As she sat watching the world go by, something caught her eye. It wasn't so much its color or shape, but the way it was moving. She squinted to see if she could better understand what it was and where it was going, but it didn't help. As she continued to stare into the distance, she didn't understand why this uneasiness was building inside her body. She felt like she should get up and run. If only she could make out what it was. At that moment, she comprehended what it was and where it was heading, and she knew her life would never be the same.</Typography>
      <Typography variant='h5' className={classes.title}>My Ethos</Typography>
      <HorizontalLine />
      <Typography className={classes.paragraph}>She reached her goal, exhausted. Even more chilling to her was that the euphoria that she thought she'd feel upon reaching it wasn't there. Something wasn't right. Was this the only feeling she'd have for over five years of hard work?</Typography>
      <Typography variant='h5' className={classes.title}>My Qualifications</Typography>
      <HorizontalLine />
      <Typography className={classes.paragraph}>She reached her goal, exhausted. Even more chilling to her was that the euphoria that she thought she'd feel upon reaching it wasn't there. Something wasn't right. Was this the only feeling she'd have for over five years of hard work?</Typography>

    </div>
  );
};

export default Tutoring;
