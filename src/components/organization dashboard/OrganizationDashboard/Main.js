import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
maxWidth:1100,
    margin: '0 auto',
    marginTop: 110,
    borderRadius:'10px',
    
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#00cde9',
    borderRadius: '20px',

    backgroundColor:'#174964',
  },
  description:{
      color:"white",
      textDecoration: 'none !important', 
  
  },
  Button:{
    backgroundColor:'#00cde9',
    color:'white'
    
  },
}));

function Main() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper} elevation={3}>Web and Mobile application
          <br />
          <span className={classes.description}>Front End Developer</span>
   <br />
          <span className={classes.description}>Posted Date: 20/8/2021</span>

          <br />
          <span className={classes.description}>Add Expired: 20/9/2021</span>
          <br />
          <br />
          <Button  className={classes.Button}>
        OverView
      </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper} elevation={3}>Web and Mobile application
          <br />
          <span className={classes.description}>Front End Developer</span>
        <br />
          <span className={classes.description}>Posted Date: 20/8/2021</span>
          <br />

          <span className={classes.description}>Add Expired: 20/9/2021</span>
          <br />
          <br />
          <Button  className={classes.Button}>
        OverView
      </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper} elevation={3}>Web and Mobile application
          <br />
          <span className={classes.description}>Front End Developer</span>
        <br />
          <span className={classes.description}>Posted Date: 20/8/2021</span>
          <br />

          <span className={classes.description}>Add Expired: 20/9/2021</span>
          <br />
          <br />
          <Button  className={classes.Button}>
        OverView
      </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper} elevation={3}>Web and Mobile application
          <br />
          <span className={classes.description}>Front End Developer</span>
       <br />
          <span className={classes.description}>Posted Date: 20/8/2021</span>

          <br />
          <span className={classes.description}>Add Expired: 20/9/2021</span>
          <br />
          <br />
          <Button  className={classes.Button}>
        OverView
      </Button>
          </Paper>
        </Grid>
        
      </Grid>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
     
    </div>
  );
}
export default Main