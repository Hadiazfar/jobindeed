import "../../../../../node_modules//bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./Guide.css"
import { Link } from "react-router-dom";
function MainMobile(){
    return(

<div className="Guide1  " style={{width: '100%'}}>
  <div className="container " style={{width: '100%'}}>
    <div className="row ">
      <div className="col"> 
        <div className="container  " style={{width: '100%', backgroundColor: 'white', zIndex: 7,}}>
          <div className="row " style={{borderBottom: '2px solid rgb(165, 165, 165)'}}>
            <div className="col pt-4 pl-4 pr-4 pb-4">
              <a style={{fontSize: 24, fontWeight: 600}}>Fill out your profile to apply </a> 
            </div>
          </div>
          <br />
          <a style={{fontSize: 18, fontWeight: 500}}>To provide a high quality experience to all customers, admission to Upwork is highly competitive.</a> <br />
          <div className="row" style={{}}>
            <div className="col pt-4 pb-2">
              <p style={{fontSize: 18, fontWeight: 400}}>Here’s how it works:</p>
              <p style={{fontSize: 18, fontWeight: 400}}>1. Fill out your profile thoroughly and accurately</p>
              <p style={{fontSize: 18, fontWeight: 400}}>2. Submit your profile</p>
              <p style={{fontSize: 18, fontWeight: 400}}>3. You’ll receive an email within 24 hours to let you know if you were accepted</p>
              <p style={{fontSize: 18, fontWeight: 400}}>We are currently experiencing a high number of applications. Create a stand-out profile to increase your chances of getting approved!</p>
            </div>
          </div>
          <div className="row">
            <div className="col pt-0 pl-4 pr-4 pb-3">
            <Link to = '/Category'>  <button className="p-2 but" style={{outline: 'none', width: '90%', borderRadius: 20}}>Continue</button> </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}
export default MainMobile