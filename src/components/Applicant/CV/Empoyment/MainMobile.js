import "../../../../../node_modules//bootstrap/dist/css/bootstrap.min.css";
import React,{useState} from "react";
import "./Employment.css"
// import { Link } from "react-router-dom";
function MainMobile(){

  var [box1,setbox] = useState(false);
  var [box2,setbox1] = useState(false);
return(
<div
  className="Employment1 p-0"
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
        className="container  "
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
      </div>
    </div>
    <div
      className={box2?"box2":"boxoff"}
      id="gr1"
    >
      <div
        className="container  "
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
          style={{ borderBottom: "2px solid rgb(165, 165, 165)" }}
        >
          <div className="col pt-4 pl-4 pr-4 pb-2">
            <a style={{ fontSize: 22, fontWeight: 600 }}>Add Employment</a>
            <br />
          </div>
        </div>
        <br />
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
                    width: "95%",
                    height: 43,
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
              className="row   p-0"
              style={{
                width: "98%",
                height: 50,
                borderRadius: 12,
                border: "1px solid rgb(212, 211, 211)"
              }}
            >
              <div className="col-12  pl-0 pr-2" style={{ paddingRight: 0 }}>
                <input
                  className="em pr-0"
                  placeholder="City"
                  style={{
                    width: "93%",
                    height: 43,
                    border: "none",
                    outline: "none",
                    fontSize: 15
                  }}
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="col-6" style={{}}>
            <select
              className="em"
              name="main"
              id="main"
              style={{
                outline: "none",
                width: "93%",
                borderRadius: 12,
                height: 50,
                paddingBottom: 10,
                border: "1px solid rgb(212, 211, 211)"
              }}
            >
              <option className="em" value="v1">
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
          <a style={{ fontSize: 15, fontWeight: 600 }}>Title:</a>
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
                    width: "95%",
                    height: 43,
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
        
        <div className="row" style={{ marginLeft: 8 }}>
          <a style={{ font: "size 15px", fontWeight: 600 }}>Period: </a>
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
          <div className="col-6">
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
        <div className="row" style={{ marginLeft: 8 }}>
          <a style={{ font: "size 15px", fontWeight: 600 }}>through: </a>
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
                  placeholder="Year"
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
        <div className="row " style={{ marginLeft: 20, paddingRight: 28 }}>
          <div className="col containers" style={{}}>
            <label className="containers">
              <a style={{ fontSize: 15, fontWeight: 600 }}>
                I currently work here
              </a>
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
          </div>
        </div>
        <br />
    
        <div className="row" style={{ marginLeft: 10 }}>
          <a style={{ fontSize: 15, fontWeight: 600 }}>
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
                    width: "95%",
                    height: 43,
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
        
    <center>
  <div className="col-12  pl-4 pr-4 pb-3 ">
    <button
    onClick={()=>
    {setbox1(false)
    setbox(false)
    }}
      className="p-2 but"
      id="bton2"
      style={{ outline: "none", width: "96%", borderRadius: 20,border: "1px solid rgb(212, 211, 211)" }}
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
      style={{ outline: "none", width: "96%", borderRadius: 20,border: "1px solid rgb(212, 211, 211)" }}
    >
      Cancel
    </button>

  </div>
  </center>
        </div>
      </div>
    </div>
  </div>



)
}
export default MainMobile