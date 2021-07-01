import "../../../../../node_modules//bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./Titlecv.css"
function MainMobile(){
return(
<div
  className="Titlecv1 p-0"
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
        <a style={{ fontSize: 22, fontWeight: 600 }}>Title &amp; Overview</a>
        <br />
        <p style={{ fontSize: 14, fontWeight: 400 }}>Step 9 of 12</p>
      </div>
    </div>
    <br />
    <br />
         <div className="row" style={{}}>
      <div className="col pt-2 pl-4 pr-4 ">
        <a style={{ fontSize: 13, fontWeight: 700 }} />
        <a
     
          style={{ fontSize: 15, fontWeight: 700, textDecoration: "none" }}
        >
          Learn more about writing a great profile or browse profiles in your category.
        {" "} </a>
        <br />
        <br />
      </div>
    </div>
    &ensp;&ensp;<a style={{ fontSize: 15, fontWeight: 600 }}>
            Title
            </a>   
        <div className="row" style={{}}>
        
          <div className="col-12" style={{}}>
          
         
            <div
            
              className="row   p-1 "
    
              style={{
                width: "95%",
                height: 40,
                border: "1px solid rgb(212, 211, 211)",
                marginLeft: 13,
                borderRadius: '11px',
              }}
            >
              
              <div className="col-12  pl-1  pr-0" style={{ paddingRight: 0 }}>
             
                  
                <input
                  className="em pr-0"
                  placeholder="Ex:Engineering & Architecture"
                  style={{
                    width: "100%",
                    height: 33,
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
        <div className="row" style={{}}>
          <div className="col" style={{}}>
           
           
            <div className="row   p-0 " style={{ width: "97%", marginLeft: 2 }}>
              <div className="col-12  pl-1  pr-0" style={{ paddingRight: 0 }}>
              <a style={{ fontSize: 15, fontWeight: 600 }}>
            Professional Overview
            </a>
                <textarea
                  cols={50}
                  placeholder="Highliht Your top top skills,experience,and interests.This is one of the first things client will see on your profile"
                  className="em pr-0"
                  maxLength={5000}
                  style={{
                    width: "100%",
                    fontSize: 15,
                    border: "1px solid rgb(212, 211, 211)",
                    borderRadius: '11px',
                  }}
                  defaultValue={""}
                />
              </div>
              <br />
            </div>
            <br />
                  
            <br />
            <br />
          </div>
        </div>
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
  </div>
</div>

)

}
export default MainMobile