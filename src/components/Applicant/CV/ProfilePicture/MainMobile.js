import React from 'react'
import './ProfilePicture.css'
function MainMobile(){
//     const imgDiv = document.querySelector('.profile-pic-div');
//     const img = document.querySelector('#photo');
//     const file = document.querySelector('#file');
//     const uploadBtn = document.querySelector('#uploadBtn');
  
//     imgDiv.addEventListener('mouseenter', function(){
//       uploadBtn.style.display = "block";
//   });
  
//   imgDiv.addEventListener('mouseleave', function(){
//     uploadBtn.style.display = "none";
//   });
  
//   file.addEventListener('change', function(){
    
//     const choosedFile = this.files[0];
  
//     if (choosedFile) {
  
//         const reader = new FileReader(); 
  
//         reader.addEventListener('load', function(){
//             img.setAttribute('src', reader.result);
//         });
  
//         reader.readAsDataURL(choosedFile);
  
        
//     }
//   });
    return(
        <div
  className="Profilepic1 p-0"
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
      className="col"
      id="bl2"
      style={{ width: "100%", height: "100%", display: "block" }}
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
            <a style={{ fontSize: 22, fontWeight: 600 }}>Profile Photo</a>
            <br />
            <p style={{ fontSize: 14, fontWeight: 400 }}>Step 10 of 12</p>
          </div>
        </div>
        <br />
        <div className="row" style={{}}>
          <div className="col pt-2 pl-4 pr-4 ">
            <a style={{ fontSize: 17, fontWeight: 600 }}>
              Please upload a professional portrait that clearly shows your face
            </a>
           
            
        
            <div className="profile-pic-div">
  <img src="images/people.jpg" id="photo" />
  <input type="file" id="file" />
  <label htmlFor="file" id="uploadBtn">
    Choose Photo
  </label>
</div>
            <br />
            <br />
          </div>
        </div>
       

        <a
          href
          style={{ fontSize: 15, fontWeight: 700, textDecoration: "none" }}
        >
          Skip this step
        </a>{" "}
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
   
</div></div>

    )
}
export default MainMobile