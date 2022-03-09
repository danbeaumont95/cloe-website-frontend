/* eslint-disable no-unused-vars */
import { Card, CardContent, Grid, Typography, Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import BlogService from '../Services/blog';
import BlogImage from '../Images/BlogImage.jpeg';
import { makeStyles } from '@material-ui/styles';
import moment from 'moment';

const useStyles = makeStyles(() => ({
  allContent: {
    height: '100%',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
    paddingRight: 20,
    paddingLeft: 20,
  },
  title: {
    paddingTop: 20,
    paddingBlock: 20,
    textDecoration: 'underline',
    [ '@media (max-width:800px)' ]: {
      marginTop: 0,
    },
  },
  card: {
    width: '20%',
    height: '462px',
    border: '2px solid black',
    borderRadius: 10,
    marginRight: '2%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [ '@media (max-width:1100px)' ]: {
      width: '25%',
      marginBottom: 20,
      height: '460px'
    },
    [ '@media (max-width:1000px)' ]: {
      width: '25%',
      marginBottom: 20,
      height: '485px'
    },
    [ '@media (max-width:900px)' ]: {
      width: '30%',
      marginBottom: 20,
      height: '485px'
    },
    [ '@media (max-width:800px)' ]: {
      width: '30%',
      marginBottom: 20,
      height: '532px'
    },
    [ '@media (max-width:700px)' ]: {
      width: '40%',
      marginBottom: 20,
      height: '460px'
    },
    [ '@media (max-width:600px)' ]: {
      width: '40%',
      marginBottom: 20,
      height: '530px'
    },
    [ '@media (max-width:500px)' ]: {
      width: '60%',
      marginBottom: 20,
      height: '435px'
    },
    [ '@media (max-width:400px)' ]: {
      width: '60%',
      marginBottom: 20,
      height: '477px'
    },
  },
  blogImage: {
    width: '100%',
    height: '150px',
    [ '@media (max-width:500px)' ]: {
      width: '100%',
      height: '100px',
    },
  },
  cardContent: {
    padding: 0,
    paddingBottom: 0,
    height: '100%'
  },
  blogTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  date: {
    textAlign: 'center'
  },
  blogBody: {
    marginTop: '2%',
  },
  readMoreButton: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#AFADDE',
    '&:hover': {
      backgroundColor: '#BEE3ED',
    },
  },
  cardActions: {
    border: '2px solid black',
    bottom: 0
  },
}));

const Blogs = () => {
  const classes = useStyles();
  const [blogs, setBlogs] = useState([]);
  const [spacing, setSpacing] = React.useState(2);

  useEffect(() => {
    BlogService.getAllBlogs()
      .then((res) => {
        setBlogs(res.data.data);
      })
      .catch((err) => {
        console.log(err, 'err');
      });
  }, []);

  const formatDate = date => {
    return  moment(date).format('DD-MM-YYYY');
  };

  const cutStringAtThreeHundredChars = (str) => str.substring(0, 300).concat('...');

  return (
    <div className={classes.allContent}>
      <div className={classes.container}>
        <Typography className={classes.title}>Blogs</Typography>
      </div>
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid
            container
            className={classes.demo}
            justify="center"
            spacing={Number(spacing)}
          >
            {blogs.length ? blogs.map((el) => (
              // eslint-disable-next-line react/jsx-key
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <img src={el.image.length ? el.image : BlogImage} alt="blog" className={classes.blogImage}/>
                  <Typography className={classes.blogTitle}>
                    {el.title}
                  </Typography>
                  <Typography className={classes.date}>
                    {formatDate(el.createdAt)}
                  </Typography>
                  <Typography className={classes.blogBody}>
                    {cutStringAtThreeHundredChars(el.body)}
                  </Typography>
                  <Button className={classes.readMoreButton}>Read more!</Button>
                </CardContent>
              </Card>
            )): null}
          </Grid>
        </Grid>
        
      </Grid>

    </div>
  );
};

export default Blogs;
