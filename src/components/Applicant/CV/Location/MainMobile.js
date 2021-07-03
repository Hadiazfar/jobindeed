import "../../../../../node_modules//bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./Location.css"
function MainMobile(){

return(
    <div
  className="Location1 p-0"
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
      style={{ width: "100%", display: "block", height: "100%" }}
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
            <a style={{ fontSize: 22, fontWeight: 600 }}>Location</a>
            <br />
            <p style={{ fontSize: 14, fontWeight: 400 }}>Step 11 of 12</p>
          </div>
        </div>
        <br />
        <div className="row" style={{}}>
          <div className="col pt-2 pl-4 pr-4 ">
            <a style={{ fontSize: 15, fontWeight: 700 }}>
              Where are you based?
            </a>
            <br />
            <a style={{ fontSize: 15, fontWeight: 600 }}>
              We take your privacy very seriously. Only your city and country
              will be shown to clients.
            </a>
            <br />
            <br />
            <br />
          </div>
        </div>
        <div className="row pt-2" style={{}}>
          <a style={{ fontSize: 15, fontWeight: 600 }}>Country</a>
          <br />
          <div className="col pt-2 pl-4 pr-4 ">
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
        <div className="row pt-3" style={{}}>
          <br />
          <a style={{ fontSize: 15, fontWeight: 600 }}>Street Address</a>
          <div className="col pt-2" style={{ marginLeft: 9 }}>
            <div
              className="row   p-0"
              style={{ width: "100%", height: 40, border: "1px solid rgb(212, 211, 211)",borderRadius: '12px' }}
            >
              <div className="col-12  pl-1 pr-0" style={{ paddingRight: 0 }}>
                <input
                  className="em pr-0"
                  placeholder="Address"
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
        <div className="row pt-3" style={{}}>
          <br />
          <div className="col pt-2" style={{ marginLeft: 9 }}>
            <div
              className="row   p-0"
              style={{ width: "100%", height: 40, border: "1px solid rgb(212, 211, 211)",borderRadius: '12px' }}
            >
              <div className="col-12  pl-1 pr-0" style={{ paddingRight: 0 }}>
                <input
                  className="em pr-0"
                  placeholder="Apt/Suite"
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
        <div className="row pt-2" style={{}}>
          <a style={{ fontSize: 15, fontWeight: 600 }}>City</a>
          <br />
          <div className="col pt-2 pl-4 pr-4 ">
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
        <div className="row pt-3" style={{}}>
          <br />
          <a style={{ fontSize: 15, fontWeight: 600 }}>ZIP/Postal code</a>
          <div className="col pt-2" style={{ marginLeft: 9 }}>
            <div
              className="row   p-0"
              style={{ width: "100%", height: 40,  border: "1px solid rgb(212, 211, 211)",borderRadius: '12px' }}
            >
              <div className="col-12  pl-1 pr-0" style={{ paddingRight: 0 }}>
                <input
                  className="em pr-0"
                  placeholder="Address"
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
              <br />
              <br />
              <br />
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

)
}
export default MainMobile