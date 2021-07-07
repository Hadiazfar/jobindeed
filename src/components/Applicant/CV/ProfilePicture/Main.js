import "../../../../../node_modules//bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./ProfilePicture.css"
import SidePanel from "../Sidepanel/SidePanel";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Link } from "react-router-dom";

function Main(){        
//     const imgDiv = document.querySelector('.profile-pic-div');
//   const img = document.querySelector('#photo');
//   const file = document.querySelector('#file');
//   const uploadBtn = document.querySelector('#uploadBtn');

//   imgDiv.addEventListener('mouseenter', function(){
//     uploadBtn.style.display = "block";
// });

// imgDiv.addEventListener('mouseleave', function(){
//   uploadBtn.style.display = "none";
// });

// file.addEventListener('change', function(){
  
//   const choosedFile = this.files[0];

//   if (choosedFile) {

//       const reader = new FileReader(); 

//       reader.addEventListener('load', function(){
//           img.setAttribute('src', reader.result);
//       });

//       reader.readAsDataURL(choosedFile);

      
//   }
// });
    return(
        <div className ="Profilepic">
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
       PersonIcon={<CheckCircleIcon style={{ fontSize: 20, color: '#174964' }} />}
       PhotoCameraIcon={<CheckCircleIcon style={{ fontSize: 20, color: '#174964' }} />}
       LocationOnIcon={<CheckCircleOutlineIcon style={{ fontSize: 20, color: 'gray' }}/>}
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
        <a style={{ fontSize: 22, fontWeight: 600 }}>Profile Photo</a>
        <br />
        <p style={{ fontSize: 14, fontWeight: 400 }}>Step 10 of 12</p>
      </div>
    </div>
    <br />
    <div className="row" style={{}}>
      <div className="col pt-2 pl-4 pr-4 ">
          
        <a style={{ fontSize: 15, fontWeight: 600 }}>
          Please upload a professional portrait that clearly shows your face
        </a>
        
        <div className="profile-pic-div">
  <img src="images/people.jpg" id="photo" />
  <input type="file" id="file" />
  <label htmlFor="file" id="uploadBtn">
    Choose Photo
  </label>
</div>
      
    
      </div>
    </div>
    <br /><br />
    <br />
    <br /><br />
    <br />
    <br />
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