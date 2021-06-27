import "../../../../../node_modules//bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./Category.css"
import { Link } from "react-router-dom";
function MainMobile(){
    return(
        <div className="Category1 p-0" style={{backgroundColor: 'rgb(243, 247, 247)', paddingLeft: 0, paddingRight: 0}}>
  <div className="container-fluid mq1" style={{width: '100%', paddingLeft: 0, paddingRight: 0}}>
    <div className="col" style={{width: '100%'}}>
      <div className="container  " style={{width: '100%', height: '100%', backgroundColor: 'white', zIndex: 7,}}>
        <div className="row" style={{borderBottom: '2px solid rgb(165, 165, 165)'}}>
          <div className="col pt-4 pl-4 pr-4 pb-2">
            <a style={{fontSize: 22, fontWeight: 600}}>Category</a> 
            <br />
            <p style={{fontSize: 14, fontWeight: 400}}>Step 1 of 12</p>
          </div>
        </div>
        <br />
        <div className="row" style={{}}>
          <div className="col pt-2 pl-4 pr-4 pb-2">
            <a style={{fontSize: 20, fontWeight: 600}}>Tell us about the work you do</a>
          </div>
        </div>
        <br />
    
        <div className="row" style={{}}>
          <div className="col pt-2 pl-4 pr-4 pb-2">
            <a style={{fontSize: 15, fontWeight: 700}}>What is the main service you offer? </a> <br />
         
            <select className="em" name="main" id="main" style={{width: '98%', border: '1px solid black', cursor: 'pointer', height: 40, borderRadius: 5, fontSize: 18, fontWeight: 600, outline: 'none '}}>
              <option className="em" value="v1">Accounting &amp; Consultation</option>
              <option className="em" value="v2">Admin Support</option>
              <option className="em" value="v3">Customer Service</option>
              <option className="em" value="v4">Data Science &amp; Analytics</option>
              <option className="em" value="v5">Design &amp; Creative</option>
              <option className="em" value="v6">Engineering &amp; Architecture</option> 
              <option className="em" value="v7">Sales &amp; Marketing</option>
              <option className="em" value="v8">IT &amp; Networkinh</option>
              <option className="em" value="v9">Legal</option>
              <option className="em" value="v10">Translation</option>
              <option className="em" value="v11">Web,Mobile&amp; software Dev</option>
              <option className="em" value="v12">Writing</option>
            </select> <br />
            <br />
            <a style={{fontSize: 15, fontWeight: 700}}>What is the other service you offer? </a> <br />
            <select className="em" name="sub" id="subcat" style={{width: '98%', border: '1px solid black', cursor: 'pointer', height: 40, borderRadius: 5, fontSize: 18, fontWeight: 600, outline: 'none '}}>
              <option className="em" value="vs1">Accounting</option>
              <option className="em" value="vs2">Financial planning</option>
              <option className="em" value="vs3">Human Resources</option>
              <option className="em" value="vs4">Management Consulting</option>
              <option className="em" value="vs5">Other- Accounting &amp; Consulting</option>
            </select>
            <br />
         
            <br /><br />
          </div>
        </div>
        <div className="row pt-4" style={{borderTop: '3px solid rgb(165, 165, 165)'}}>
          <div className="col-5  pl-4 pr-4 pb-3">
          <Link to = '/Guide'><button className="p-2 but" style={{outline: 'none', width: '90%', borderRadius: 20}}>Back</button></Link>
          </div>
          <div className="col-5 offset-2 pt-0 pl-4 pr-4 pb-3">
          <Link to = '/Expertisecv'><button className="p-2 but" style={{outline: 'none', width: '90%', borderRadius: 20}}>Next</button></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}
export default MainMobile