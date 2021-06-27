import "../../../../../node_modules//bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./Guide.css"
import SidePanel from "../Sidepanel/SidePanel";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Link } from "react-router-dom";

function Main (){
    return (
        <div className="Guide">
  <div className="container-fluid b" style={{backgroundColor: '#f1f2f4', zIndex: 5}}>
    <div className="container " style={{zIndex: 6}}>
      <div className="row">
        <div className="col-3 offset-1 pt-4 " style={{}}>
        <SidePanel 
      CheckCircleOutlineIcon = {<CheckCircleIcon  style={{fontSize: 20, color: '#174964'}} />}
      CategoryIcon = {<CheckCircleOutlineIcon style={{fontSize: 20, color: 'gray'}}    />}
      AccessibleIcon = {<CheckCircleOutlineIcon style={{fontSize: 20, color: 'gray'}}  />}
      TimelineIcon = {<CheckCircleOutlineIcon style={{fontSize: 20, color: 'gray'}}  />}
      SchoolIcon = {<CheckCircleOutlineIcon style={{fontSize: 20, color: 'gray'}}  />}
      ApartmentIcon = {<CheckCircleOutlineIcon style={{fontSize: 20, color: 'gray'}}  />}
      LanguageIcon = {<CheckCircleOutlineIcon style={{fontSize: 20, color: 'gray'}}  />}
      TimerIcon = {<CheckCircleOutlineIcon style={{fontSize: 20, color: 'gray'}}  />}
      PersonIcon = {<CheckCircleOutlineIcon style={{fontSize: 20, color: 'gray'}}  />}
      PhotoCameraIcon = {<CheckCircleOutlineIcon style={{fontSize: 20, color: 'gray'}}  />}
      LocationOnIcon = {<CheckCircleOutlineIcon style={{fontSize: 20, color: 'gray'}}  />}
      PhoneIcon = {<CheckCircleOutlineIcon style={{fontSize: 20, color: 'gray'}}  />  }
      /> 
      </div> 
      
        <div className="col-8 pt-4 ">
          <div className="container  " style={{width: '100%', backgroundColor: 'white', zIndex: 7, boxShadow: '0 0 6px 0 rgba(0,0,0,.12), 0 6px 6px 0 rgba(0,0,0,.24)'}}>
            <div className="row " style={{borderBottom: '2px solid rgb(165, 165, 165)'}}>
              <div className="col pt-4 pl-4 pr-4 pb-4">
                <a style={{fontSize: 24, fontWeight: 600}}>Fill out your profile to apply </a> 
              </div>
            </div>
            <br />
            <a style={{fontSize: 18, fontWeight: 500}}>To provide a high quality experience to all customers, admission to Upwork is highly competitive.</a> <br />
            <div className="row" style={{}}>
              <div className="col pt-4 pb-2">
                <p style={{fontSize: 18, fontWeight: 400}}>Here’s how it works:</p>
                <p style={{fontSize: 18, fontWeight: 400}}>1. Fill out your profile thoroughly and accurately</p>
                <p style={{fontSize: 18, fontWeight: 400}}>2. Submit your profile</p>
                <p style={{fontSize: 18, fontWeight: 400}}>3. You’ll receive an email within 24 hours to let you know if you were accepted</p>
                <p style={{fontSize: 18, fontWeight: 400}}>We are currently experiencing a high number of applications. Create a stand-out profile to increase your chances of getting approved!</p>
              </div>
            </div>
            <br />
            <br />
            <div className="row">
              <div className="col-5 offset-7 pt-0 pl-4 pr-4 pb-3">
                
              <Link to = '/Category'> <button className="p-2 but" style={{outline: 'none', width: '90%', borderRadius: 20}}>Continue</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <br/>
      <br/>
      <br/>
    </div>
  </div>

 
    );
}
export default Main