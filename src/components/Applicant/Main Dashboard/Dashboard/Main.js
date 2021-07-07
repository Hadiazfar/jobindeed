import "../../../../../node_modules//bootstrap/dist/css/bootstrap.min.css"
import React from "react";
import './Dashboard.css'
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import LanguageIcon from '@material-ui/icons/Language';
import AddIcon from '@material-ui/icons/Add';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import FavoriteIcon from '@material-ui/icons/Favorite';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import SearchIcon from '@material-ui/icons/Search';
function Main() {
    return (
<div className="MainDashboard">
  <div
    className="container-fluid b "
    style={{ backgroundColor: "rgb(243, 247, 247)", zIndex: 5 }}
  >
    <div className="container pt-2" style={{ zIndex: 6 }}>
      <div className="row">
        <div className="col-2 offset" style={{}}>
          <br />
          <div className="row" style={{}}>
            <div className="col">
              <a style={{ fontSize: 25, fontWeight: 600, color:'#174964' }}>Find Work</a>{" "}
            </div>
          </div>
          <br />
          <br />
          <div
            className="row pt-2 pb-2"
            style={{ borderLeft: "3px solid #174964", marginLeft: 2 }}
          >
            <div className="col ">
              <button
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  outline: "none",
                  textDecoration: "none",
                  backgroundColor: "rgb(243, 247, 247)",
                  border: "none",
                  color:'#174964'
                }}
              >
                My Feed
              </button>{" "}
            </div>
          </div>
          <div className="row p-1 pt-2 " style={{ marginLeft: 2 }}>
            <div className="col ">
              <button
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  outline: "none",
                  textDecoration: "none",
                  backgroundColor: "rgb(243, 247, 247)",
                  border: "none",
                  color:'#174964'
                }}
              >
                Best Matches{" "}
              </button>{" "}
            </div>
          </div>
          <div className="row p-1 pt-2 " style={{ marginLeft: 2 }}>
            <div className="col ">
              <button
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  outline: "none",
                  textDecoration: "none",
                  backgroundColor: "rgb(243, 247, 247)",
                  border: "none",
                  color:'#174964'
                }}
              >
                Recommended
              </button>{" "}
            </div>
          </div>
          <br />
          <br />
          <div className="row p-1 pt-2" style={{ marginLeft: 2 }}>
            <div className="col">
              <a style={{ fontSize: 15, fontWeight: 600,color:'#174964' }}>My Categories</a>{" "}
            </div>
          </div>
          <div className="row p-1 pt-2" style={{ marginLeft: 2 }}>
            <div className="col">
              <a
                href
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  textDecoration: "none",
                  color:'#174964 '
                  ,color:'#174964'
                }}
              >
                Other-engineering
              </a>{" "}
            </div>
          </div>
          <div className="row p-1 pt-2" style={{ marginLeft: 2 }}>
            <div className="col">
            </div>
          </div>
        </div>
        <div className="col-7 pt-4 ">
  <div className="row" style={{}}>
    <div className="col" style={{}}>
      {" "}
      <center>  
        <div
          className="row   p-0"
          style={{
            width: "100%",
            height: 37,
            borderRadius: 8,
            border: "1px solid rgb(131, 131, 131)"
          }}
        >
          <div
            className="col-11  p-0"
            style={{ borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }}
          >
            
            <input
              className="em pr-0"
              placeholder="  Search for jobs"
              style={{
                width: "100%",
                height: 34,
                borderTopLeftRadius: 8,
                borderBottomLeftRadius: 8,
                border: "none",
                outline: "none",
                fontSize: 15
              }}
              type="text"
            />
          </div>
          <div
            className="col-1  p-0"
            style={{
              borderTopRightRadius: 8,
              borderBottomRightRadius: 8,
              backgroundColor: "#174964 "
            }}
          >
            <button
              className=" p-1"
              style={{
                width: "100%",
                borderRadius: 2,
                backgroundColor: "#174964 ",
                borderTopRightRadius: 8,
                outline: "none",
                borderBottomRightRadius: 8,
                color: "white"
              }}
            >
              <SearchIcon  />
            </button>
          </div>
        </div>
      </center>
    </div>
  </div>


          <div className="row p-1 pt-2" style={{ marginLeft: 2 }}>
            <div className="col">
              <a
                href
                style={{
                  fontSize: 17,
                  fontWeight: 600,
                  textDecoration: "none",
                  color:'#174964 '
                }}
              >
                Advanced Search
              </a>{" "}
            </div>
          </div>
          <br />
          <br />
          <div className="row " style={{}}>
            <div className="col ">
              <button
                className="p-1 but"
                style={{
                  outline: "none",
                  width: "100%",
                  borderRadius: 20,
                  fontSize: 15
                }}
              >
                Their are new Jobs click to see them
              </button>
            </div>
          </div>
          <br />
          <div
            className="container "
            style={{
              width: "100%",
              backgroundColor: "white",
              zIndex: 7,
              boxShadow:
                "0 0 6px 0 rgba(0,0,0,.12), 0 6px 6px 0 rgba(0,0,0,.24)"
            }}
          >
            <div
              className="row p-2"
              style={{ borderBottom: "2px solid rgb(165, 165, 165)" }}
            >
              <div className="col-10 pt-4 pl-4 pr-4 pb-2">
                <a style={{ fontSize: 25, fontWeight: 600 }}>My Feed</a>
              </div>
              <div className="col-1  p-4">
               <EditIcon style={{ fontSize:20 }}  />
           
              </div>
            </div>
          </div>
          <div
            className="container c123"
            style={{
              width: "100%",
              zIndex: 7,
              boxShadow:
                "0 0 6px 0 rgba(0,0,0,.12), 0 6px 6px 0 rgba(0,0,0,.24)"
            }}
          >
            <div className="row p-2" style={{}}>
              <div className="col-9 pt-2 pl-4 pr-4 pb-2">
                <a
                  href
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    textDecoration: "none",
                    color:'#174964 '
                  }}
                >
                  Reviewer for paper related to computer
                </a>
                <br />
                <a style={{ fontSize: 13, fontWeight: 500 }}>
                  Fixed-price-Intermediate-Est.Budget:$200-Posted 1 hour ago
                </a>
              </div>
              <div className="col-1  p-4">
                <button
                  className="bt2 close p-1 "
                  style={{
                    outline: "none",
                    borderRadius: "100%",
                    border: "1px solid rgb(82, 82, 82)"
                  }}
                >
                  <ThumbDownIcon
                    style={{ borderRadius: "100%",color:"#174964 "  }}
                   
                  />
                </button>
              </div>
              <div className="col-1  p-4">
                <button
                  className="bt2 close p-1 "
                  style={{
                    outline: "none",
                    borderRadius: "100%",
                    border: "1px solid rgb(82, 82, 82)"
                  }}
                >
                  <FavoriteIcon 
                    style={{ borderRadius: "100%",color:"red" }}
                  
                  />
                </button>
              </div>
            </div>
            <div className="row p-1" style={{}}>
              <div className="col pb-2">
                <a style={{ fontSize: 15 }}>
                  We need Android or IOS users, who are willing to download,
                  install and use a dating app to their phones and perform some
                  testing. We need users in France, Germany, Spain, Malay,
                  Indonesia and Turkey As a user in your country, we want to see
                  your experience and hear your feedback. Your test is separated
                  into three parts: 1. Review app Store information. 2. Record a
                  video (screen recording) of your entire app experience (from
                  account creation to using main features to logging in out and
                  deleting your account). 3. Provide written feedback on your
                  overall experience by answering questions that will be shared
                  with you and providing your own personal feedback. Your phone
                  will need to be set to the same language where you performing
                  the test.
                </a>
                <a
                  href
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    textDecoration: "none",
                    color:'#174964 '
                  }}
                >
                  .less
                </a>
              </div>
            </div>
            <div className="row p-1" style={{}}>
              <div className="col pb-2">
                <a style={{ fontSize: 13, fontWeight: 700 }}>
                  Proposals:&nbsp;
                </a>
                <a
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    textDecoration: "none",
                    color:'#174964 '
                  }}
                >
                  10 to 15
                </a>
                &nbsp;&nbsp;&nbsp;
                <a style={{ fontSize: 13, fontWeight: 700 }}>
                  Numbers of Position:&nbsp;
                </a>
                <a
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    textDecoration: "none",
                    color:'#174964 '
                  }}
                >
                  8
                </a>
              </div>
            </div>
            <div className="row p-1" style={{}}>
              <div className="col pb-2">
                <a
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    textDecoration: "none",
                    color:'#174964 '
                  }}
                >
                  <VerifiedUserIcon />
                </a>{" "}
                <a style={{ fontSize: 13, fontWeight: 600 }}>
                 Started Salary
                </a>
                &nbsp;&nbsp;&nbsp;
                <a
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    textDecoration: "none",
                    color:'#174964 '
                  }}
                >
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </a>
                &nbsp;&nbsp;&nbsp;
                <a style={{ fontSize: 13, fontWeight: 700 }}>$30k+</a>
                <a style={{ fontSize: 13, fontWeight: 600 }}>spent</a>
                &nbsp;&nbsp;&nbsp;
                <a style={{ fontSize: 13, fontWeight: 700 }}>
                  <i className="fas fa-map-marker-alt" />
                </a>
                <a style={{ fontSize: 13, fontWeight: 600 }}>Pakistan</a>
              </div>
            </div>
          </div>
          <div
            className="container c123"
            style={{
              width: "100%",
              zIndex: 7,
              boxShadow:
                "0 0 6px 0 rgba(0,0,0,.12), 0 6px 6px 0 rgba(0,0,0,.24)"
            }}
          >
            <div className="row p-2" style={{}}>
              <div className="col-9 pt-2 pl-4 pr-4 pb-2">
                <a
                  href
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    textDecoration: "none",
                    color:'#174964 '
                  }}
                >
                  Reviewer for paper related to computer
                </a>
                <br />
                <a style={{ fontSize: 13, fontWeight: 500 }}>
                  Fixed-price-Intermediate-Est.Budget:$200-Posted 1 hour ago
                </a>
              </div>
              <div className="col-1  p-4">
                <button
                  className="bt2 close p-1 "
                  style={{
                    outline: "none",
                    borderRadius: "100%",
                    border: "1px solid rgb(82, 82, 82)"
                  }}
                >
                  <ThumbDownIcon 
                    style={{ borderRadius: "100%",color:"#174964 "  }}
                   
                  />
                </button>
              </div>
              <div className="col-1  p-4">
                <button
                  className="bt2 close p-1 "
                  style={{
                    outline: "none",
                    borderRadius: "100%",
                    border: "1px solid rgb(82, 82, 82)"
                  }}
                >
                  <FavoriteIcon
                    style={{ borderRadius: "100%",color:"red "  }}
                   
                  />
                </button>
              </div>
            </div>
            <div className="row p-1" style={{}}>
              <div className="col pb-2">
                <a style={{ fontSize: 15 }}>
                  We need Android or IOS users, who are willing to download,
                  install and use a dating app to their phones and perform some
                  testing. We need users in France, Germany, Spain, Malay,
                  Indonesia and Turkey As a user in your country, we want to see
                  your experience and hear your feedback. Your test is separated
                  into three parts: 1. Review app Store information. 2. Record a
                  video (screen recording) of your entire app experience (from
                  account creation to using main features to logging in out and
                  deleting your account). 3. Provide written feedback on your
                  overall experience by answering questions that will be shared
                  with you and providing your own personal feedback. Your phone
                  will need to be set to the same language where you performing
                  the test.
                </a>
                <a
                  href
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    textDecoration: "none",
                    color:'#174964 '
                  }}
                >
                  .less
                </a>
              </div>
            </div>
            <div className="row p-1" style={{}}>
              <div className="col pb-2">
                <a style={{ fontSize: 13, fontWeight: 700 }}>
                  Proposals:&nbsp;
                </a>
                <a
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    textDecoration: "none",
                    color:'#174964 '
                  }}
                >
                  10 to 15
                </a>
                &nbsp;&nbsp;&nbsp;
                <a style={{ fontSize: 13, fontWeight: 700 }}>
                  Numbers of Position:&nbsp;
                </a>
                <a
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    textDecoration: "none",
                    color:'#174964 '
                  }}
                >
                  8
                </a>
              </div>
            </div>
            <div className="row p-1" style={{}}>
              <div className="col pb-2">
                <a
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    textDecoration: "none",
                    color:'#174964 '
                  }}
                >
                  <VerifiedUserIcon />
                </a>{" "}
                <a style={{ fontSize: 13, fontWeight: 600 }}>
                 Started Salary
                </a>
                &nbsp;&nbsp;&nbsp;
                <a
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    textDecoration: "none",
                    color:'#174964 '
                  }}
                >
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </a>
                &nbsp;&nbsp;&nbsp;
                <a style={{ fontSize: 13, fontWeight: 700 }}>$30k+</a>
                <a style={{ fontSize: 13, fontWeight: 600 }}>spent</a>
                &nbsp;&nbsp;&nbsp;
                <a style={{ fontSize: 13, fontWeight: 700 }}>
                  <i className="fas fa-map-marker-alt" />
                </a>
                <a style={{ fontSize: 13, fontWeight: 600 }}>Pakistan</a>
              </div>
            </div>
          </div>
          <div
            className="container c123"
            style={{
              width: "100%",
              zIndex: 7,
              boxShadow:
                "0 0 6px 0 rgba(0,0,0,.12), 0 6px 6px 0 rgba(0,0,0,.24)"
            }}
          >
            <div className="row p-2" style={{}}>
              <div className="col-9 pt-2 pl-4 pr-4 pb-2">
                <a
                  href
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    textDecoration: "none",
                    color:'#174964 '
                  }}
                >
                  Reviewer for paper related to computer
                </a>
                <br />
                <a style={{ fontSize: 13, fontWeight: 500 }}>
                  Fixed-price-Intermediate-Est.Budget:$200-Posted 1 hour ago
                </a>
              </div>
              <div className="col-1  p-4">
                <button
                  className="bt2 close p-1 "
                  style={{
                    outline: "none",
                    borderRadius: "100%",
                    border: "1px solid rgb(82, 82, 82)"
                  }}
                >
                  <ThumbDownIcon
                    style={{ borderRadius: "100%",color:"#174964 "  }}
                   
                  />
                </button>
              </div>
              <div className="col-1  p-4">
                <button
                  className="bt2 close p-1 "
                  style={{
                    outline: "none",
                    borderRadius: "100%",
                    border: "1px solid rgb(82, 82, 82)"
                  }}
                >
                  <FavoriteIcon
                    style={{ borderRadius: "100%",color:"red "  }}
                  
                  />
                </button>
              </div>
            </div>
            <div className="row p-1" style={{}}>
              <div className="col pb-2">
                <a style={{ fontSize: 15 }}>
                  We need Android or IOS users, who are willing to download,
                  install and use a dating app to their phones and perform some
                  testing. We need users in France, Germany, Spain, Malay,
                  Indonesia and Turkey As a user in your country, we want to see
                  your experience and hear your feedback. Your test is separated
                  into three parts: 1. Review app Store information. 2. Record a
                  video (screen recording) of your entire app experience (from
                  account creation to using main features to logging in out and
                  deleting your account). 3. Provide written feedback on your
                  overall experience by answering questions that will be shared
                  with you and providing your own personal feedback. Your phone
                  will need to be set to the same language where you performing
                  the test.
                </a>
                <a
                  href
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    textDecoration: "none",
                    color:'#174964 '
                  }}
                >
                  .less
                </a>
              </div>
            </div>
            <div className="row p-1" style={{}}>
              <div className="col pb-2">
                <a style={{ fontSize: 13, fontWeight: 700 }}>
                  Proposals:&nbsp;
                </a>
                <a
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    textDecoration: "none",
                    color:'#174964 '
                  }}
                >
                  10 to 15
                </a>
                &nbsp;&nbsp;&nbsp;
                <a style={{ fontSize: 13, fontWeight: 700 }}>
                  Numbers of Position:&nbsp;
                </a>
                <a
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    textDecoration: "none",
                    color:'#174964 '
                  }}
                >
                  8
                </a>
              </div>
            </div>
            <div className="row p-1" style={{}}>
              <div className="col pb-2">
                <a
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    textDecoration: "none",
                    color:'#174964 '
                  }}
                >
                  <VerifiedUserIcon />
                </a>{" "}
                <a style={{ fontSize: 13, fontWeight: 600 }}>
                 Started Salary
                </a>
                &nbsp;&nbsp;&nbsp;
                <a
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    textDecoration: "none",
                    color:'#174964 '
                  }}
                >
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </a>
                &nbsp;&nbsp;&nbsp;
                <a style={{ fontSize: 13, fontWeight: 700 }}>$30k+</a>
                <a style={{ fontSize: 13, fontWeight: 600 }}>spent</a>
                &nbsp;&nbsp;&nbsp;
                <a style={{ fontSize: 13, fontWeight: 700 }}>
                  <i className="fas fa-map-marker-alt" />
                </a>
                <a style={{ fontSize: 13, fontWeight: 600 }}>Pakistan</a>
              </div>
            </div>
          </div>
          <div
            className="container c123"
            style={{
              width: "100%",
              zIndex: 7,
              boxShadow:
                "0 0 6px 0 rgba(0,0,0,.12), 0 6px 6px 0 rgba(0,0,0,.24)"
            }}
          >
            <div className="row p-2" style={{}}>
              <div className="col-9 pt-2 pl-4 pr-4 pb-2">
                <a
                  href
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    textDecoration: "none",
                    color:'#174964 '
                  }}
                >
                  Reviewer for paper related to computer
                </a>
                <br />
                <a style={{ fontSize: 13, fontWeight: 500 }}>
                  Fixed-price-Intermediate-Est.Budget:$200-Posted 1 hour ago
                </a>
              </div>
              <div className="col-1  p-4">
                <button
                  className="bt2 close p-1 "
                  style={{
                    outline: "none",
                    borderRadius: "100%",
                    border: "1px solid rgb(82, 82, 82)"
                  }}
                >
                  <ThumbDownIcon
                    style={{ borderRadius: "100%",color:"#174964 "  }}
                    
                  />
                </button>
              </div>
              <div className="col-1  p-4">
                <button
                  className="bt2 close p-1 "
                  style={{
                    outline: "none",
                    borderRadius: "100%",
                    border: "1px solid rgb(82, 82, 82)"
                  }}
                >
                  <FavoriteIcon
                    style={{ borderRadius: "100%",color:"red "  }}
                   
                  />
                </button>
              </div>
            </div>
            <div className="row p-1" style={{}}>
              <div className="col pb-2">
                <a style={{ fontSize: 15 }}>
                  We need Android or IOS users, who are willing to download,
                  install and use a dating app to their phones and perform some
                  testing. We need users in France, Germany, Spain, Malay,
                  Indonesia and Turkey As a user in your country, we want to see
                  your experience and hear your feedback. Your test is separated
                  into three parts: 1. Review app Store information. 2. Record a
                  video (screen recording) of your entire app experience (from
                  account creation to using main features to logging in out and
                  deleting your account). 3. Provide written feedback on your
                  overall experience by answering questions that will be shared
                  with you and providing your own personal feedback. Your phone
                  will need to be set to the same language where you performing
                  the test.
                </a>
                <a
                  href
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    textDecoration: "none",
                    color:'#174964 '
                  }}
                >
                  .less
                </a>
              </div>
            </div>
            <div className="row p-1" style={{}}>
              <div className="col pb-2">
                <a style={{ fontSize: 13, fontWeight: 700 }}>
                  Proposals:&nbsp;
                </a>
                <a
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    textDecoration: "none",
                    color:'#174964 '
                  }}
                >
                  10 to 15
                </a>
                &nbsp;&nbsp;&nbsp;
                <a style={{ fontSize: 13, fontWeight: 700 }}>
                  Numbers of Position:&nbsp;
                </a>
                <a
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    textDecoration: "none",
                    color:'#174964 '
                  }}
                >
                  8
                </a>
              </div>
            </div>
            <div className="row p-1" style={{}}>
              <div className="col pb-2">
                <a
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    textDecoration: "none",
                    color:'#174964 '
                  }}
                >
                  <VerifiedUserIcon />
                </a>{" "}
                <a style={{ fontSize: 13, fontWeight: 600 }}>
                 Started Salary
                </a>
                &nbsp;&nbsp;&nbsp;
                <a
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    textDecoration: "none",
                    color:'#174964 '
                  }}
                >
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </a>
                &nbsp;&nbsp;&nbsp;
                <a style={{ fontSize: 13, fontWeight: 700 }}>$30k+</a>
                <a style={{ fontSize: 13, fontWeight: 600 }}>spent</a>
                &nbsp;&nbsp;&nbsp;
                <a style={{ fontSize: 13, fontWeight: 700 }}>
                  <i className="fas fa-map-marker-alt" />
                </a>
                <a style={{ fontSize: 13, fontWeight: 600 }}>Pakistan</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3 ">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="row" style={{}}>
            <div className="col">
              <img
                style={{ width: 50, borderRadius: "100%" }}
                src="images/profile.PNG"
             
              />
              &nbsp;
              <a style={{ fontSize: 17, fontWeight: 600,color:"#174964" }}>My profile</a>{" "}
            </div>
          </div>
          <br />
          <div className="row " style={{}}>
            <div className="col " style={{ marginLeft: -5 }}>
              <a
                href
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  textDecoration: "none",
                  color: "#174964 "
                }}
              >
                <VisibilityIcon /> &nbsp; View Profile
              </a>{" "}
            </div>
          </div>
          <br />
          <div className="row" style={{}}>
            <div className="col">
              <a style={{ fontSize: 14, fontWeight: 600,
                  color: "#174964 " }}>Visiblity</a>
              <br />
              <LanguageIcon style={{ fontSize: 18,color:"#174964 "  }} />
              &nbsp;
              <a style={{ fontSize: 15, fontWeight: 500,color:"#174964 " }}>Public</a>{" "}
              &nbsp;&nbsp;
             
            
              
            <EditIcon style={{fontSize:'18px',cursor:'pointer',color:"#174964 "  }} />
              
            </div>
          </div>
          <br />
            
           
          <br />
          <div className="row" style={{}}>
            <div className="col-10" >
              <a style={{ fontSize: 17, fontWeight: 600,color: "#174964 " }}>
                Profile Completion
              </a>
              <br />
              <br />
              <div className="progress" style={{color: "#174964 "}}>
                <div
                  className="progress-bar "
                  role="progressbar"
                  aria-valuenow={70}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "70%",color: "white" }}
                >
                  <span className="sr-only">70% Complete</span>
                  <a style={{ fontSize: 0, fontWeight: 700,color: "WHITE" }}>70% Complete</a>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="row " style={{}}>
            <div className="col-1 p-1 " style={{ marginLeft: 10 }}>
              <AddIcon style={{ color: "#174964 " }} />
            </div>
            <div className="col-8 " style={{}}>
              <a
              
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  textDecoration: "none",
                  color: "#174964 "
                }}
              >
                {" "}
                Add a linked social account +10%
              </a>
            </div>
          </div>
          <br />
          <div className="row " style={{}}>
            <a style={{ fontSize: 15, fontWeight: 700,color:"#174964 " }}>
              Your project catalogue
            </a>
            <br />
            <div className="col pt-1" style={{ marginLeft: 4 }}>
              <WorkOutlineIcon style={{ color: "#174964 ",fontSize:22 }} />
              &nbsp;
              <a
            
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  textDecoration: "none",
                  color: "#174964"
                }}
              >
                {" "}
                My Project Dashboard
              </a>
            </div>
          </div>
          <br />
          <div className="row " style={{}}>
            <a style={{ fontSize: 15, fontWeight: 700,color:"#174964 " }}>Proposals</a>
            <br />
            <a
       
              style={{
                fontSize: 12,
                fontWeight: 600,
                textDecoration: "none",
                color: "#174964"
              }}
            >
              50 available content{" "}
            </a>
            <br />
            <div className="col-1 p-1 " style={{ marginLeft: 10 }}>
              <AddIcon style={{ color: "#174964",fontSize:22 }} />
            </div>
            <div className="col-8 " style={{}}>
              <a
                href
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  textDecoration: "none",
                  color: "#174964"
                }}
              >
                {" "}
                Add a linked social account +10%
              </a>
            </div>
          </div>
          <br />
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

    )
}
export default Main