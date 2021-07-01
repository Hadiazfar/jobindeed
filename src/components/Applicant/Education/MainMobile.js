import "../../../../../node_modules//bootstrap/dist/css/bootstrap.min.css";
import React,{useState} from "react";
import "./Education.css"
// import { Link } from "react-router-dom";
function MainMobile(){

  var [box1,setbox] = useState(false);
  var [box2,setbox1] = useState(false);

    return(
        <div className="Education1 p-0"
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
          <div
            className={box1?"boxoff":"box1"}
            id="bl2"
          >
            <div
              className="container-fluid  "
              style={{
                width: "100%",
                backgroundColor: "white",
                zIndex: 7,
           
                paddingLeft: 22,
                paddingRight: 22
              }}
            >
              <div
                className="row"
                style={{ borderBottom: "1px solid rgb(165, 165, 165)" }}
              >
                <div className="col pt-4 pl-4 pr-4 pb-2">
                  <a style={{ fontSize: 25, fontWeight: 700 }}>Education</a>
                  <br />
                  <p style={{ fontSize: 18, fontWeight: 400 }}>Step 5 of 12</p>
                </div>
              </div>
              <br />
              <br />
              <div className="row" style={{}}>
               
              </div>
              <br />
              <div className="row pt-4 pb-4" style={{}}>
                <div className="col  pl-4 pr-4 pb-3">
                  <button
                    value="blue"
                    id="bton1"
                    className="p-2 but"
                    onClick ={()=>
                    {setbox(true)
                    setbox1(true)
                    }
                  }
                    style={{
                      outline: "none",
                      height: 90,
                      width: "90%",
                      borderRadius: 20,
                      backgroundColor: "white",
                      color: "#0d6efd"
                    }}
                  >
                    <i className="fas fa-plus" /> Add Education
                  </button>
                  <br />
                  <br />
                  <br />
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
                  <br />
                  <br />
                  <a
                   
                    style={{ fontSize: 20, fontWeight: 700, textDecoration: "none" }}
                  >
                    Skip this step
                  </a>{" "}
                  <br />
                  <br />
                  <br />
                </div>
              </div>
              <div
                className="row pt-4 pb-4"
                style={{ borderTop: "2px solid rgb(165, 165, 165)" }}
              >
                <div className="col-5  pl-4 pr-4 pt-3 pb-3">
                  <button
                    className="p-3 but"
                    style={{ outline: "none", width: "90%", borderRadius: 20 }}
                  >
                    Back
                  </button>
                </div>
                <div className="col-5 offset-2 pt-3 pl-4 pr-4 pb-3">
                  <button
                    className="p-3 but"
                    style={{ outline: "none", width: "90%", borderRadius: 20 }}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className={box2?"box2":"boxoff"}
            id="gr1"
        
          >
            <div
              className="container "
              style={{ width: "100%", backgroundColor: "white", zIndex: 7 }}
            >
              <div
                className="row"
                style={{ borderBottom: "2px solid rgb(165, 165, 165)" }}
              >
                <div className="col pt-4 pl-4 pr-4 pb-2">
                  <a style={{ fontSize: 22, fontWeight: 600 }}>Add Education</a>
                  <br />
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
              <br />
              <div className="row" style={{}}>
                <div className="col pt-2 pl-4 pr-4 pb-2">
                  <a style={{ fontSize: 17, fontWeight: 600 }}>
                    Area of specialization (Optional)
                  </a>
                  <br />
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
              <br />
              <div className="row" style={{}}>
                <div className="col pt-2 pl-4 pr-4 pb-2">
                  <a style={{ fontSize: 17, fontWeight: 600 }}>Degree (Optional)</a>
                  <br />
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
              <div className="row" >
                <a style={{ fontSize: 17, fontWeight: 600 }}>Dates attended </a>
                <div className="col-6" style={{}}>
                  <div
                    className="row   p-0"
                    style={{
                      width: "100%",
                      height: 50,
                      borderRadius: 12,
                      border: "1px solid rgb(212, 211, 211)",
                      outline: 'none'
                    }}
                  >
                    <div className="col-12  pl-1 pr-0" style={{ paddingRight: 0 }}>
                      <input
                        className="em pr-0"
                        placeholder="Form"
                        style={{
                          width: "95%",
                          height: 43,
                          border: "none",
                          outline: "none",
                          fontSize: 15,
                          outline: 'none'
                        }}
                        type="number"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6" style={{}}>
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
                <a style={{ fontSize: 15, fontWeight: 700 }}>
                  Description (Optional)
                </a>
                <div className="col" style={{}}>
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
                  <br />
                  <br />
                </div>
              </div>
            </div>
            <br />
            <br />
          
 <center>
  <div className="col-12  pl-4 pr-4 pb-3 ">
    <button
    onClick={()=>
    {setbox1(false)
    setbox(false)
    }}
      className="p-2 but"
      id="bton2"
      style={{ outline: "none", width: "75%", borderRadius: 20,border: "1px solid rgb(212, 211, 211)" }}
    >
      Save
    </button>
    <br/>
    <br />
    <button
      className="p-2 but"
      value="blue"
      id="bton4"
      onClick={()=>
        {setbox1(false)
        setbox(false)
        }}
      style={{ outline: "none", width: "75%", borderRadius: 20,border: "1px solid rgb(212, 211, 211)" }}
    >
      Cancel
    </button>

  </div>
  </center>
</div>


          </div>
        
      </div>
  
     
    )
}
export default MainMobile