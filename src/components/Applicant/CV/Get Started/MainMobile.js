import "../../../../../node_modules//bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./GetStarted.css"
import { Link } from "react-router-dom";
function MainMobile(){
    return(

      
        <div className="GetStarted1  " style={{width: '100%'}}>
  <div className="container " style={{width: '100%'}}>
    <div className="row p-0 ">
      <div className="col"> 
      <br />
      
        <img src="images/main.PNG" style={{width: '100%'}} alt />
      </div>
    </div>
    <div className="row p-0">
      <div className="col"> 
        <div className="container  " style={{width: '90%', backgroundColor: 'white', zIndex: 7}}>
          <div className="row" style={{}}>
            <div className="col pt-4 pl-4 pr-4 "><br />
              <a style={{fontSize: 25, fontWeight: 700}}>Welcome &nbsp;&nbsp; <i className="far fa-handshake" style={{color: '#0d6efd', fontSize: 22}} /></a>
              <br /><br />
              <a style={{fontSize: 21, fontWeight: 500}}>Hi</a> <a style={{fontSize: 20, fontWeight: 600}}> MUhammad Bilal Alam,</a> <br /><br />
              <p style={{fontSize: 19, fontWeight: 400}}>Thanks for your interest in Job indeed,we connect organizations with independents like you</p><br /><br />
              <p style={{fontSize: 19, fontWeight: 400}}>To get started, all you need to do is fill out a profile</p>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col pt-0 pl-4 pr-4 pb-3">
             <Link to='/Guide' ><button className="p-2 but" style={{outline: 'none', width: '90%', borderRadius: 20}}>Continue</button></Link>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  </div>
</div>

    )
}
export default MainMobile