import "../../../../../node_modules//bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./ExpertiseLevel.css"
import SidePanel from "../Sidepanel/SidePanel";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Link } from "react-router-dom";
function Main(){
    return(
        <div className = "Expertiselevel">
<div className="container-fluid b" style={{backgroundColor: 'rgb(243, 247, 247)', zIndex: 5}}>
  <div className="container pt-2" style={{zIndex: 6}}>
    <div className="row"><div className="col-3 offset-1 ">
        <br />
        <SidePanel 
        CheckCircleOutlineIcon = {<CheckCircleIcon style={{fontSize: 20, color: '#174964'}}  />}
        CategoryIcon = {<CheckCircleIcon style={{fontSize: 20, color: '#174964'}}    />}
        AccessibleIcon = {<CheckCircleIcon style={{fontSize: 20, color: '#174964'}} />}
        TimelineIcon = {<CheckCircleIcon style={{fontSize: 20, color: '#174964'}} />}
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
      
      <div className="col-8   pt-4 ">
    <div className="container " style={{width: '100%', backgroundColor: 'white', zIndex: 7, boxShadow: '0 0 6px 0 rgba(0,0,0,.12), 0 6px 6px 0 rgba(0,0,0,.24)'}}>
      <div className="row" style={{borderBottom: '2px solid rgb(165, 165, 165)'}}>
        <div className="col pt-4 pl-4 pr-4 pb-2">
          <a style={{fontSize: 22, fontWeight: 600}}>Expertise Level</a> 
          <br />
          <p style={{fontSize: 14, fontWeight: 400}}>Step 4 of 12</p>
        </div>
      </div>
      <br />
      <div className="row" style={{}}>
        <div className="col pt-2 pl-4 pr-4 pb-2">
          <a style={{fontSize: 20, fontWeight: 600}}>What is your level of experience in this field?</a>
        </div>
      </div>
      <div className="row before" style={{marginLeft: 5}}>
        <div className="col pt-2 pl-4 pr-4 pb-2">
          <br /><br />
          <button style={{height: 130}} className="p-3 bt3"><a style={{fontSize: 17, fontWeight: 700}}>Entry Level </a> <br /> <a style={{fontSize: 10}}> I am relatively new to this </a>  <br /><a style={{fontSize: 10}}>field</a> </button>&nbsp;&nbsp;
          <button style={{height: 130}} className="p-2 bt3"><a style={{fontSize: 17, fontWeight: 700}}>Intermediate</a><br /><a style={{fontSize: 10}}>I have substantial </a> <br /><a style={{fontSize: 10}}> experience in this field</a></button>&nbsp;&nbsp;
          <button style={{height: 130}} className="p-2 bt3"><a style={{fontSize: 17, fontWeight: 700}}>Expert </a><br /><a style={{fontSize: 10}}>I have full </a> <br /><a style={{fontSize: 10}}>  expertise in this </a></button>
          <br /><br />
        </div>
      </div>  
      <div className="row after" style={{}}>
        <div className="col pt-2 pl-4 pr-4 pb-2">
          <br /><br />
          <button style={{width: '100%'}} className="p-4 bt3"><a style={{fontSize: 20, fontWeight: 700}}>Entry Level</a><br /><br /> <a style={{fontSize: 14}}> I am relatively new to this  feild</a></button><br /><br />
          <button style={{width: '100%'}} className="p-4 bt3"><a style={{fontSize: 20, fontWeight: 700}}>Intermediate</a><br /><br /> <a style={{fontSize: 14}}> I have substantial experience in this feild</a></button><br /><br />
          <button style={{width: '100%'}} className="p-4 bt3"><a style={{fontSize: 20, fontWeight: 700}}>Expert </a><br /><br /> <a style={{fontSize: 14}}> I have full experties in this feild</a></button><br />
          <br /><br />
          <br /><br />
        </div>
      </div> 
          <br />
      <div className="row pt-4 pb-4" style={{borderTop: '3px solid rgb(165, 165, 165)'}}>
        <div className="col-5  pl-4 pr-4 pb-3">
          <button className="p-2 but" style={{outline: 'none', width: '90%', borderRadius: 20}}>Back</button>
        </div>
        <div className="col-5 offset-2 pt-0 pl-4 pr-4 pb-3">
          <button className="p-2 but" style={{outline: 'none', width: '90%', borderRadius: 20}}>Next</button>
          <br />
          <br />
        </div>
      </div>
    </div>
  </div>
  <br /> <br /><br />
  <br /> 
      
      
      </div></div>
      
      <br /> <br /><br />
  <br /> 
  
      
      </div>







        </div>


        )
    }

    export default Main