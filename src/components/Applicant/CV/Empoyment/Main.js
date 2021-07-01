import "../../../../../node_modules//bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "./Employment.css"
import SidePanel from "../Sidepanel/SidePanel";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Link } from "react-router-dom";
import CloseIcon from '@material-ui/icons/Close';
function Main() {

    var [modal, setmodal] = useState(false);


    return (
        <div className="Employment">
            <div
                className="container-fluid b"
                style={{ backgroundColor: "rgb(243, 247, 247)", zIndex: 5 }}>
                <div className="container pt-2" style={{ zIndex: 6 }}>
                    <div className="row">
                        <div className="col-3 offset-1 ">
                            <br />
                            <SidePanel
                                CheckCircleOutlineIcon={<CheckCircleIcon style={{ fontSize: 20, color: '#174964' }} />}
                                CategoryIcon={<CheckCircleIcon style={{ fontSize: 20, color: '#174964' }} />}
                                AccessibleIcon={<CheckCircleIcon style={{ fontSize: 20, color: '#174964' }} />}
                                TimelineIcon={<CheckCircleIcon style={{ fontSize: 20, color: '#174964' }} />}
                                SchoolIcon={<CheckCircleIcon style={{ fontSize: 20, color: '#174964' }} />}
                                ApartmentIcon={<CheckCircleIcon style={{ fontSize: 20, color: '#174964' }}  />}
                                LanguageIcon={<CheckCircleOutlineIcon style={{ fontSize: 20, color: 'gray' }} />}
                                TimerIcon={<CheckCircleOutlineIcon style={{ fontSize: 20, color: 'gray' }} />}
                                PersonIcon={<CheckCircleOutlineIcon style={{ fontSize: 20, color: 'gray' }} />}
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
                                        <a style={{ fontSize: 22, fontWeight: 600 }}>Employment</a>
                                        <br />
                                        <p style={{ fontSize: 14, fontWeight: 400 }}>Step 6 of 12</p>
                                    </div>
                                </div>
                                <br />
                                <div className="row" style={{}}>
                                    <div className="col pt-2 pl-4 pr-4 pb-2">
                                        <a style={{ fontSize: 18, fontWeight: 600 }}>
                                            Add your past work experience
                                        </a>
                                        <br />
                                        <a style={{ fontSize: 13, fontWeight: 500 }}>
                                            Build your credibility by showcasing the projects or jobs you have
                                            completed.
                                        </a>
                                    </div>
                                </div>
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
                                                color: "#0d6efd"
                                            }}
                                        >
                                            <i className="fas fa-plus" /> Add Employment
                                        </button>
                                    </div>
                                </div>
                                &nbsp;
                                <i
                                    className="fa fa-exclamation-triangle"
                                    style={{ color: "maroon" }}
                                    aria-hidden="true"
                                />
                              
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

    <div className={modal?"modal":"modalno"}>
  <div className="row pt-4 pb-4 " style={{}}>
    <div className="col pb-3" style={{}}>
      <div
        className="container  modal-content p-4"
        style={{
          marginLeft: 300,
          height: "60%",
          width: "60%",
          overflowY: "scroll",
          textAlign: "justify"
        }}
      >
        <div
          className="row"
          style={{ borderBottom: "2px solid rgb(165, 165, 165)" }}
        >
          <div className="col-11 pt-4 pl-4 pr-4 pb-2">
            <a style={{ fontSize: 22, fontWeight: 600 }}>Add Employment</a>
          </div>
          <div className="col-1 p-3">
            <CloseIcon 
            onClick = {()=>
                setmodal(false)
                }
                  
                  
                  style={{ cursor: "pointer" }} 
            
            />
          </div>
        </div>
        <br />
        <div className="row" style={{ marginLeft: 20 }}>
          <a style={{ fontSize: 15, fontWeight: 600 }}>Company:</a>
          <div className="col" style={{}}>
            <div
              className="row   p-0"
              style={{
                width: "100%",
                height: 50,
                borderRadius: 12,
                border: "1px solid rgb(212, 211, 211)"
              }}
            >
              <div className="col  pl-1 pr-0" style={{ paddingRight: 0 }}>
                <input
                  className="em pr-0"
                  
                  style={{
                    width: "80%",
                    height: 35,
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
        <div className="row" style={{ marginLeft: 20 }}>
          <a style={{ font: "size 15px", fontWeight: 600 }}>Location: </a>
          <div className="col-6" style={{}}>
            <div
              className="row   p-2"
              style={{
                width: "98%",
                height: 50,
                borderRadius: 12,
                border: "1px solid rgb(212, 211, 211)"
              }}
            >
              <div className="col-12  pl-1 pr-0" style={{ paddingRight: 0 }}>
                <input
                  className="em pr-1"
                  placeholder="City"
                  style={{
                    width: "75%",
                    height: 35,
                    border: "none",
                    outline: "none",
                    fontSize: 15
                  }}
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="col-6 " style={{}}>
            <select
              className="em"
              name="main"
              id="main"
              style={{
                outline: "none",
                width: "96%",
                borderRadius: 12,
                height: 50,
                padding:'10px',
                paddingBottom: 10,
                border: "1px solid rgb(212, 211, 211)"
              }}
            >
              <option className="em " value="v1">
                Pakistan
              </option>
              <option className="em" value="v2">
                Afghanistan
              </option>
              <option className="em" value="v3">
                USA
              </option>
              <option className="em" value="v4">
                Iran
              </option>
              <option className="em" value="v5">
                India
              </option>
              <option className="em" value="v6">
                Dubai
              </option>
              <option className="em" value="v7">
                Germany
              </option>
            </select>
          </div>
        </div>
        <br />
        <div className="row" style={{ marginLeft: 20 }}>
          <a style={{ fontSize: 16, fontWeight: 600 }}>Title:</a>
          <div className="col" style={{}}>
            <div
              className="row   p-0"
              style={{
                width: "100%",
                height: 50,
                borderRadius: 12,
                border: "1px solid rgb(212, 211, 211)"
              }}
            >
              <div className="col  pl-1 pr-0" style={{ paddingRight: 0 }}>
                <input
                  className="em pr-0"
                  
                  style={{
                    width: "80%",
                    height: 35,
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
        <div className="row" style={{ marginLeft: 20 }}>
          <a style={{ font: "size 20px", fontWeight: 700 }}>Period: </a>
          <div className="col-6" style={{}}>
            <select
              className="em"
              name="main"
              id="main"
              style={{
                outline: "none",
                width: "100%",
                borderRadius: 12,
                height: 50,
                padding:'10px',
                paddingBottom: 10,
                border: "1px solid rgb(212, 211, 211)"
              }}
            >
              <option className="em" value="v1">
                January
              </option>
              <option className="em" value="v2">
                Febuary
              </option>
              <option className="em" value="v3">
                March
              </option>
              <option className="em" value="v4">
                April
              </option>
              <option className="em" value="v5">
                May
              </option>
              <option className="em" value="v6">
                June
              </option>
              <option className="em" value="v7">
                July
              </option>
              <option className="em" value="v7">
                August
              </option>
              <option className="em" value="v7">
                September
              </option>
              <option className="em" value="v7">
                October
              </option>
              <option className="em" value="v7">
                November
              </option>
              <option className="em" value="v7">
                December
              </option>
            </select>
          </div>
          <div className="col-6" style={{}}>
            <div
              className="row   p-0"
              style={{
                width: "98%",
                height: 50,
                borderRadius: 12,
                border: "1px solid rgb(212, 211, 211)"
              }}
            >
              <div className="col-12  pl-1 pr-0" style={{ paddingRight: 0 }}>
                <input
                  className="em pr-0"
                  placeholder="year"
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
        <div className="row" style={{ marginLeft: 20 }}>
          <a style={{ font: "size 16px", fontWeight: 600 }}>through: </a>
          <div className="col-6" style={{}}>
            <select
              className="em"
              name="main"
              id="main"
              style={{
                outline: "none",
                width: "100%",
                borderRadius: 12,
                height: 50,
                paddingBottom: 10,
                border: "1px solid rgb(212, 211, 211)",
                padding:'10px',
              }}
            >
              <option className="em" value="v1">
                January
              </option>
              <option className="em" value="v2">
                Febuary
              </option>
              <option className="em" value="v3">
                March
              </option>
              <option className="em" value="v4">
                April
              </option>
              <option className="em" value="v5">
                May
              </option>
              <option className="em" value="v6">
                June
              </option>
              <option className="em" value="v7">
                July
              </option>
              <option className="em" value="v7">
                August
              </option>
              <option className="em" value="v7">
                September
              </option>
              <option className="em" value="v7">
                October
              </option>
              <option className="em" value="v7">
                November
              </option>
              <option className="em" value="v7">
                December
              </option>
            </select>
          </div>
          <div className="col-6" style={{}}>
            <div
              className="row   p-1"
              style={{
                width: "98%",
                height: 50,
                borderRadius: 12,
                border: "1px solid rgb(212, 211, 211)",
               
              }}
            >
              <div className="col-12  pl-1 pr-0" style={{ paddingRight: 0 }}>
                <input
                  className="em pr-0"
                  placeholder="Year"
                  style={{
                    width: "80%",
                    height: 35,
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
        <div className="row " style={{ marginLeft: 20, paddingRight: 28 }}>
          <div className="col containers" style={{}}>
            <label className="containers">
              <a style={{ fontSize: 14, fontWeight: 600 }}>
                I currently work here
              </a>
              
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
          </div>
        </div>
       
        <div className="row" style={{ marginLeft: 20 }}>
          <a style={{ fontSize: 16, fontWeight: 600 }}>
            Description (Optional)
          </a>
          <div className="col" style={{}}>
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
                  placeholder="Describe your study,awards etc."
                  style={{
                    width: "80%",
                    height: 35,
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
        <div
          className="row pt-4 pb-4"
          style={{ borderTop: "3px solid rgb(165, 165, 165)" }}
        >
          <div className="col-4  pl-4 pr-4 pb-3 offset-2">
            <button
              className="p-2 but close1"
              value="blue"
              id="btn2"
              onClick = {()=>
                setmodal(false)
                }
              style={{ outline: "none", width: "90%", borderRadius: 20 }}
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

                            </div>
                        </div>

                    </div>
                </div>
                <br />
                <br /> <br /> 
            </div>
        </div>
    )
}
export default Main