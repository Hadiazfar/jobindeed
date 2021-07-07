import "../../../../../node_modules//bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./Preview.css"
import { Link } from "react-router-dom";
import EditIcon from '@material-ui/icons/Edit';
function MainMobile(){        
    return( 
<div
  className="Preview1 p-0"
  style={{
    backgroundColor: "white",
    paddingLeft: 0,
    paddingRight: 0
  }}
>
  <div
    className="container-fluid mq1"
    style={{ width: "100%", paddingLeft: 0, paddingRight: 0 }}
  >
    <div className="col" id="bl2" style={{ width: "100%", display: "block" }}>
      <div className="row">
        <div className="col  pt-4 ">
          <div
            className="container "
            style={{
              width: "100%",
              backgroundColor: "white",
              zIndex: 7,
        
            }}
          >
            <div
              className="row p-2"
              style={{ borderBottom: "2px solid rgb(165, 165, 165)" }}
            >
              <div className="col-11 pt-4 pl-4 pr-4 pb-2">
                <a style={{ fontSize: 22, fontWeight: 600 }}>Profile photo</a>
              </div>
            </div>
            <br />

            <div className="row pt-2 pb-4" style={{}}>
              <div className="col  pt-2 pl-4 pr-4 ">
                <a style={{ fontSize: 18, fontWeight: 600 }}>Looking Good, </a>
                <a
                  style={{ fontSize: 18, fontWeight: 600, color: "#174964" }}
                >
                  Hadi!
                </a>{" "}
                <br />
                <br />
                <a style={{ fontSize: 15, fontWeight: 500 }}>
                  Make any necessary edits and then submit your profile. You can
                  still edit it after you submit it
                </a>{" "}
                <br />
                <br />
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col pt-4 ">
          <div
            className="container "
            style={{
              width: "100%",
              backgroundColor: "white",
              zIndex: 7,
        
            }}
          >
            <div className="row pt-2 pb-4" style={{}}>
              <div className="col offset-1">
                
              </div>
            </div>
            <div className="row pt-0 pb-4" style={{ marginLeft: 7 }}>
              <div className="col  ">
              
              <a style={{ fontSize: 15, fontWeight: 600,paddingRight:'25', }}>SYED ABDUL HADI </a>{" "}
                      <br />
                      <a style={{ fontSize: 15, fontWeight: 600,paddingRight:'25', }}>Hadiazfar@gmail.com </a>{" "}
                      <br />
                      <a style={{ fontSize: 15, fontWeight: 600 }}>Front End Developer</a>{" "}
                      <br />
                      <a style={{ fontSize: 15, fontWeight: 600 }}>
                        0312293282
                      </a>
                      <br/>
                      <br/>
                      <a style={{ fontSize: 15, fontWeight:700 }}>
                        Software Engineering
                      </a>
                      <br />
                      <a style={{ fontSize: 15, fontWeight: 600 }}>
                        the main motive is to give deliver the customer the desireable
                        deliverables and the main focus will be on what th customer
                        need not what we can provide.
                      </a>
                    
                <br />
                <br />
                <br />
                {/* <div
                  className="row"
                  style={{ borderTop: "1px solid rgb(165, 165, 165)" }}
                >
                  <div className="col pt-4 p-1">
                    <a style={{ fontSize: 18, fontWeight: 700 }}>Languages</a>{" "}
                  
                   <br />
                    <a style={{ fontSize: 15, fontWeight: 600 }}>
                      English: Conversational
                    </a>{" "}
                  <br />
                    <a style={{ fontSize: 15, fontWeight: 600 }}>
                      Urdu: Fluent
                    </a>{" "}
                    
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col  pt-4 ">
          <div
            className="container "
            style={{
              width: "100%",
              backgroundColor: "white",
              zIndex: 7,
        
            }}
          >
            <div
              className="row p-2"
              style={{ borderBottom: "2px solid rgb(165, 165, 165)" }}
            >
              <div className="col-11 pt-4 pl-4 pr-4 pb-2">
                <a style={{ fontSize: 18, fontWeight: 700 }}>Languagea</a>
              </div>
              {/* <div className="col-1  p-4">
                <EditIcon />
              </div> */}
            </div>
            <br />
            <div className="row p-2" style={{}}>
              <div className="col pt-1 pl-4 pr-4 pb-2">
              
                   <a style={{ fontSize: 15, fontWeight: 600 }}>
                     English: Conversational
                   </a>{" "}
                 <br />
                   <a style={{ fontSize: 15, fontWeight: 600 }}>
                     Urdu: Fluent
                   </a>{" "}
                   
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col  pt-4 ">
          <div
            className="container "
            style={{
              width: "100%",
              backgroundColor: "white",
              zIndex: 7,
        
            }}
          >
            <div
              className="row p-2"
              style={{ borderBottom: "2px solid rgb(165, 165, 165)" }}
            >
              <div className="col-11 pt-4 pl-4 pr-4 pb-2">
                <a style={{ fontSize: 18, fontWeight: 700 }}>Skills</a>
              </div>
              {/* <div className="col-1  p-4">
                <EditIcon />
              </div> */}
            </div>
            <br />
            <div className="row p-2" style={{}}>
              <div className="col pt-1 pl-4 pr-4 pb-2">
                <a style={{ textDecoration: "none" }} className="bt2 p-2">
                  CSS
                </a>
                <a style={{ textDecoration: "none" }} className="bt2 p-2">
                  SQA
                </a>
                <a style={{ textDecoration: "none" }} className="bt2 p-2">
                  QA Engineering
                </a>
                <a style={{ textDecoration: "none" }} className="bt2 p-2">
                  C
                </a>
                <a style={{ textDecoration: "none" }} className="bt2 p-2">
                  Javascript
                </a>
                <a style={{ textDecoration: "none" }} className="bt2 p-2">
                  Dart
                </a>
                <a style={{ textDecoration: "none" }} className="bt2 p-2">
                  Java
                </a>
                <a style={{ textDecoration: "none" }} className="bt2 p-2">
                  React
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col pt-4 ">
          <div
            className="container "
            style={{
              width: "100%",
              backgroundColor: "white",
              zIndex: 7,
        
            }}
          >
            <div
              className="row p-2"
              style={{ borderBottom: "2px solid rgb(165, 165, 165)" }}
            >
              <div className="col-11 pt-4 pl-4 pr-4 pb-2">
                <a style={{ fontSize: 18, fontWeight: 700 }}>
                  Employment history
                </a>
              </div>
              {/* <div className="col-1  p-4">
                <button className="bt1 close p-2 " style={{ outline: "none" }}>
                  <i style={{ borderRadius: "100%" }} className="fas fa-pen " />
                </button>
              </div> */}
            </div>
            <br />
            <div className="row pt-0 pb-4" style={{ marginLeft: 7 }}>
              <div className="col  ">
                <a style={{ fontSize: 15, fontWeight: 600 }}>
                  Web Developer |{" "}
                </a>
                <a style={{ fontSize: 15, fontWeight: 600 }}>abtach</a>
                <br />
                <a style={{ fontSize: 15, fontWeight: 600, color: "grey" }}>
                  January 2020 - Present
                </a>
                <br />
                <a style={{ fontSize: 15, fontWeight: 600 }}>
                  i am a webapp developer and i use react for it
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col  pt-4 ">
          <div
            className="container "
            style={{
              width: "100%",
              backgroundColor: "white",
              zIndex: 7,
        
            }}
          >
            <div
              className="row p-2"
              style={{ borderBottom: "2px solid rgb(165, 165, 165)" }}
            >
              <div className="col-11 pt-4 pl-4 pr-4 pb-2">
                <a style={{ fontSize: 18, fontWeight: 700 }}>Education</a>
              </div>
              {/* <div className="col-1  p-4">
                <button className="bt1 close p-2 " style={{ outline: "none" }}>
                  <i style={{ borderRadius: "100%" }} className="fas fa-pen " />
                </button>
              </div> */}
            </div>
            <br />
            <div className="row pt-0 pb-4" style={{ marginLeft: 7 }}>
              <div className="col  ">
                <a style={{ fontSize: 15, fontWeight: 600 }}>
                  Karachi University{" "}
                </a>
                <br />
                <a style={{ fontSize: 15, fontWeight: 600 }}>
                  Bachelor of Science (BS) of Computer science
                </a>
                <br />
                <a style={{ fontSize: 15, fontWeight: 500, color: "grey" }}>
                  2018 - 2022 (expected)
                </a>
                <br />
                <br />
                <a style={{ fontSize: 15, fontWeight: 600 }}>
                  i work on webapp development through react html css .I also
                  know very much about SOFTWARE QUALITY ASSURANCE work i can do
                  both manual and automated testing and have lots of knowlege
                  about project management
                </a>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
<center>
      <div className="col-12">
      <button 
                        style={{ outline: "none", width: "80%",height:'40px',borderRadius: 20,background:'#174964' }} type="button" class="btn btn-success">Submit</button>
                     
      </div>
      </center> 
      <br />
    </div>
  </div>
</div>
    )
}
export default MainMobile