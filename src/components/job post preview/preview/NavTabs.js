import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Graph from '../preview/Graph'
import Stepper from '../stepper item 2/Stepper'
import Table from '../stepper item 2/Table';
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth:1000,
    margin: '0 auto',
    backgroundColor:'#174964',
    color: 'white',
  },
});

function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue)
    setValue(newValue);
  };

  return (
    <div>
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        console.log(value)
        <Tab label="Applied" style={{color: '#00cde9'}} />
        <Tab label="Score" style={{color: '#00cde9'}} />
        <Tab label="Top Rated" style={{color: '#00cde9'}}  />
        <Tab label="Job Description" style={{color: '#00cde9'}}  />
      </Tabs>
    </Paper>
    <TabPanel value={value} index={0}>
      <Graph />
    </TabPanel>
    <TabPanel value={value} index={1}>
      <br />
      <Stepper />
    </TabPanel>
    <TabPanel value={value} index={2}>
      <Table section ='TopRated'/>
    </TabPanel>
    
    </div>
  );
}
function TabPanel(props){
  const {children, value,index}=props
  return(
    <div>
      {
        value == index && (
         [children]
        )
      }
    </div>
  )
}
export default NavTabs




