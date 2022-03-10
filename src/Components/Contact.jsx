/* eslint-disable no-unused-vars */
import { Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { useForm } from 'react-hook-form';
import ContactService from '../Services/contact';
import Swal from 'sweetalert2';

const useStyles = makeStyles(() => ({
  allContent: {
    height: '100%'
  },
  title: {
    textAlign: 'center',
    paddingTop: 20,
    paddingBlock: 20,
    textDecoration: 'underline',
    [ '@media (max-width:800px)' ]: {
      marginTop: 0,
    },
  }
}));

const Contact = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const classes = useStyles();

  const onSubmit = data => {
    const { subject, body, userEmail } = data;
    ContactService.sendEmail(subject, body, userEmail)
      .then((res) => {
        if (res.data.message === '[Success] Email sent!') {
          return Swal.fire({
            title: 'Email sent!'
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
      <Typography className={classes.title}>Contact me!</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>

        <input placeholder='subject' {...register('subject', { required: true })} />

        <input placeholder='body of email' {...register('body', { required: true })} />
        <input placeholder='your email' {...register('userEmail', { required: true })} />

        {errors.subject && <span>Subject is required</span>}
        {errors.body && <span>Body is required</span>}
        {errors.userEmail && <span>Your email is required</span>}
      
        <input type="submit" />
      </form>
    </div>
  );
};

export default Contact;
