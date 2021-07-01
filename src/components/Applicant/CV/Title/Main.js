import "../../../../../node_modules//bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./Titlecv.css"
import SidePanel from "../Sidepanel/SidePanel";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Link } from "react-router-dom";

function Main(){        
    return(
        <div className ="Titlecv">
        <div className="container-fluid b" style={{backgroundColor: 'rgb(243, 247, 247)', zIndex: 5}}>
  <div className="container pt-2" style={{zIndex: 6}}>
    <div className="row"><div className="col-3 offset-1 ">
        <br />
        <SidePanel 
       CheckCircleOutlineIcon={<CheckCircleIcon style={{ fontSize: 20, color: '#174964' }} />}
       CategoryIcon={<CheckCircleIcon style={{ fontSize: 20, color: '#174964' }} />}
       AccessibleIcon={<CheckCircleIcon style={{ fontSize: 20, color: '#174964' }} />}
       TimelineIcon={<CheckCircleIcon style={{ fontSize: 20, color: '#174964' }} />}
       SchoolIcon={<CheckCircleIcon style={{ fontSize: 20, color: '#174964' }} />}
       ApartmentIcon={<CheckCircleIcon style={{ fontSize: 20, color: '#174964' }}  />}
       LanguageIcon={<CheckCircleIcon style={{ fontSize: 20, color: '#174964' }} />}
       TimerIcon={<CheckCircleOutlineIcon style={{ fontSize: 20, color: 'gray' }} />}
       PersonIcon={<CheckCircleIcon style={{ fontSize: 20, color: '#174964' }} />}
       PhotoCameraIcon={<CheckCircleOutlineIcon style={{ fontSize: 20, color: 'gray' }} />}
       LocationOnIcon={<CheckCircleOutlineIcon style={{ fontSize: 20, color: 'gray' }} />}
       PhoneIcon={<CheckCircleOutlineIcon style={{ fontSize: 20, color: 'gray' }} />}
        
        />
        </div>
        <div className="col-8   pt-4 ">
  <div
    className="container "
    style={{
      width: "100%",
      backgroundColor: "white",
      zIndex: 7,
      boxShadow: "0 0 6px 0 rgba(0,0,0,.12), 0 6px 6px 0 rgba(0,0,0,.24)"
    }}
  >
    <div
      className="row"
      style={{ borderBottom: "2px solid rgb(165, 165, 165)" }}
    >
      <div className="col pt-4 pl-4 pr-4 pb-2">
        <a style={{ fontSize: 22, fontWeight: 600 }}>Title &amp; Overview</a>
        <br />
        <p style={{ fontSize: 14, fontWeight: 400 }}>Step 9 of 12</p>
      </div>
    </div>
    <br />
    <div className="row" style={{}}>
      <div className="col pt-2 pl-4 pr-4 ">
        <a style={{ fontSize: 13, fontWeight: 700 }} />
        <a
     
          style={{ fontSize: 15, fontWeight: 700, textDecoration: "none" }}
        >
          Learn more about writing a great profile or browse profiles in your category.
        {" "} </a>
        <br />
        <br />
      </div>
    </div>
    <div className="row" style={{}}>
        
    <a style={{ fontSize: 17, fontWeight: 600 }}>Title&nbsp;&nbsp;</a>
      <div className="col" style={{}}>
        <div
          className="row   p-1 "
          style={{
            width: "95%",
            height: 40,
            border: '1px solid rgb(212, 211, 211)',
            marginLeft: 13,
            borderRadius: '10px'
          }}
        >
          <div className="col-12  pl-1  pr-0" style={{ paddingRight: 0 }}>
            <input
              className="em pr-0"
              placeholder="Ex:Engineering & Architecture"
              style={{
                width: "100%",
                height: 33,
                border: "none",
                outline: "none",
                fontSize: 15
              }}
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <div className="row" style={{}}>
      <div className="col" style={{}}>
        <a style={{ fontSize: 15, fontWeight: 600 }}>
          Professional Overview&nbsp;&nbsp;
        </a>
        <div className="row   p-0 " style={{ width: "97%", marginLeft: 2 }}>
          <div className="col-12  pl-1  pr-0" style={{ paddingRight: 0 }}>
            <textarea
              cols={50}
              placeholder="Highliht Your top top skills,experience,and interests.This is one of the first things client will see on your profile"
              className="em pr-0"
              maxLength={5000}
              style={{ border: "1px solid rgb(212, 211, 211)", width: "100%", fontSize: 15, 
              borderRadius: '10px', outline:'none' }}
              defaultValue={""}
            />
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <br />
      </div>
    </div>
    <div
      className="row pt-4 pb-4"
      style={{ borderTop: "3px solid rgb(165, 165, 165)" }}
    >
      <div className="col-5  pl-4 pr-4 pb-3">
        <button
          className="p-2 but"
          style={{ outline: "none", width: "90%", borderRadius: 20 }}
        >
          Back
        </button>
      </div>
      <div className="col-5 offset-2 pt-0 pl-4 pr-4 pb-3">
        <button
          className="p-2 but"
          style={{ outline: "none", width: "90%", borderRadius: 20 }}
        >
          Next
        </button>
      </div>
    </div>
  </div>
</div>

        </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        </div>
        </div>
    )
}
export default Main