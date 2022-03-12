import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  line: {
    display: 'flex',
    flexWrap:'nowrap',
    width: '30%',
    height: 0,
    borderTop: '1px solid grey'
  }
}));

const HorizontalLine = () => {
  const classes = useStyles();

  return (
    <div className={classes.line}></div>
  );
};
export default HorizontalLine;
