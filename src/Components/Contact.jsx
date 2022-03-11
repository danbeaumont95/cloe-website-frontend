/* eslint-disable no-unused-vars */
import { Box, TextField, Typography, Button } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { useForm } from 'react-hook-form';
import ContactService from '../Services/contact';
import Swal from 'sweetalert2';

const useStyles = makeStyles(() => ({
  allContent: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    paddingTop: 20,
    paddingBlock: 20,
    textDecoration: 'underline',
    [ '@media (max-width:800px)' ]: {
      marginTop: 0,
    },
  },
  box: {
    // backgroundColor: '#dbafcd',
    backgroundColor: '#e6d1df',
    padding: '20px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
  },
  formBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

  },
  inputField: {
    backgroundColor: 'white',
    width: '60%',
    marginTop: '10px'
  },
  bodyInputField: {
    backgroundColor: 'white',
    width: '60%',
    marginTop: '10px'
  },
  button: {
    backgroundColor: '#D7EDFA',
    width: '30%',
    marginTop: '10px',
    height: '50px',
    '&:hover': {
      backgroundColor: '#BEE3ED',
    },
  }
}));

const Contact = () => {
  const [details, setDetails] = useState({});
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const classes = useStyles();

  const handleChangeDetails = (event) => {
    setDetails({
      ...details,
      [event.target.name]: event.target.value
    });
  };

  const onSubmit = data => {
    const { subject, body, userEmail } = data;
    ContactService.sendEmail(subject, body, userEmail)
      .then((res) => {
        if (res.data.message === '[Success] Email sent!') {
          return Swal.fire({
            title: 'Message sent!'
          })
            .then(() => {
              window.location.href = '/contact';
            });
        }
        else {
          return Swal.fire({
            title: 'Email failed to send, please try again!'
          });
        }
      });
  };

  return (
    <div className={classes.allContent}>
      <Typography className={classes.title} variant="h2">Contact me!</Typography>

      <Box className={classes.box}>
        <Typography variant="h6">Please fill in the form below and send me a message, I will try to get back to you within 24 hours</Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} className={classes.formBox}>

          <TextField
            {...register('userEmail')}
            onChange={handleChangeDetails}
            placeholder="Your Email"
            className={classes.inputField}
            inputProps={{
              style: { textAlign: 'center' },
              className: classes.color,
            }}
            variant="outlined"
          />

          <TextField
            {...register('subject')}
            onChange={handleChangeDetails}
            placeholder="Subject"
            className={classes.inputField}
            inputProps={{
              style: { textAlign: 'center' },
              className: classes.color,
            }}
            variant="outlined"
          />

          <TextField
            {...register('body')}
            onChange={handleChangeDetails}
            placeholder="Body"
            className={classes.bodyInputField}
            inputProps={{
              style: {  height: '200px' },
              className: classes.color,
            }}
            variant="outlined"
            multiline
          />

          <Button
            type="submit"
            onClick={() => {
              setDetails(details);
            }}
            className={classes.button}
          >
          Send message!
          </Button>

        </Box>
      </Box>
    </div>
  );
};

export default Contact;
