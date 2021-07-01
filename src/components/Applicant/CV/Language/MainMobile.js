import "../../../../../node_modules//bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./Language.css"
function MainMobile(){

return(
<div
  className="Language1 p-0"
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
            <a style={{ fontSize: 22, fontWeight: 600 }}>Languages</a>
            <br />
            <p style={{ fontSize: 14, fontWeight: 400 }}>Step 7 of 12</p>
          </div>
        </div>
        <br />
        <div className="row" style={{}}>
          <div className="col pt-2 pl-4 pr-4 ">
            <a style={{ fontSize: 15, fontWeight: 600 }}>
              What is your English proficiency?
            </a>
            <br />
            <br />
            <select
              className="em p-2"
              name="main"
              id="main"
              style={{
                outline: "none",
                width: "100%",
                cursor: "pointer",
                borderRadius: 12,
                height: 50,
                paddingBottom: 10,
                border: "1px solid rgb(212, 211, 211)",
                fontSize: 15,
                fontWeight: 600
              }}
            >
              <option className="em" value="v1">
                Basic (I write in this language decently)
              </option>
              <option className="em" value="v2">
                Converdational (I write &amp; speak in this language well)
              </option>
              <option className="em" value="v3">
                Fluent (I wirte &amp; speak in this language almost perfectly)
              </option>
              <option className="em" value="v4">
                Native(I wirte &amp; speak in this language perfectly)
              </option>
            </select>
            <br />
            <br />
          </div>
        </div>
        <div className="row" style={{}}>
          <div className="col pt-2 pl-4 pr-4 ">
            <a style={{ fontSize: 15, fontWeight: 600 }}>
              What other languages do you speak?
            </a>
            <br />
         
          </div>
        </div>
            <div className="row" style={{}}>
          <div className="col pt-2 pl-4 pr-4 ">
            <a style={{ fontSize: 15, fontWeight: 600 }}>Languages?</a>
          <br />
       
            <select
              className="em p-2"
              name="main"
              id="main"
              style={{
                outline: "none",
                width: "100%",
                height: 40,
                cursor: "pointer",
                borderRadius: 12,
                paddingBottom: 10,
                border: "1px solid rgb(212, 211, 211)",
                fontSize: 15,
                fontWeight: 600
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
            <br />
            <br />
          </div>
        </div>
        <div className="row" style={{}}>
          <div className="col pt-2 pl-4 pr-4 ">
            <a style={{ fontSize: 15, fontWeight: 600 }}>Proficiency?</a>
            
            <select
              className="em p-2"
              name="main"
              id="main"
              style={{
                outline: "none",
                width: "100%",
                height: 40,
                cursor: "pointer",
                borderRadius: 12,
                paddingBottom: 10,
                border: "1px solid rgb(212, 211, 211)",
                fontSize: 15,
                fontWeight: 600
              }}
            >
              <option className="em" value="v1">
                Basic (I write in this language decently)
              </option>
              <option className="em" value="v2">
                Converdational (I write &amp; speak in this language well)
              </option>
              <option className="em" value="v3">
                Fluent (I wirte &amp; speak in this language almost perfectly)
              </option>
              <option className="em" value="v4">
                Native(I wirte &amp; speak in this language perfectly)
              </option>
            </select>
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
