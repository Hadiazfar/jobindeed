import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./Budget.css";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Button from "../../job_posting_steps/Button/Button";
function MainMobile() {
  return (
    <div className="Budget1">
      <div className="container mq1" style={{ width: "100%" }}>
        <div
          className="row"
          style={{ borderBottom: "3px solid rgb(165, 165, 165)" }}
        >
          <div className="col pt-4 pl-4 pr-4 pb-2">
            <p style={{ fontSize: 28, fontWeight: 700 }}>Budget</p>
            <p style={{ fontSize: 18, fontWeight: 400 }}>Step 4 of 5</p>
          </div>
        </div>

        <div className="row" style={{}}>
          <div className="col pt-2 pl-4 pr-4 pb-2">
            <p style={{ fontSize: 15, fontWeight: 700 }}>
              Set the pay for your employee:
            </p>
          </div>
        </div>

        <div
          className="row "
          style={{ width: "100%", height: 60, marginLeft: 5 }}
        >
          <div className="col-6 " style={{}}>
            <div
              className="row   p-0"
              style={{
                width: "100%",
                height: 50,
                borderRadius: 12,
                border: "2px solid black",
              }}
            >
              <div className="col-1 p-0 ">
                <p style={{ fontSize: 25, fontWeight: 700 }}>&nbsp;$</p>{" "}
              </div>
              <div className="col-10  pl-1 pr-0" style={{ paddingRight: 0 }}>
                <input
                  className="em pr-0"
                  placeholder=" "
                  style={{
                    width: "100%",
                    height: 41,
                    border: "none",
                    outline: "none",
                    fontSize: 20,
                  }}
                  type="number"
                />
              </div>
            </div>
          </div>
          <div className="col-6" style={{}}>
            <select
              className="em"
              name="cars"
              id="cars"
              style={{
                width: "98%",
                border: "2px solid black",
                cursor: "pointer",
                height: 50,
                borderRadius: 12,
                fontSize: 25,
                outline: "none !important",
              }}
            >
              <option className="em" value="volvo">
                months
              </option>
              <option className="em" value="saab">
                hours
              </option>
              <option className="em" value="opel">
                days
              </option>
            </select>
          </div>
        </div>
        <br />

        <div className="row">
          <div className="col pt-2 pl-4 pr-4 pb-2">
            <p style={{ fontSize: 15, fontWeight: 700 }}>
              You want a permanent employee or temporary employee ?{" "}
            </p>

            <button style={{ width: "100%" }} className="p-2 bt3">
              <p style={{ fontSize: 17, fontWeight: 700 }}>
                Permanent Employee
              </p>
            </button>
            <br />
            <br />
            <button style={{ width: "100%" }} className="p-2 bt3">
              <p style={{ fontSize: 17, fontWeight: 700 }}>
                Temporary Employee
              </p>
            </button>
            <br />
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col pt-2 pl-4 pr-4 pb-2">
            <p style={{ fontSize: 15, fontWeight: 700 }}>
              If you want a temporary employee then also fill the below fields{" "}
            </p>
          </div>
        </div>
        <div className="row" style={{ marginLeft: 5 }}>
          <div className="col-6" style={{}}>
            <div
              className="row   p-0"
              style={{
                width: "100%",
                height: 50,
                borderRadius: 12,
                border: "2px solid black",
              }}
            >
              <div className="col-12  pl-1 pr-0" style={{ paddingRight: 0 }}>
                <input
                  className="em pr-0"
                  placeholder=" "
                  style={{
                    width: "95%",
                    height: 43,
                    border: "none",
                    outline: "none",
                    fontSize: 20,
                  }}
                  type="number"
                />
              </div>
            </div>
          </div>
          <div className="col-6 pt-2">
            <p style={{ fontSize: 13, fontWeight: 700 }}>month/hours/days</p>
          </div>
        </div>
        <div className="row" style={{}}>
          <div className="col pt-2 pl-4 pr-4 pb-2">
            <p style={{ fontSize: 11, fontWeight: 700 }}>
              For how many months your wants to hire for expamle 1 or 2 etc{" "}
            </p>
          </div>
        </div>
        <br />

        <div
          className="row"
          style={{ borderTop: "3px solid rgb(165, 165, 165)" }}
        >
          <Button />
        </div>
      </div>
    </div>
  );
}
export default MainMobile;
