/* eslint-disable no-unused-vars */
import { Typography, Box, Grid, Paper, Button,   Card,
  CardMedia,
  CardHeader,
  CardContent,
  CardActions, } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import PaperService from '../Services/papers';
import Pdf from '../Images/pdf.png';
import moment from 'moment';

const useStyles = makeStyles(() => ({
  allContent: {
    height: '100%',
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
  },
  title: {
    paddingTop: 20,
    paddingBlock: 20,
    textDecoration: 'underline',
    [ '@media (max-width:800px)' ]: {
      marginTop: 0,
    },
  },
  text: {
    marginTop: -50,
    height: '100%',
    top: 0,
    paddingLeft: '20px',
    textAlign: 'center',
    width: '40%',
    [ '@media (max-width:900px)' ]: {
      width: '50%',
    },
    [ '@media (max-width:800px)' ]: {
      width: '60%',
    },
    [ '@media (max-width:700px)' ]: {
      width: '70%',
    },
    [ '@media (max-width:400px)' ]: {
      width: '100%',
    },
  },
  paperImage: {
    width: '60px',
    textAlign: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginLeft: '51px',
    marginRight: '45px'
  },
  root: {
    flexGrow: 1,
    marginTop: 15
  },
  paper: {
    height: 270,
    width: 150
  },
  control: {
    padding:  2
  },
  cardHeader: {
    textAlign: 'center'
  },
  downloadButton: {
    width: '160px',
    display: 'relative',
    backgroundColor: '#BEE3ED',
    '&:hover': {
      backgroundColor: '#AFADDE',
    },
  },
  card: {
    backgroundColor: '#D7EDFA', 
    border: '2px solid black', 
    minWidth: '160px',
    maxWidth: '160px'
  },
  paperText: {
    textAlign: 'center'
  }
}));

const Papers = () => {
  const classes  = useStyles();
  const [papers, setPapers] = useState([]);
  const [spacing, setSpacing] = React.useState(2);

  useEffect(() => {
    PaperService.getAllPapers()
      .then((res) => {
        if (res.data.data.length) {
          setPapers(res.data.data);
        }
      });
  }, []);

  const formatDate = date => {
    return  moment(date).format('DD-MM-YYYY');
  };

  console.log(papers, 'papers');
  return (
    <div className={classes.allContent}>
      <div className={classes.container}>
        <div className={classes.text}>
          <Typography className={classes.title}>Papers</Typography>
          <Typography className={classes.about} >There was something in the sky. What exactly was up there wasnt immediately clear. But there was definitely something in the sky and it was getting bigger and bigger.
I love the feel of wood curls flying off the lathe as I begin to shape the log in front of me. The sound of scraping changes based on the wetness of the wood, the speed at which the lathe is turning, and the type of cut I am making. The smell and feel of wet wood being turned are unique. The water is sprayed out as I cut through the different layers of wood. A log can turn into anything ones imagination can think of with the right set of hands-on tools</Typography>
        </div>
      </div>
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid
            container
            className={classes.demo}
            justify="center"
            spacing={Number(spacing)}
          >
            {papers.map(el => (
              <Grid key={el._id} item>
                <Card className={classes.card}>
                  <CardHeader title={el.title} subheader={formatDate(el.dateWrote)} className={classes.cardHeader}/>
                  <img src={el.image.length ? el.image : Pdf} className={classes.paperImage} alt="pdf"/>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary" className={classes.paperText}>
                      {el.body}
                    </Typography>
                  </CardContent>
                  <CardActions style={{ padding: 0, border: 0 }}>
                    <a
                      href={el.link}
                      className="btn btn-success"
                    >
                      <Button className={classes.downloadButton} fullWidth>Download</Button>
                    </a>
                  </CardActions>
                </Card>

              </Grid>
            ))}
          </Grid>
        </Grid>
        
      </Grid>

    </div>
  );
};

export default Papers;
