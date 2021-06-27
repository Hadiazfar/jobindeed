import "../../../../../node_modules//bootstrap/dist/css/bootstrap.min.css";
import React from "react";
// import "./GetStarted.css"
import SidePanel from "../Sidepanel/SidePanel";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Link } from "react-router-dom";
function Main(){
    return(
        <div className ='Category'>
<div className="container-fluid b" style={{backgroundColor: 'rgb(243, 247, 247)', zIndex: 5}}>
  <div className="container pt-2" style={{zIndex: 6}}>
    <div className="row"><div className="col-3 offset-1 ">
        <br />
      

<SidePanel
 CheckCircleOutlineIcon = {<CheckCircleIcon style={{fontSize: 20, color: '#174964'}}  />}
 CategoryIcon = {<CheckCircleIcon style={{fontSize: 20, color: '#174964'}}    />}
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
<div className="col-8   pt-4 ">
    <div className="container " style={{width: '100%', backgroundColor: 'white', zIndex: 7, boxShadow: '0 0 6px 0 rgba(0,0,0,.12), 0 6px 6px 0 rgba(0,0,0,.24)'}}>
      <div className="row" style={{borderBottom: '2px solid rgb(165, 165, 165)'}}>
        <div className="col pt-4 pl-4 pr-4 pb-2">
          <a style={{fontSize: 22, fontWeight: 600}}>Category</a> 
          <br />
          <a style={{fontSize: 14, fontWeight: 400}}>Step 1 of 12</a>
        </div>
      </div>
      <br />
      <div className="row" style={{}}>
        <div className="col pt-2 pl-4 pr-4 pb-2">
          <p style={{fontSize: 20, fontWeight: 600}}>Tell us about the work you do</p>
        </div>
      </div>
      <br />
      <div className="row" style={{}}>
        <div className="col pt-2 pl-4 pr-4 pb-2">
          <a style={{fontSize: 15, fontWeight: 600}}>What is the main service you offer? </a> <br />
      
          <select className="em" name="main" id="main" style={{width: '98%', border: '1px solid black', cursor: 'pointer', height: 40, borderRadius: 12, fontSize: 22, outline: 'none'}}>
            <option className="em" value="v1">Accounting &amp; Consultation</option>
            <option className="em" value="v2">Admin Support</option>
            <option className="em" value="v3">Customer Service</option>
            <option className="em" value="v4">Data Science &amp; Analytics</option>
            <option className="em" value="v5">Design &amp; Creative</option>
            <option className="em" value="v6">Engineering &amp; Architecture</option> 
            <option className="em" value="v7">Sales &amp; Marketing</option>
            <option className="em" value="v8">IT &amp; Networkinh</option>
            <option className="em" value="v9">Legal</option>
            <option className="em" value="v10">Translation</option>
            <option className="em" value="v11">Web,Mobile&amp; software Dev</option>
            <option className="em" value="v12">Writing</option>
          </select> <br />
          <br />
          <a style={{fontSize: 15, fontWeight: 600}}>What is the other service you offer? </a> <br />
          <select className="em" name="sub" id="subcat" style={{width: '98%', border: '1px solid black', cursor: 'pointer', height: 40, borderRadius: 12, fontSize: 22, outline: 'none'}}>
            <option className="em" value="vs1">Accounting</option>
            <option className="em" value="vs2">Financial planning</option>
            <option className="em" value="vs3">Human Resources</option>
            <option className="em" value="vs4">Management Consulting</option>
            <option className="em" value="vs5">Other- Accounting &amp; Consulting</option>
          </select>

          <br /><br /><br />
          
        </div>
      </div>

    
      <br />
      <div className="row pt-4" style={{borderTop: '3px solid rgb(165, 165, 165)'}}>
        <div className="col-5  pl-4 pr-4 pb-3">
        <Link to = '/Guide'><button className="p-2 but" style={{outline: 'none', width: '90%', borderRadius: 20}}>Back</button></Link>
        </div>
        <div className="col-5 offset-2 pt-0 pl-4 pr-4 pb-3">
        <Link to = '/Expertisecv'><button className="p-2 but" style={{outline: 'none', width: '90%', borderRadius: 20}}>Next</button></Link>
          <br />  <br />
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
  
 

    )
}
export default Main