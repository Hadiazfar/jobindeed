import "../../../../../node_modules//bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./GetStarted.css"
import SidePanel from "../Sidepanel/SidePanel";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Link } from "react-router-dom";
function Main(){
    return(
<div className="GetStarted">
  <div className="container-fluid b" style={{backgroundColor: 'rgb(243, 247, 247)', zIndex: 5}}>
    <div className="container " style={{zIndex: 6}}>
      <div className="row">
        <div className="col-3 offset-1 pt-4 " >
          
         <SidePanel 
      
        
         CheckCircleOutlineIcon = {<CheckCircleIcon style={{fontSize: 20, color: '#174964'}}  />}
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
         PhoneIcon = {<CheckCircleOutlineIcon style={{fontSize: 20, color: 'gray'}}  />}
        
        
        
        
         
         /> 
          
        </div> 
        <div className="col-8 pt-4">
          <img src="images/main.PNG" style={{width: '100%'}} alt />
          <div className="container " style={{width: '100%', backgroundColor: 'white', zIndex: 7, boxShadow: '0 0 6px 0 rgba(0,0,0,.12), 0 6px 6px 0 rgba(0,0,0,.24)'}}>
           
              <div className="col ">
              </div>
           
            <br />
            <a style={{fontSize: 22, fontWeight: 700}}>Welcome &nbsp;&nbsp; <i className="far fa-handshake" style={{color: '#0d6efd', fontSize: 22}} /></a>
            <div className="row" style={{marginLeft: 5}}>
              <div className="col pt-4 pl-4 pr-4 ">
                <a style={{fontSize: 18, fontWeight: 500}}>Hi</a> <a style={{fontSize: 20, fontWeight: 600}}> MUhammad Bilal Alam,</a>
                <p style={{fontSize: 16, fontWeight: 400}}>Thanks for your interest in Job indeed,we connect organizations with independents like you</p>
                <p style={{fontSize: 16, fontWeight: 400}}>To get started, all you need to do is fill out a profile</p>
              </div>
            </div>
            <div className="row" style={{borderTop: '3px solid rgb(165, 165, 165)'}}>
              <div className="col pt-4 pl-4 pr-4 pb-4">
                <Link to = '/Guide'> < button className="p-2 but" style={{outline: 'none', borderRadius: 20}}>Continue</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   <br />
   <br />
   <br />

  </div>
</div>
     


    );
}
export default Main;
