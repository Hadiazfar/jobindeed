import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Table from './Table';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth:1000,
    margin: '0 auto',
    backgroundColor:'#174964',
    color: 'white',
  },
});

function Stepper() {
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
        <Tab label="OverVew Score" style={{color: '#00cde9'}}  />
        <Tab label="Skilled Score" style={{color: '#00cde9'}} />
        <Tab label="AI and Learning Score" style={{color: '#00cde9'}} />
      </Tabs>
    </Paper>
    <TabPanel value={value} index={0}>
     <Table section= 'OverView' />
       
    </TabPanel>
    <TabPanel value={value} index={1}>
    <Table section= 'Skilled' />
    </TabPanel>
    <TabPanel value={value} index={2}>
    <Table section= 'AI And Learning' />
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
export default Stepper