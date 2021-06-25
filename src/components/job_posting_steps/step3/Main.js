import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import City from "../City/City";
import "./Expertise.css";
import SearchIcon from "@material-ui/icons/Search";
import Button from "../../job_posting_steps/Button/Button";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
function Main() {
  return (
    <div className="Expertise">
      <div
        className="container-fluid b"
        style={{ backgroundColor: "rgb(243, 247, 247)", zIndex: 5 }}
      >
        <div className="container pt-5" style={{ zIndex: 6 }}>
          <div className="row">
            <City 
             Title= {<CheckCircleIcon  style={{ color: '#174964', fontSize: '20px', }}/>}
             DescriptionIcon= {<CheckCircleIcon  style={{ color: '#174964', fontSize: '20px', }}/>}
             ExpertiseIcon ={<CheckCircleIcon  style={{ color: '#174964', fontSize: '20px',}}/>}
             Budget ={<CheckCircleOutlineIcon style={{fontSize: '20px',}}/>}
             Review = {< CheckCircleOutlineIcon style={{fontSize: '20px',}}/>}
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
                    <p style={{ fontSize: 19, fontWeight: 750 }}>Expertise</p>
                    <p style={{ fontSize: 15, fontWeight: 400 }}>Step 3 of 5</p>
                  </div>
                </div>
                <br />
                <div className="row" style={{ marginLeft: 5 }}>
                  <div className="col pt-2 pl-4 pr-4 pb-2">
                    <a style={{ fontSize: 15, fontWeight: 600 }}>
                      What skills and expertise are most important to you in
                      Full Stack Development:
                    </a>
                    <div className="row">
                      <div className="col-4 ">
                        <p
                          style={{
                            fontSize: 12,
                            fontWeight: 400,
                            color: "rgb(165, 165, 165)",
                            paddingRight: 0,
                          }}
                        >
                          Full Stack Development Deliverables (optional)
                        </p>
                      </div>
                      <div
                        className="col-8 pb-1"
                        style={{ paddingLeft: 0, marginLeft: "-20px" }}
                      >
                        <hr />
                      </div>
                    </div>
                    <button className="bt2">+ API</button>{" "}
                    <button className="bt2">+ Database Architecture</button>{" "}
                    <button className="bt2">+ Database Design</button>{" "}
                    <button className="bt2">+ Web Design</button> <br /> <br />
                    <button className="bt2">+ Website Development</button>{" "}
                    <button className="bt2">+ Web Application</button>
                    <br /> <br /> <br />
                    <div className="row">
                      <div className="col-4 ">
                        <p
                          style={{
                            fontSize: 12,
                            fontWeight: 400,
                            color: "rgb(165, 165, 165)",
                            paddingRight: 0,
                          }}
                        >
                          Full Stack Development Skills (optional)
                        </p>
                      </div>
                      <div
                        className="col-8 pb-1"
                        style={{ paddingLeft: 0, marginLeft: "-20px" }}
                      >
                        <hr />
                      </div>
                    </div>
                    <button className="bt2">+ Angular Js</button>{" "}
                    <button className="bt2">+ ASP.Net</button>
                    <button className="bt2">+ .NET Framework</button>{" "}
                    <button className="bt2">+ Angular</button>{" "}
                    <button className="bt2">+ Adobe PS</button> <br /> <br />
                    <button className="bt2">+ Adobe PS</button>{" "}
                    <button className="bt2">+ Google Analytics</button>{" "}
                    <button className="bt2">+ Web Application</button>
                    <br /> <br /> <br />
                    <div className="row">
                      <div className="col-4 ">
                        <p
                          style={{
                            fontSize: 12,
                            fontWeight: 400,
                            color: "rgb(165, 165, 165)",
                            paddingRight: 0,
                          }}
                        >
                          Full Stack Development Languages (optional)
                        </p>
                      </div>
                      <div
                        className="col-8 pb-1"
                        style={{ paddingLeft: 0, marginLeft: "-20px" }}
                      >
                        <hr />
                      </div>
                    </div>
                    <button className="bt2">+ Java</button>{" "}
                    <button className="bt2">+ javascript</button>{" "}
                    <button className="bt2">+ Kolin</button>{" "}
                    <button className="bt2">+ PHP</button>{" "}
                    <button className="bt2">+ Ruby</button>
                    <br /> <br /> <br />
                    <div className="row">
                      <div className="col-3 ">
                        <p
                          style={{
                            fontSize: 12,
                            fontWeight: 400,
                            color: "rgb(165, 165, 165)",
                            paddingRight: 0,
                          }}
                        >
                          Database(optional)
                        </p>
                      </div>
                      <div
                        className="col-9 pb-1"
                        style={{ paddingLeft: 0, marginLeft: "-20px" }}
                      >
                        <hr />
                      </div>
                    </div>
                    <button className="bt2">+ SQLite</button>{" "}
                    <button className="bt2">+ Realm Database</button>{" "}
                    <button className="bt2">+ Couchbase</button>{" "}
                    <button className="bt2">+ Level DB</button>{" "}
                    <button className="bt2">+ Paper DB</button> <br /> <br />
                    <button className="bt2">+ Azure Cosmos DB</button>
                    <br /> <br /> <br />
                    <div className="row">
                      <div className="col-4 ">
                        <p
                          style={{
                            fontSize: 12,
                            fontWeight: 400,
                            color: "rgb(165, 165, 165)",
                            paddingRight: 0,
                          }}
                        >
                          Full Stack Development Deliverables (optional)
                        </p>
                      </div>
                      <div
                        className="col-8 pb-1"
                        style={{ paddingLeft: 0, marginLeft: "-20px" }}
                      >
                        <hr />
                      </div>
                    </div>
                    <button className="bt2">+ Apache HTTP Server</button>{" "}
                    <button className="bt2">+ NGINIX</button>{" "}
                    <button className="bt2">+ Apache Tomcat</button>{" "}
                    <button className="bt2">+ Apache Geronimo</button> <br />{" "}
                    <br />
                    <button className="bt2">
                      + Oracle WebLogic Server
                    </button>{" "}
                    <button className="bt2">+ Iighttpd</button>
                    <br /> <br />
                  </div>
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>

          <br />

          <div className="col-9 offset-3">
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
              <br />
              <div className="row" style={{ marginLeft: 5 }}>
                <div className="col pt-2 pl-4 pr-4 pb-2">
                  <a style={{ fontSize: 15, fontWeight: 600 }}>
                    What additional skills and expertise are most important to
                    you{" "}
                  </a>
                  <br />
                  <br />
                  <button className="bt2">+ MySQL Administration</button>{" "}
                  <button className="bt2">+ MongaDB</button>{" "}
                  <button className="bt2">+ RESTful</button>{" "}
                  <button className="bt2">+ API Integration</button>
                  <br /> <br />
                  <button className="bt2">
                    + PostgreSQL Administration
                  </button>{" "}
                  <button className="bt2">+ Node.js</button>{" "}
                  <button className="bt2">+ PHP</button>{" "}
                  <button className="bt2">+ Bootstrap</button>{" "}
                  <button className="bt2">+ React.js</button>
                  <br /> <br /> <button className="bt2">+ jQuery</button>{" "}
                  <button className="bt2">+ HTML</button>{" "}
                  <button className="bt2">+ Amazon Web Services</button>
                  <button className="bt2">
                    + Ecommerce Website
                  </button> <br /> <br />{" "}
                  <button className="bt2">+ AngularJS</button>{" "}
                  <button className="bt2">+ Custom PHP</button>{" "}
                  <button className="bt2">+ Vue.js</button>{" "}
                  <button className="bt2">+ CRM</button>
                  <button className="bt2">+ AJAX</button>{" "}
                  <button className="bt2">+ UI/UX</button> <br /> <br />{" "}
                  <button className="bt2">+ Website Security</button>{" "}
                  <button className="bt2">+ Python</button>{" "}
                  <button className="bt2">+ Laravel</button>
                  <button className="bt2">+ SQLite Administration</button>{" "}
                  <button className="bt2">+ CSS</button>
                  <br />
                  <br />
                  <a style={{ fontSize: 15, fontWeight: 600 }}>
                    Not what you are looking for ?
                  </a>
                  <br />
                  <div className="p-1" style={{ height: 50 }}>
                    <button
                      className="btn btn-primary pt-0 pb-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                      style={{
                        width: "90%",
                        height: 35,
                        backgroundColor: "white",
                        border: "1px solid black",
                        outline: "none",
                        color: "black",
                      }}
                    >
                      <div className="row p-0 pt-1 pb-1" style={{ height: 50 }}>
                        <div className="col-3 ">
                          <a
                            href
                            style={{
                              fontSize: 18,
                              textDecoration: "none",
                              color: "black",
                            }}
                          >
                            Search Skills
                          </a>
                        </div>
                        <div className="col-7" />
                        <div className="col-2 ">
                          <SearchIcon />
                        </div>
                      </div>
                    </button>
                    <div
                      className="collapse "
                      id="collapseExample"
                      style={{
                        width: "90%",
                        boxShadow:
                          "0 0 6px 0 rgba(0,0,0,.12), 0 6px 6px 0 rgba(0,0,0,.24)",
                      }}
                    >
                      <div
                        className="card card-body p-0"
                        style={{
                          overflowX: "hidden",
                          overflowY: "scroll",
                          height: 40,
                        }}
                      >
                        <div
                          className="row em3  p-0"
                          style={{
                            width: "100%",
                            height: 30,
                            borderRadius: 0,
                            marginLeft: 1,
                          }}
                        >
                          <div className="col-1 p-2">
                            {" "}
                            <SearchIcon />
                          </div>
                          <div className="col-11 p-0">
                            <input
                              className="em"
                              placeholder=" "
                              style={{
                                width: "95%",
                                height: 35,
                                border: "none",
                                outline: "none",
                                fontSize: 18,
                              }}
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
            </div>
          </div>
          <br />

          <div className="col-9 offset-3">
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
              <br />
              <div className="row" style={{ marginLeft: 5 }}>
                <div className="col pt-2 pl-4 pr-4 pb-2">
                  <a style={{ fontSize: 15, fontWeight: 600 }}>
                    What level of experience should your employee have ?{" "}
                  </a>
                  <br />
                  <br />
                  <button style={{ height: 120 }} className="p-3 bt3">
                    <a style={{ fontSize: 17, fontWeight: 700 }}>Entry Level</a>{" "}
                    <br />
                    <a style={{ fontSize: 10 }}>Looking for someone</a> <br />
                    <a style={{ fontSize: 10 }}>
                      relatively new to this field{" "}
                    </a>
                  </button>
                  &ensp;&ensp;
                  <button style={{ height: 120 }} className="p-2 bt3">
                    <a style={{ fontSize: 17, fontWeight: 700 }}>
                      Intermediate
                    </a>
                    <br />
                    <a style={{ fontSize: 10 }}>Looking for substantial</a>{" "}
                    <br />
                    <a style={{ fontSize: 10 }}>experience to this field</a>
                  </button>
                  &ensp;&ensp;
                  <button style={{ height: 120 }} className="p-2 bt3">
                    <a style={{ fontSize: 17, fontWeight: 700 }}>Expert </a>
                    <br />
                    <a style={{ fontSize: 10 }}>Looking for someone</a> <br />
                    <a style={{ fontSize: 10 }}>
                      relatively deep expertise to this field{" "}
                    </a>
                  </button>
                  <br />
                  <br />
                  <div
                    className="row"
                    style={{
                      borderTop: "3px solid rgb(165, 165, 165)",
                      marginLeft: "-29px",
                    }}
                  >
                    <Button />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
export default Main;
