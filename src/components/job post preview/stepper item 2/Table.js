import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import './table.css'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      
    },
  },
}));


function Table(props) {
  const classes = useStyles();
  return (
      
    <div className={classes.root}> 
        <div className="stap">
        <div className="wholebody">
      <div className="header_fixed">
  <table>
    <thead>
      <tr>
        <th>S.no</th>
        <th>Profile</th>
        <th>Name</th>
        <th>Email</th>
        <th>{props.section}</th>
        <th>Preview CV</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>
        <Avatar alt="Remy Sharp" src="images/1.jpeg" />
        </td>
        <td>Syed Hadi</td>
        <td>hadiazfar20@gmail.com</td>
        <td>50</td>
        <td>
          <button>Preview</button>
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>
        <Avatar alt="Remy Sharp" src="images/2.jpeg" />
        </td>
        <td>Syed Zaky</td>
        <td>Zakk.y@gmail.com</td>
        <td>80</td>
        <td>
          <button>Preview</button>
        </td>
      </tr>
      <tr>
        <td>3</td>
        <td>
        <Avatar alt="Remy Sharp" src="images/3.jpeg" />
        </td>
        <td>Hamza Uddin</td>
        <td>Hamzauddin.com</td>
        <td>100</td>
        <td>
          <button>Preview</button>
        </td>
      </tr>
     
    </tbody>
  </table>
</div>
</div>
</div>
</div>
  );
}

export default Table 
