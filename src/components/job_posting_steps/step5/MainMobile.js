import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./Review.css";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";
function MainMobile() {
  return (
    <div
      className="Review1"
      style={{
        backgroundColor: "white",
        paddingLeft: 0,
        paddingRight: 0,
      }}
    >
      <div
        className="container-fluid mq1"
        style={{ width: "100%", paddingLeft: 0, paddingRight: 0 }}
      >
        <div className="col" style={{ width: "100%" }}>
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
            <div
              className="row"
              style={{ borderBottom: "1px solid rgb(165, 165, 165)" }}
            >
              <div className="col pt-2 pl-4 pr-4 pb-2">
                <p style={{ fontSize: 28, fontWeight: 700 }}>Review</p>
                <p style={{ fontSize: 18, fontWeight: 400 }}>Step 5 of 5</p>
              </div>
            </div>
            <br />
            <div className="row" style={{}}>
              <div className="col-11 pt-2 pl-4 pr-4 pb-2">
                <p style={{ fontSize: 18, fontWeight: 700 }}>Title :</p>
              </div>
              <div className="col-1 pt-3">
                <Link to="/Title">
                  <EditIcon className="EditIcon" />
                </Link>
              </div>
            </div>
            <br />
            <div className="row" style={{}}>
              <div className="col pt-2 pl-4 pr-4 pb-2">
                <p style={{ fontSize: 15, fontWeight: 700 }}>Title </p>

                <p style={{ fontSize: 13, fontWeight: 500 }}>Software</p>
                <br />

                <p style={{ fontSize: 15, fontWeight: 700 }}>Job Category</p>

                <p style={{ fontSize: 13, fontWeight: 500 }}>
                  Full Stack Development
                </p>
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>
        <br />
        <div className="col" style={{ width: "100%" }}>
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
                <p style={{ fontSize: 18, fontWeight: 700 }}>Description:</p>
              </div>
              <div className="col-1 pt-3">
                <Link to="/Description">
                  <EditIcon className="EditIcon" />
                </Link>
              </div>
            </div>
            <br />
            <div className="row" style={{}}>
              <div className="col pt-2 pl-4 pr-4 pb-2">
                <p style={{ fontSize: 15, fontWeight: 700 }}>Description </p>

                <p style={{ fontSize: 13, fontWeight: 500 }}>
                  the description about the job is here
                </p>
                <br />

                <p style={{ fontSize: 15, fontWeight: 700 }}>Attachment</p>

                <p style={{ fontSize: 13, fontWeight: 500 }}>file here</p>
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>
        <br />
        <div className="col" style={{ width: "100%" }}>
          <div
            className="container  "
            style={{
              width: "100%",
              backgroundColor: "white",
              zIndex: 7,
              borderRadius: 12,
              borderRadius: 6,
              border: "1px solid rgb(165, 165, 165)",
              paddingLeft: 22,
              paddingRight: 22,
            }}
          >
            <br />
            <div className="row" style={{}}>
              <div className="col-11 pt-2 pl-4 pr-4 pb-2">
                <p style={{ fontSize: 18, fontWeight: 700 }}>Expertise:</p>
              </div>
              <div className="col-1 pt-3">
                <Link to="/Expertise">
                  <EditIcon className="EditIcon" />
                </Link>
              </div>
            </div>
            <br />
            <div className="row" style={{}}>
              <div className="col-6 pt-2 pl-4 pr-4 pb-2">
                <p style={{ fontSize: 14, fontWeight: 700 }}>
                  Full Stack Development Deliverables
                </p>
                <button className="bt2">+ API</button>{" "}
                <button className="bt2">+ Database Architecture</button>
              </div>
              <div className="col-6 pt-2">
                <p style={{ fontSize: 14, fontWeight: 700 }}>
                  Full Stack Development Skills
                </p>

                <button className="bt2">+ Google Analytics</button>
              </div>
            </div>

            <div className="row" style={{}}>
              <div className="col-6 pt-2 pl-4 pr-4 pb-2">
                <p style={{ fontSize: 14, fontWeight: 700 }}>
                  Full Stack Development Languages
                </p>

                <button className="bt2">+ JavaScript</button>
              </div>
              <div className="col-6 pt-2">
                <p style={{ fontSize: 14, fontWeight: 700 }}>Database</p>

                <button className="bt2">+ Realm Database</button>
              </div>
            </div>

            <div className="row" style={{}}>
              <div className="col-6 pt-2 pl-4 pr-4 pb-2">
                <p style={{ fontSize: 14, fontWeight: 700 }}>Web Servers</p>

                <button className="bt2">+ Apache Tomcat </button>
              </div>
              <div className="col-6 pt-2">
                <p style={{ fontSize: 14, fontWeight: 700 }}>
                  Additional Skills
                </p>

                <button className="bt2">+ My SQL Administration</button>
              </div>
            </div>
            <div
              className="row"
              style={{ borderTop: "1px solid rgb(165, 165, 165)" }}
            >
              <div className="col pt-4 pl-4 pr-4 pb-2">
                <p style={{ fontSize: 15, fontWeight: 700 }}>
                  Experience Level
                </p>

                <p style={{ fontSize: 12, fontWeight: 500 }}>Intermediate</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="col" style={{ width: "100%" }}>
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
                <p style={{ fontSize: 18, fontWeight: 700 }}>Budget:</p>
              </div>
              <div className="col-1 pt-3">
                <Link to="/Budget">
                  <EditIcon className="EditIcon" />
                </Link>
              </div>
            </div>
            <br />
            <div className="row" style={{}}>
              <div className="col pt-2 pl-4 pr-4 pb-2">
                <p style={{ fontSize: 15, fontWeight: 700 }}>Salary </p>

                <p style={{ fontSize: 13, fontWeight: 500 }}>
                  $ 3000 per month
                </p>
                <br />

                <p style={{ fontSize: 15, fontWeight: 700 }}>
                  Permanent or Temporary{" "}
                </p>
                <br />
                <p style={{ fontSize: 13, fontWeight: 500 }}>Permanent</p>
              </div>
            </div>
            <div
              className="row"
              style={{ borderTop: "3px solid rgb(165, 165, 165)" }}
            >
              <div className="col pt-3 pl-4 pr-4 pb-2">
                <center>
                  <button
                    style={{
                      backgroundColor: "#0d6efd",
                      width: "50%",
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
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainMobile;
