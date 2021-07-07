import React from 'react'
import './Dashboard.css'
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import FavoriteIcon from '@material-ui/icons/Favorite'; 
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
function MainMobile(){
    return(
        <div
  className="MainDashboard1 p-0"
  style={{
    backgroundColor: "white",
    paddingLeft: 0,
    paddingRight: 0
  }}
>
      <br />
      <div
        className="container  "
        style={{
          width: "100%",
          maxWidth: 720,
          backgroundColor: "white",
          zIndex: 7,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
      
        }}
      >
        <div
          className="row  p-3 pb-0"
          style={{
            borderBottom: "1px solid rgb(131, 131, 131)",
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8
          }}
        >
          <div className="col-3 " style={{ borderBottom: "3px solid #174964 " }}>
            <center>
              <button
                className="p-2"
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  outline: "none",
                  border: "none"
                }}
              >
                <a
                  href
                  style={{
                    fontSize: '2vw',
                    fontWeight: 700,
                    textDecoration: "none",
                    color: "#174964 "
                  }}
                >
                  {" "}
                  My Feed{" "}
                </a>
              </button>
            </center>
          </div>
          <div className="col-3 ">
            <center>
              <button
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  outline: "none",
                  border: "none"
                }}
                className="p-2"
              >
                <a
                  href
                  style={{
                    fontSize: '2vw',
                    fontWeight: 700,
                    textDecoration: "none",
                    color: "#174964 "
                  }}
                >
                  {" "}
                  Best Matches{" "}
                </a>
              </button>
            </center>
          </div>
          <div className="col-3 ">
            <center>
              <button
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  outline: "none",
                  border: "none"
                }}
                className="p-2"
              >
                <a
                  href
                  style={{
                    fontSize: '2vw',
                    fontWeight: 700,
                    textDecoration: "none",
                    color: "#174964 "
                  }}
                >
                  {" "}
                  Recommended
                </a>
              </button>
            </center>
          </div>
          <div className="col-3 ">
            <center>
              <button
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  outline: "none",
                  border: "none"
                }}
                className="p-2"
              >
                <a
                  href
                  style={{
                    fontSize: '2vw',
                    fontWeight: 700,
                    textDecoration: "none",
                    color: "#174964 "
                  }}
                >
                  {" "}
                  My proposal
                </a>
              </button>
            </center>
          </div>
        </div>
      </div>
      <div
        className="container c123"
        style={{
          width: "100%",
          maxWidth: 720,
          zIndex: 7,
      
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
                color: "#174964 "
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
                style={{ borderRadius: "100%",color:"#174964 " }}
                
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
              <FavoriteIcon  style={{color:'red'}}/>
            </button>
          </div>
        </div>
        <div className="row p-1" style={{}}>
          <div className="col pb-2">
            <a style={{ fontSize: 15 }}>
              We need Android or IOS users, who are willing to download, install
              and use a dating app to their phones and perform some testing. We
              need users in France, Germany, Spain, Malay, Indonesia and Turkey
              As a user in your country, we want to see your experience and hear
              your feedback. Your test is separated into three parts: 1. Review
              app Store information. 2. Record a video (screen recording) of
              your entire app experience (from account creation to using main
              features to logging in out and deleting your account). 3. Provide
              written feedback on your overall experience by answering questions
              that will be shared with you and providing your own personal
              feedback. Your phone will need to be set to the same language
              where you performing the test.
            </a>
            <a
              href
              style={{
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
                color: "#174964 "
              }}
            >
              .less
            </a>
          </div>
        </div>
        <div className="row p-1" style={{}}>
          <div className="col pb-2">
            <a style={{ fontSize: 13, fontWeight: 700 }}>Proposals:&nbsp;</a>
            <a
              style={{
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                color: "#174964 "
              }}
            >
              10 to 15
            </a>
            <br />
            <a style={{ fontSize: 13, fontWeight: 700 }}>
              Numbers of Position:&nbsp;
            </a>
            <a
              style={{
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                color: "#174964 "
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
                color: "#174964 "
              }}
            >
              <VerifiedUserIcon />
            </a>{" "}
            <a style={{ fontSize: 13, fontWeight: 600 }}>Started Salary</a>
            &nbsp;&nbsp;&nbsp;
            <a style={{ fontSize: 13, fontWeight: 700 }}>30k</a>
           
          </div>
        </div>
      </div>
      <div
        className="container c123"
        style={{
          width: "100%",
          maxWidth: 720,
          zIndex: 7,
      
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
                color: "#174964 "
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
              <FavoriteIcon  style={{color:'red'}}/>
            </button>
          </div>
        </div>
        <div className="row p-1" style={{}}>
          <div className="col pb-2">
            <a style={{ fontSize: 15 }}>
              We need Android or IOS users, who are willing to download, install
              and use a dating app to their phones and perform some testing. We
              need users in France, Germany, Spain, Malay, Indonesia and Turkey
              As a user in your country, we want to see your experience and hear
              your feedback. Your test is separated into three parts: 1. Review
              app Store information. 2. Record a video (screen recording) of
              your entire app experience (from account creation to using main
              features to logging in out and deleting your account). 3. Provide
              written feedback on your overall experience by answering questions
              that will be shared with you and providing your own personal
              feedback. Your phone will need to be set to the same language
              where you performing the test.
            </a>
            <a
              href
              style={{
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
                color: "#174964 "
              }}
            >
              .less
            </a>
          </div>
        </div>
        <div className="row p-1" style={{}}>
          <div className="col pb-2">
            <a style={{ fontSize: 13, fontWeight: 700 }}>Proposals:&nbsp;</a>
            <a
              style={{
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                color: "#174964 "
              }}
            >
              10 to 15
            </a>
            <br />
            <a style={{ fontSize: 13, fontWeight: 700 }}>
              Numbers of Position:&nbsp;
            </a>
            <a
              style={{
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                color: "#174964 "
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
                color: "#174964 "
              }}
            >
              <VerifiedUserIcon />
            </a>{" "}
            <a style={{ fontSize: 13, fontWeight: 600 }}>Started Salary</a>
            &nbsp;&nbsp;&nbsp;
            <a style={{ fontSize: 13, fontWeight: 700 }}>30k</a>
           
          </div>
        </div>
      </div>
      <div
        className="container c123"
        style={{
          width: "100%",
          maxWidth: 720,
          zIndex: 7,
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
      
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
                color: "#174964 "
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
              <FavoriteIcon style={{color:'red'}} />
            </button>
          </div>
        </div>
        <div className="row p-1" style={{}}>
          <div className="col pb-2">
            <a style={{ fontSize: 15 }}>
              We need Android or IOS users, who are willing to download, install
              and use a dating app to their phones and perform some testing. We
              need users in France, Germany, Spain, Malay, Indonesia and Turkey
              As a user in your country, we want to see your experience and hear
              your feedback. Your test is separated into three parts: 1. Review
              app Store information. 2. Record a video (screen recording) of
              your entire app experience (from account creation to using main
              features to logging in out and deleting your account). 3. Provide
              written feedback on your overall experience by answering questions
              that will be shared with you and providing your own personal
              feedback. Your phone will need to be set to the same language
              where you performing the test.
            </a>
            <a
              href
              style={{
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
                color: "#174964 "
              }}
            >
              .less
            </a>
          </div>
        </div>
        <div className="row p-1" style={{}}>
          <div className="col pb-2">
            <a style={{ fontSize: 13, fontWeight: 700 }}>Proposals:&nbsp;</a>
            <a
              style={{
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                color: "#174964 "
              }}
            >
              10 to 15
            </a>
            <br />
            <a style={{ fontSize: 13, fontWeight: 700 }}>
              Numbers of Position:&nbsp;
            </a>
            <a
              style={{
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                color: "#174964 "
              }}
            >
              8
            </a>
          </div>
        </div>
        <div className="row p-1" style={{}}>
          <div className="col pb-1">
            <a
              style={{
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                color: "#174964 "
              }}
            >
              <VerifiedUserIcon />
            </a>{" "}
            <a style={{ fontSize: 13, fontWeight: 600 }}>Started Salary</a>
            &nbsp;&nbsp;&nbsp;
            <a style={{ fontSize: 13, fontWeight: 700 }}>30k</a>
           
          </div>
        </div>
      </div>
      <div className="k">
        <br />
      </div>
    </div>
  


    )
}
export default MainMobile