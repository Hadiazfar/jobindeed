import "../../../../../node_modules//bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./Language.css"
import SidePanel from "../Sidepanel/SidePanel";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Link } from "react-router-dom";

function Main(){        
    return(
        <div className ="Language">
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
       TimerIcon={<CheckCircleOutlineIcon style={{ fontSize: 20, color: 'gray' }} />}
       PersonIcon={<CheckCircleOutlineIcon style={{ fontSize: 20, color: 'gray' }} />}
       PhotoCameraIcon={<CheckCircleOutlineIcon style={{ fontSize: 20, color: 'gray' }} />}
       LocationOnIcon={<CheckCircleOutlineIcon style={{ fontSize: 20, color: 'gray' }} />}
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
        <a style={{ fontSize: 22, fontWeight: 600 }}>Languages</a>
        <br />
        <p style={{ fontSize: 14, fontWeight: 400 }}>Step 7 of 12</p>
      </div>
    </div>
    <br />
    <div className="row" style={{}}>
      <div className="col-8 " style={{}}>
          <a style={{ fontSize: 15, fontWeight: 600 }}>What is your English proficiency?</a> 
            <select
              className="em"
              name="main"
              id="main"
              style={{
                outline: "none",
                width: "96%",
                borderRadius: 12,
                height: 50,
                padding:'10px',
                paddingBottom: 10,
                border: "1px solid rgb(212, 211, 211)"
              }}
            >
              <option className="em " value="v1">
              Basic (I write in this language decently)
              </option>
              <option className="em" value="v2">
              Converdational (I write & speak in this language well)
              </option>
              <option className="em" value="v3">
              Fluent (I wirte & speak in this language almost perfectly)
              </option>
              <option className="em" value="v4">
              Native(I wirte & speak in this language perfectly)
              </option>
            </select>
          </div>
    </div>
    <br />
    <div className="row" style={{}}>
      <div className="col pt-2 pl-4 pr-4 ">
        <a style={{ fontSize: 15, fontWeight: 600 }}>
          What other languages do you speak?
        </a>
        <br />
        <br />
      </div>
    </div>
    <div className="row" style={{}}>
    <div className="col-4 " style={{}}>
    <a style={{ fontSize: 15, fontWeight: 600 }}>Languages?</a> 
            <select
              className="em"
              name="main"
              id="main"
              style={{
                outline: "none",
                width: "96%",
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
        
         
          <div className="col-8 " style={{}}>
          <a style={{ fontSize: 15, fontWeight: 600 }}>Proficiency?</a> 
            <select
              className="em"
              name="main"
              id="main"
              style={{
                outline: "none",
                width: "96%",
                borderRadius: 12,
                height: 50,
                padding:'10px',
                paddingBottom: 10,
                border: "1px solid rgb(212, 211, 211)"
              }}
            >
              <option className="em " value="v1">
              Basic (I write in this language decently)
              </option>
              <option className="em" value="v2">
              Converdational (I write & speak in this language well)
              </option>
              <option className="em" value="v3">
              Fluent (I wirte & speak in this language almost perfectly)
              </option>
              <option className="em" value="v4">
              Native(I wirte & speak in this language perfectly)
              </option>
            </select>
          </div>
      <div className="col-1 p-3">
        {" "}
      
    
      </div>
    </div>
    
    <br />
    <br />
    <div
      className="row pt-4 pb-4"
      style={{ borderTop: "2px solid rgb(165, 165, 165)" }}
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
        <br />
        <br />
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