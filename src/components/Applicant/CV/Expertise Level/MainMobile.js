import "../../../../../node_modules//bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./ExpertiseLevel.css"
import { Link } from "react-router-dom";

function MainMobile(){
    return(
<div className="ExpertiseLevel1 p-0" style={{backgroundColor: 'rgb(243, 247, 247)', paddingLeft: 0, paddingRight: 0}}>
  <div className="container-fluid mq1" style={{width: '100%', paddingLeft: 0, paddingRight: 0}}>
    <div className="col" style={{width: '100%'}}>
      <div className="container  " style={{width: '100%', height: '100%', backgroundColor: 'white', zIndex: 7, boxShadow: '0 0 6px 0 rgba(0,0,0,.12), 0 6px 6px 0 rgba(0,0,0,.24)', paddingLeft: 22, paddingRight: 22}}>
        <div className="row" style={{borderBottom: '2px solid rgb(165, 165, 165)'}}>
          <div className="col pt-4 pl-4 pr-4 pb-2">
            <a style={{fontSize: 22, fontWeight: 600}}>Expertise Level</a> 
            <br />
            <p style={{fontSize: 14, fontWeight: 400}}>Step 4 of 12</p>
          </div>
        </div>
        <br />
        <div className="row" style={{}}>
          <div className="col pt-2 pl-4 pr-4 pb-2">
            <a style={{fontSize: 20, fontWeight: 600}}>What is your level of experience in this field?</a>
          </div>
        </div>
        <div className="row " style={{}}>
          <div className="col pt-2 pl-4 pr-4 pb-2">
            <br /><br />
            <button style={{width: '100%'}} className="p-3 bt3"><a style={{fontSize: 18, fontWeight: 700}}>Entry Level</a><br /><br /> <a style={{fontSize: 13}}> I am relatively new to this  feild</a></button><br /><br />
            <button style={{width: '100%'}} className="p-3 bt3"><a style={{fontSize: 18, fontWeight: 700}}>Intermediate</a><br /><br /> <a style={{fontSize: 13}}> I have substantial experience in this feild</a></button><br /><br />
            <button style={{width: '100%'}} className="p-3 bt3"><a style={{fontSize: 18, fontWeight: 700}}>Expert </a><br /><br /> <a style={{fontSize: 13}}> I have full experties in this feild</a></button><br />
            <br /><br />
            <br /><br />
          </div>
        </div> 
        <div className="row pt-4 pb-4" style={{borderTop: '3px solid rgb(165, 165, 165)'}}>
          <div className="col-5  pl-4 pr-4 pb-3">
            <button className="p-2 but" style={{outline: 'none', width: '90%', borderRadius: 20}}>Back</button>
          </div>
          <div className="col-5 offset-2 pt-0 pl-4 pr-4 pb-3">
            <button className="p-2 but" style={{outline: 'none', width: '90%', borderRadius: 20}}>Next</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}
export default MainMobile