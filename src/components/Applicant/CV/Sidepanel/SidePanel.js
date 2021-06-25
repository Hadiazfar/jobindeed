import "../../../../../node_modules//bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import CategoryIcon from '@material-ui/icons/Category';
import AccessibleIcon from '@material-ui/icons/Accessible';
import TimelineIcon from '@material-ui/icons/Timeline';
import SchoolIcon from '@material-ui/icons/School';
import ApartmentIcon from '@material-ui/icons/Apartment';
import LanguageIcon from '@material-ui/icons/Language';
import TimerIcon from '@material-ui/icons/Timer';
import PersonIcon from '@material-ui/icons/Person';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';


function SidePanel(props){
    return(
<div>
 
<div className="row">
    <div className="col-2"><HourglassEmptyIcon style={{fontSize: 25, padding: 2, color: 'gray'}} /></div>
    <div className="col-7"><a style={{fontSize: 13, fontWeight: 700, color: 'gray'}}>Get Started</a> </div>
    <div className="col-2"  >{props.CheckCircleOutlineIcon}</div>
  </div>
 <br /> 
  <div className="row">
    <div className="col-2"><CategoryIcon style={{fontSize: 25, padding: 2, color: 'gray'}} /></div>
    <div className="col-7"><a style={{fontSize: 13, fontWeight: 700, color: 'gray'}}>Categories</a> </div>
    <div className="col-2">{props.CategoryIcon}</div>
  </div>
 <br />
  <div className="row">
    <div className="col-2"><AccessibleIcon style={{fontSize: 22, padding: 2, color: 'gray'}} /></div>
    <div className="col-7"><a style={{fontSize: 13, fontWeight: 700, color: 'gray'}}>Experties</a> </div>
    <div className="col-2">{props.AccessibleIcon}</div>
  </div>
 <br />
  <div className="row">
    <div className="col-2"><TimelineIcon style={{fontSize: 22, padding: 2, color: 'gray'}} /></div>
    <div className="col-7"><a style={{fontSize: 13, fontWeight: 700, color: 'gray'}}>Experties Level</a> </div>
    <div className="col-2">{props.TimelineIcon}</div>
  </div>
 <br />
  <div className="row">
    <div className="col-2"><SchoolIcon style={{fontSize: 22, padding: 2, color: 'gray'}} /></div>
    <div className="col-7"><a style={{fontSize: 13, fontWeight: 700, color: 'gray'}}>Education</a> </div>
    <div className="col-2">{props.SchoolIcon}</div>
  </div>
 <br />
  <div className="row">
    <div className="col-2"><ApartmentIcon style={{fontSize: 22, padding: 2, color: 'gray'}} /></div>
    <div className="col-7"><a style={{fontSize: 13, fontWeight: 700, color: 'gray'}}>Employement</a> </div>
    <div className="col-2">{props.ApartmentIcon}</div>
  </div>
 <br />
  <div className="row">
    <div className="col-2"><LanguageIcon style={{fontSize: 22, padding: 2, color: 'gray'}} /></div>
    <div className="col-7"><a style={{fontSize: 13, fontWeight: 700, color: 'gray'}}>Languages</a> </div>
    <div className="col-2">{props.LanguageIcon}</div>
  </div>
 <br />
  <div className="row">
    <div className="col-2"><TimerIcon style={{fontSize: 22, padding: 2, color: 'gray'}} /></div>
    <div className="col-7"><a style={{fontSize: 13, fontWeight: 700, color: 'gray'}}>Hourly Rate</a> </div>
    <div className="col-2">{props.TimerIcon} </div>
  </div>
 <br />
  <div className="row">
    <div className="col-2"><PersonIcon style={{fontSize: 22, padding: 2, color: 'gray'}} /></div>
    <div className="col-7"><a style={{fontSize: 13, fontWeight: 700, color: 'gray'}}>Title &amp; Overview</a> </div>
    <div className="col-2">{props.PersonIcon}</div>
  </div>
 <br />
  <div className="row">
    <div className="col-2"><PhotoCameraIcon style={{fontSize: 22, padding: 2, color: 'gray'}} /></div>
    <div className="col-7"><a style={{fontSize: 13, fontWeight: 700, color: 'gray'}}>Profile Photo</a> </div>
    <div className="col-2">{props.PhotoCameraIcon}</div>
  </div>
 <br />
  <div className="row">
    <div className="col-2"><LocationOnIcon style={{fontSize: 22, padding: 2, color: 'gray'}} /></div>
    <div className="col-7"><a style={{fontSize: 13, fontWeight: 700, color: 'gray'}}>Location</a> </div>
    <div className="col-2">{props.LocationOnIcon}</div>
  </div>
 <br />
  <div className="row">
    <div className="col-2"><PhoneIcon style={{fontSize: 22, color: 'gray', padding: 2}} /></div>
    <div className="col-7"><a style={{fontSize: 13, fontWeight: 700, color: 'gray'}}>Phone</a> </div>
    <div className="col-2">{props.PhoneIcon}</div>
  </div>
 
</div>
    );

}
export default SidePanel