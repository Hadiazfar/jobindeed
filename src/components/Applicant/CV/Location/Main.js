import "../../../../../node_modules//bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./Location.css"
import SidePanel from "../Sidepanel/SidePanel";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Link } from "react-router-dom";

function Main(){        
    return(
        <div className ="Location">
        <div className="container-fluid b" style={{backgroundColor: 'rgb(243, 247, 247)', zIndex: 5}}>
  <div className="container pt-2" style={{zIndex: 6}}>
    <div className="row"><div className="col-3 offset-1 ">
        <br />
        <SidePanel 
       CheckCircleOutlineIcon={<CheckCircleIcon style={{ fontSize: 20, color: '#174964' }} />}
       CategoryIcon={<CheckCircleIcon style={{ fontSize: 20, color: '#174964' }} />}
       AccessibleIcon={<CheckCircleIcon style={{ fontSize: 20, color: '#174964' }} />}
       TimelineIcon={<CheckCircleIcon style={{ fontSize: 20, color: '#174964' }} />}
       SchoolIcon={<CheckCircleIcon style={{ fontSize: 20, color: '#174964' }} />}
       ApartmentIcon={<CheckCircleIcon style={{ fontSize: 20, color: '#174964' }}  />}
       LanguageIcon={<CheckCircleIcon style={{ fontSize: 20, color: '#174964' }} />}
       PersonIcon={<CheckCircleIcon style={{ fontSize: 20, color: '#174964' }}/>}
       PhotoCameraIcon={<CheckCircleIcon style={{ fontSize: 20, color: '#174964' }} />}
       LocationOnIcon={<CheckCircleIcon style={{ fontSize: 20, color: '#174964' }}/>}
       PhoneIcon={<CheckCircleOutlineIcon style={{ fontSize: 20, color: 'gray' }} />}
        
        />
        </div>
       <div className="col-8   pt-4 ">
  <div
    className="container "
    style={{
      width: "100%",
      backgroundColor: "white",
      zIndex: 7,
      boxShadow: "0 0 6px 0 rgba(0,0,0,.12), 0 6px 6px 0 rgba(0,0,0,.24)"
    }}
  >
    <div
      className="row"
      style={{ borderBottom: "2px solid rgb(165, 165, 165)" }}
    >
      <div className="col pt-4 pl-4 pr-4 pb-2">
        <a style={{ fontSize: 22, fontWeight: 600 }}>Location</a>
        <br />
        <p style={{ fontSize: 14, fontWeight: 400 }}>Step 11 of 12</p>
      </div>
    </div>
    <br />
    <div className="row" style={{}}>
      <div className="col pt-2 pl-4 pr-4 ">
        <a style={{ fontSize: 15, fontWeight: 600 }}>Where are you based?</a>
        <br />
        <a style={{ fontSize: 15, fontWeight: 600 }}>
          We take your privacy very seriously. Only your city and country will
          be shown to clients.
        </a>
        <br />
        <br />
        <br />
      </div>
    </div>
    
    <div className="row pt-2" style={{}}>
      <a style={{ fontSize: 14, fontWeight: 700 }}>Country</a>
      <br />
      <div className="col pt-2 pl-4 pr-4 ">
      <div className="col-6 " style={{}}>
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
              <option className="em " value="v1">
              Pakistan
              </option>
              <option className="em" value="v2">
                India
              </option>
              <option className="em" value="v3">
                USA
              </option>
              <option className="em" value="v4">
                China
              </option>
              <option className="em" value="v5">
              Japan
              </option>
              <option className="em" value="v6">
                England
              </option>
              <option className="em" value="v7">
                Austerlia
              </option>
            </select>
          </div>
      </div>
    </div>
    <br />
    <div className="row " style={{}}>
    <div className="col-6 " style={{}}>
    <a style={{ fontSize: 15, fontWeight: 600 }}>Street Address</a> 
    <div
          className="row   p-0"
          style={{ width: "100%", height: 40, border: "1px solid rgb(212, 211, 211)",borderRadius: '12px' }}
        >
          <div className="col-6  pl-1 pr-0" style={{ paddingRight: 0 }}>
            <input
              className="em pr-0"
              placeholder="Street"
              style={{
                width: "100%",
                height: 37,
                border: "none",
                outline: "none",
                fontSize: 15
              }}
              type="text"
            />
          </div>
          
        </div> 
          </div>
        
         
          <div className="col-6 " style={{}}>
          <a style={{ fontSize: 15, fontWeight: 600 }}>House NO?</a> 
          <div
          className="row   p-0"
          style={{ width: "100%", height: 40, border: "1px solid rgb(212, 211, 211)",borderRadius: '12px' }}
        >
          <div className="col-6  pl-1 pr-0" style={{ paddingRight: 0 }}>
            <input
              className="em pr-0"
              placeholder="House No"
              style={{
                width: "95%",
                height: 37,
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
    <a style={{ fontSize: 15, fontWeight: 600 }}>City</a> 
      <div className="col-6 " style={{}}>
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
              <option className="em " value="v1">
              English
              </option>
              <option className="em" value="v2">
                Urdu
              </option>
              <option className="em" value="v3">
                Hindi
              </option>
              <option className="em" value="v4">
                Chinese
              </option>
              <option className="em" value="v5">
                Spanish
              </option>
              <option className="em" value="v6">
                Franch
              </option>
              <option className="em" value="v7">
                German
              </option>
            </select>
          </div>
        
         
          <div className="col-6 " style={{marginTop:'-23px'}}>
          <a style={{ fontSize: 15, fontWeight: 600 }}>Zip Code?</a> 
          <div
          className="row   p-1"
          style={{ width: "100%", height: 50, border: "1px solid rgb(212, 211, 211)",borderRadius: '12px' }}
        >
          <div className="col-6  pl-1 pr-0" style={{ paddingRight: 0 }}>
            <input
              className="em pr-0"
              placeholder="Zip Code"
              style={{
                width: "95%",
                height: 37,
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
        <br />
        <br />
        <br />
        </div>
        </div>
       )
       }

export default Main