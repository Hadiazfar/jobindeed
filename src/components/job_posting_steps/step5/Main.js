import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import City from "../City/City";
import "./Review.css";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
function Main() {
  return (
    <div>
      <div className="Review">
        <div
          className="container-fluid b"
          style={{ backgroundColor: "rgb(243, 247, 247)", zIndex: 5 }}
        >
          <div className="container pt-5" style={{ zIndex: 6 }}>
            <div className="row">
              <City
               Title= {<CheckCircleIcon  style={{ color: '#174964', fontSize: '20px', }}/>}
               DescriptionIcon= {<CheckCircleIcon  style={{ color: '#174964', fontSize: '20px', }}/>}
               ExpertiseIcon ={<CheckCircleIcon  style={{ color: '#174964', fontSize: '20px', }}/>}
               Budget ={<CheckCircleIcon  style={{ color: '#174964', fontSize: '20px',}}/>}
               Review = {<CheckCircleIcon  style={{ color: '#174964', fontSize: '20px', }}/>}
              
              />
              <div className="col-9">
                <div
                  className="container "
                  style={{
                    width: "100%",
                    backgroundColor: "white",
                    zIndex: 7,
                    borderRadius: 6,
                    border: "1px solid rgb(165, 165, 165)",
                  }}
                >
                  <div
                    className="row"
                    style={{ borderBottom: "2px solid rgb(165, 165, 165)" }}
                  >
                    <div className="col pt-4 pl-4 pr-4 pb-2">
                      <p style={{ fontSize: 19, fontWeight: 750 }}>Review</p>
                      <p style={{ fontSize: 15, fontWeight: 400 }}>
                        Step 5 of 5
                      </p>
                    </div>
                  </div>
                  <div className="row" style={{}}>
                    <br />
                    <div className="col-11 pt-2 pl-4 pr-4 pb-2">
                      <p style={{ fontSize: 19, fontWeight: 750 }}>Title :</p>
                    </div>
                    <div className="col-1 pt-3">
                      <Link to="/Title">
                        <EditIcon className="EditIcon" />
                      </Link>
                    </div>
                  </div>
                  <div className="row" style={{}}>
                    <div className="col pt-2 pl-4 pr-4 pb-2">
                      <p style={{ fontSize: 15, fontWeight: 600 }}>Title </p>{" "}
                      <p style={{ fontSize: 15, fontWeight: 400 }}>Software</p>
                      <br />
                      <p style={{ fontSize: 15, fontWeight: 600 }}>
                        Job Category
                      </p>{" "}
                      <p style={{ fontSize: 15, fontWeight: 400 }}>
                        Full Stack Development
                      </p>
                    </div>
                  </div>
                </div>
                <br />
              </div>
            </div>
            <div className="col-9 offset-3">
              <div
                className="container  "
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  zIndex: 7,
                  borderRadius: 6,
                  border: "1px solid rgb(165, 165, 165)",
                  paddingLeft: 22,
                  paddingRight: 22,
                }}
              >
                <br />
                <div className="row" style={{}}>
                  <div className="col-11 pt-2 pl-4 pr-4 pb-2">
                    <p style={{ fontSize: 19, fontWeight: 750 }}>
                      Description:
                    </p>
                  </div>
                  <div className="col-1 pt-3">
                    <Link to="/Description">
                      <EditIcon className="EditIcon" />
                    </Link>
                  </div>
                </div>
                <div className="row" style={{}}>
                  <div className="col pt-2 pl-4 pr-4 pb-2">
                    <p style={{ fontSize: 15, fontWeight: 600 }}>
                      Description{" "}
                    </p>{" "}
                    <p style={{ fontSize: 15, fontWeight: 400 }}>
                      the description about the job is here
                    </p>
                    <br />
                    <p style={{ fontSize: 15, fontWeight: 600 }}>
                      Attachment
                    </p>{" "}
                    <p style={{ fontSize: 15, fontWeight: 400 }}>file here</p>
                  </div>
                </div>
              </div>
            </div>
            <br />

            <div className="col-9 offset-3">
              <div
                className="container  "
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  zIndex: 7,
                  borderRadius: 6,
                  border: "1px solid rgb(165, 165, 165)",
                  paddingLeft: 22,
                  paddingRight: 22,
                }}
              >
                <br />
                <div className="row" style={{}}>
                  <div className="col-11 pt-2 pl-4 pr-4 pb-2">
                    <p style={{ fontSize: 19, fontWeight: 750 }}>Expertise:</p>
                  </div>
                  <div className="col-1 pt-3">
                    <Link to="/Expertise">
                      <EditIcon className="EditIcon" />
                    </Link>
                  </div>
                </div>
                <div className="row" style={{}}>
                  <div className="col-6 pt-2 pl-4 pr-4 pb-2">
                    <p style={{ fontSize: 15, fontWeight: 600 }}>
                      Full Stack Development Deliverables
                    </p>
                    <button className="bt2">+ API</button>{" "}
                    <button className="bt2">+ Database Architecture</button>
                  </div>
                  <div className="col-6 pt-2">
                    <p style={{ fontSize: 15, fontWeight: 600 }}>
                      Full Stack Development Skills
                    </p>

                    <button className="bt2">+ Google Analytics</button>
                  </div>
                </div>

                <div className="row" style={{}}>
                  <div className="col-6 pt-2 pl-4 pr-4 pb-2">
                    <p style={{ fontSize: 15, fontWeight: 600 }}>
                      Full Stack Development Languages
                    </p>

                    <button className="bt2">+ JavaScript</button>
                  </div>
                  <div className="col-6 pt-2">
                    <p style={{ fontSize: 15, fontWeight: 600 }}>Database</p>

                    <button className="bt2">+ Realm Database</button>
                  </div>
                </div>

                <div className="row" style={{}}>
                  <div className="col-6 pt-2 pl-4 pr-4 pb-2">
                    <p style={{ fontSize: 15, fontWeight: 600 }}>Web Servers</p>

                    <button className="bt2">+ Apache Tomcat </button>
                  </div>
                  <div className="col-6 pt-2">
                    <p style={{ fontSize: 15, fontWeight: 600 }}>
                      Additional Skills
                    </p>

                    <button className="bt2">+ My SQL Administration</button>
                  </div>
                </div>
                <br />
                <div
                  className="row"
                  style={{ borderTop: "3px solid rgb(165, 165, 165)" }}
                >
                  <div className="col pt-4 pl-4 pr-4 pb-2">
                    <p style={{ fontSize: 15, fontWeight: 650 }}>
                      Experience Level
                    </p>

                    <p style={{ fontSize: 15, fontWeight: 400 }}>
                      Intermediate
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <>
              <br />
              <div className="col-9 offset-3">
                <div
                  className="container  "
                  style={{
                    width: "100%",
                    backgroundColor: "white",
                    zIndex: 7,
                    borderRadius: 6,
                    border: "1px solid rgb(165, 165, 165)",
                    paddingLeft: 22,
                    paddingRight: 22,
                  }}
                >
                  <div className="row" style={{}}>
                    <div className="col-11 pt-2 pl-4 pr-4 pb-2">
                      <br />
                      <p style={{ fontSize: 19, fontWeight: 750 }}>Budget:</p>
                    </div>
                    <div className="col-1 pt-3">
                      <Link to="/Budget">
                        <EditIcon className="EditIcon" />
                      </Link>
                    </div>
                  </div>
                  <div className="row" style={{}}>
                    <div className="col pt-2 pl-4 pr-4 pb-2">
                      <p style={{ fontSize: 15, fontWeight: 600 }}>Salary </p>{" "}
                      <p id="salary" style={{ fontSize: 15, fontWeight: 400 }}>
                        $ 3000 per month
                      </p>
                      <br />
                      <p style={{ fontSize: 15, fontWeight: 600 }}>
                        Permanent or Temporary{" "}
                      </p>{" "}
                      <p style={{ fontSize: 15, fontWeight: 400 }}>Permanent</p>
                    </div>
                  </div>
                  <br />
                  <div
                    className="row"
                    style={{ borderTop: "3px solid rgb(165, 165, 165)" }}
                  >
                    <div className="col pt-3 pl-4 pr-4 pb-2">
                      <center>
                        <button
                          style={{
                            backgroundColor: "#0d6efd",
                            width: "22%",
                            height: 65,
                            borderRadius: 12,
                            fontSize: 20,
                            fontWeight: 700,
                            color: "white",
                            outline: "none !important",
                          }}
                          className="p-2"
                        >
                          Post Add
                        </button>
                      </center>
                      <br />
                    </div>
                  </div>
                  <br />
                </div>
              </div>
            </>
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
export default Main;
