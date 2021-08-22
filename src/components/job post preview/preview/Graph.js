import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BarGraph from './BarGraph';
import LineGraph from './LineGraph';
import MultitypeGraph from './MultitypeGraph'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '0 auto',
    maxWidth:1000,
    marginTop: 50,
    
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Graph() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper} Paper elevation={3} >
              <BarGraph />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} Paper elevation={3} >

              <LineGraph />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} Paper elevation={3} >
              <MultitypeGraph />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
export default Graph