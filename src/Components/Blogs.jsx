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
    [ '@media (max-width:1000px)' ]: {
      width: '25%'
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  blogImage: {
    width: '100%',
    height: '150px'
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
  }
}));

const Blogs = () => {
  const classes = useStyles();
  const [blogs, setBlogs] = useState([]);
  const [spacing, setSpacing] = React.useState(2);

  useEffect(() => {
    BlogService.getAllBlogs()
      .then((res) => {
        console.log(res, 'RES');
        setBlogs(res.data.data);
      })
      .catch((err) => {
        console.log(err, 'err');
      });
  }, []);
  console.log(blogs, 'blogs');

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
