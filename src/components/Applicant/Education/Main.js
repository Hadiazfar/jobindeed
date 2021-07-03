import "../../../../node_modules//bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from "react";
import "./Education.css"
import SidePanel from "../CV/Sidepanel/SidePanel";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Link } from "react-router-dom";
import CloseIcon from '@material-ui/icons/Close';
function Main(){

var [modal,setmodal] = useState(false);


    return(
        <div className="Education">
<div
  className="container-fluid b"
  style={{ backgroundColor: "rgb(243, 247, 247)", zIndex: 5 }}>
  <div className="container pt-2" style={{ zIndex: 6 }}>
    <div className="row">
      <div className="col-3 offset-1 ">
        <br />
        <SidePanel 
          CheckCircleOutlineIcon = {<CheckCircleIcon style={{fontSize: 20, color: '#174964'}}  />}
          CategoryIcon = {<CheckCircleIcon style={{fontSize: 20, color: '#174964'}}    />}
          AccessibleIcon = {<CheckCircleIcon style={{fontSize: 20, color: '#174964'}} />}
          TimelineIcon = {<CheckCircleIcon style={{fontSize: 20, color: '#174964'}} />}
          SchoolIcon = {<CheckCircleIcon style={{fontSize: 20, color: '#174964'}}  />}
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
        <a style={{ fontSize: 22, fontWeight: 600 }}>Education</a>
        <br />
        <p style={{ fontSize: 14, fontWeight: 400 }}>Step 5 of 12</p>
      </div>
    </div>
    <br />
    <div className="row pt-4 pb-4" style={{}}>
      <div className="col  pl-4 pr-4 pb-3">
        <button 
          value="GREEN"
          id="myBtn"
          className="p-2 but"
          onClick = {()=> 
            setmodal(true)
            
        }
          style={{
            outline: "none",
            width: "40%",
            borderRadius: 20,
            backgroundColor: "white",
            color: "#0d6efd",
          }}
        >
          Add Education
        </button>
      </div>
    </div>
    &nbsp;
    <i
      className="fa fa-exclamation-triangle"
      style={{ color: "maroon" }}
      aria-hidden="true"
    />
    <a style={{ fontSize: 15, fontWeight: 500, color: "maroon" }}>
      {" "}
      Add at least one item or click "Skip this step.".
    </a>
    <br />
    <br />
    <a style={{ fontSize: 15, fontWeight: 700, textDecoration: "none" }}>
      Skip this step
    </a>{" "}
    <br />
    <br />
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
<div className={modal?"modal":"modalno"} >
    <div className="row pt-4 pb-4">
      <div className="col pb-3">
        <div
          className="container  modal-content p-4"
          style={{
            marginLeft: 300,
            height: "70%",
            width: "60%",
            overflowY: "scroll",
            textAlign: "justify"
          }}
        >
          <div
            className="row"
            style={{ borderBottom: "1px solid rgb(212, 211, 211)" }}
          >
            <div className="col-11 pt-4 pl-4 pr-4 pb-2">
              <a style={{ fontSize: 22, fontWeight: 600 }}>Add Education</a>
            </div>
            <div className="col-1 p-4">
            
              <CloseIcon 
              onClick = {()=>
            setmodal(false)
            }
              
              
              style={{ cursor: "pointer" }} />
              
            </div>
          </div>
          <br />
          <div className="row" style={{}}>
            <div className="col pt-2 pl-4 pr-4 pb-2">
              <a style={{ fontSize: 17, fontWeight: 600 }}>School</a>
              <input
                className="input"
                style={{
                  width: "100%",
                  borderRadius: 12,
                  border: "1px solid rgb(212, 211, 211)"
                }}
                type="text"
                placeholder="Ex:Northwestern University"
                id="myInput"
                onkeyup="filterFunction()"
              />
            </div>
          </div>
          <div className="row" style={{}}>
            <a style={{ fontSize: 17, fontWeight: 600 }}>
              Area of Study(Optional)
            </a>
            <div className="col pt-2 pl-4 pr-4 pb-2">
              <input
                className="input"
                style={{
                  width: "100%",
                  borderRadius: 12,
                  border: "1px solid rgb(212, 211, 211)"
                }}
                type="text"
                placeholder="Ex:Software Engineering"
                id="myInput"
                onkeyup="filterFunction()"
              />
            </div>
          </div>
          <div className="row" style={{}}>
            <div className="col pt-2 pl-4 pr-4 pb-2">
              <a style={{ fontSize: 17, fontWeight: 600 }}>Degree(Optional):</a>
              <input
                className="input"
                style={{
                  width: "100%",
                  borderRadius: 12,
                  border: "1px solid rgb(212, 211, 211)"
                }}
                type="text"
                placeholder="Ex:Bachelor's"
                id="myInput"
                onkeyup="filterFunction()"
              />
            </div>
          </div>
          <br />
          <div className="row">
            <a style={{ fontSize: 17, fontWeight: 600 }}>Dates attended: </a>
            <div className="col-6">
              <div
                className="row   p-0"
                style={{
                  width: "100%",
                  height: 50,
                  borderRadius: 12,
                  border: "1px solid rgb(212, 211, 211)"
                }}
              >
                <div className="col-12  pl-1 pr-1" style={{ paddingRight: 0 }}>
                  <input
                    className="em pr-0"
                    placeholder="Form"
                    style={{
                      width: "95%",
                      height: 43,
                      border: "none",
                      outline: "none",
                      fontSize: 15
                    }}
                    type="number"
                  />
                </div>
              </div>
            </div>
            <div className="col-6 ">
              <div
                className="row   p-0"
                style={{
                  width: "100%",
                  height: 50,
                  borderRadius: 12,
                  border: "1px solid rgb(212, 211, 211)"
                }}
              >
                <div className="col-12  pl-1 pr-0" style={{ paddingRight: 0 }}>
                  <input
                    className="em pr-0"
                    placeholder="To( orexpected graduation year)"
                    style={{
                      width: "95%",
                      height: 43,
                      border: "none",
                      outline: "none",
                      fontSize: 15
                    }}
                    type="number"
                  />
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="row" style={{}}>
            <div className="col pt-2 pl-4 pr-4 pb-2">
              <a style={{ fontSize: 17, fontWeight: 600 }}>Description:</a>
              <input
                className="input"
                style={{
                  width: "100%",
                  borderRadius: 12,
                  border: "1px solid rgb(212, 211, 211)"
                }}
                type="text"
                placeholder="Describe your study,awards etc"
                id="myInput"
                onkeyup="filterFunction()"
              />
            </div>
          </div>
          <br />
          <br />
          <div
            className="row pt-4 pb-4"
            style={{ borderTop: "3px solid rgb(165, 165, 165)" }}
          >
            <div className="col-4  pl-4 pr-4 pb-3">
              <button
                className="p-2 but close1"
                value="blue"
                id="btn2"
                style={{ outline: "none", width: "90%", borderRadius: 20 }}
                onClick = {()=>
                    setmodal(false)
                }
              >
                Save
              </button>
            </div>
          
            <div className="col-4 pt-0 pl-4 pr-4 pb-3">
              <button
                className="p-2 but close3"
                value="blue"
                id="btn4"
                onClick = {()=>
                    setmodal(false)
                }
                style={{ outline: "none", width: "90%", borderRadius: 20 }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br /> <br />
  <br />
  <br /> <br />
  <br />
  <br /> <br />
  <br />

   </div>
   </div>
   </div>
   <br /> <br />
  <br />
  <br /> <br />
  
   </div>
     
    )
}
export default Main