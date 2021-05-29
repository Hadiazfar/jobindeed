import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./City.css";
import EditIcon from "@material-ui/icons/Edit";
import DescriptionIcon from "@material-ui/icons/Description";
import StarsIcon from "@material-ui/icons/Stars";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import CheckIcon from "@material-ui/icons/Check";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
function City() {
  return (
    <div className="col-3">
      <div className="row" style={{ borderLeft: "3px solid #0d6efd" }}>
        <div className="col-3">
          <EditIcon style={{ height: "22px" }} />
        </div>
        <div className="col-6">
          <p style={{ fontSize: 14, fontWeight: 600 }}>Title</p>{" "}
        </div>
        <div className="col-3">
          <CheckCircleIcon style={{ height: "18px" }} />
        </div>
      </div>
      <br />
      <div className="row" style={{}}>
        <div className="col-3">
          <DescriptionIcon style={{ height: "22px" }} />
        </div>
        <div className="col-6">
          <p style={{ fontSize: 14, fontWeight: 600, color: "gray" }}>
            Description
          </p>{" "}
        </div>
        <div className="col-3">
          <CheckCircleOutlineIcon style={{ height: "18px" }} />
        </div>
      </div>
      <br />
      <div className="row" style={{}}>
        <div className="col-3">
          <StarsIcon style={{ height: "22px" }} />
        </div>
        <div className="col-6">
          <p style={{ fontSize: 14, fontWeight: 600, color: "gray" }}>
            Expertise
          </p>{" "}
        </div>
        <div className="col-3">
          <CheckCircleOutlineIcon style={{ height: "18px" }} />
        </div>
      </div>
      <br />
      <div className="row" style={{}}>
        <div className="col-3">
          <AttachMoneyIcon style={{ height: "22px" }} />
        </div>
        <div className="col-6">
          <p style={{ fontSize: 14, fontWeight: 600, color: "gray" }}>Budget</p>{" "}
        </div>
        <div className="col-3">
          <CheckCircleOutlineIcon style={{ height: "18px" }} />
        </div>
      </div>
      <br />
      <div className="row" style={{}}>
        <div className="col-3">
          <CheckIcon style={{ height: "22px" }} />
        </div>
        <div className="col-6">
          <p style={{ fontSize: 14, fontWeight: 600, color: "gray" }}>Review</p>{" "}
        </div>
        <div className="col-3">
          <CheckCircleOutlineIcon style={{ height: "18px" }} />
        </div>
      </div>
    </div>
  );
}
export default City;
