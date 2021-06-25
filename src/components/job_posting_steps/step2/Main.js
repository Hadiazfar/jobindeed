import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import City from "../City/City";
import "./Description.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import ErrorIcon from "@material-ui/icons/Error";
import Button from "../../job_posting_steps/Button/Button";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
function Main() {
  var [usesubmit, setsubmit] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string()
        .min(100, "Too Short!")
        .max(6001, "Too Long!")
        .required("Please Enter The Description "),
    }),
  });
  return (
    <div className="Description">
      <form onSubmit={formik.handleSubmit}>
        <div
          className="container-fluid b"
          style={{ backgroundColor: "rgb(243, 247, 247)", zIndex: 5 }}
        >
          <div className="container pt-5" style={{ zIndex: 6 }}>
            <div className="row">
              <City 
              
              Title= {<CheckCircleIcon  style={{ color: '#174964', fontSize: '20px',}}/>}
              DescriptionIcon= {<CheckCircleIcon  style={{ color: '#174964', fontSize: '20px',}}/>}
              ExpertiseIcon ={<CheckCircleOutlineIcon style={{  fontSize: '20px',}}/>}
              Budget ={<CheckCircleOutlineIcon style={{  fontSize: '20px',}}/>}
              Review = {< CheckCircleOutlineIcon style={{  fontSize: '20px',}}/>}
              />

              <div className="col-9">
                <div
                  className="container "
                  style={{
                    width: "100%",
                    backgroundColor: "white",
                    zIndex: 7,
                    borderRadius: 6,
                    border: "1px solid rgb(165, 165, 165)",
                  }}
                >
                  <div
                    className="row"
                    style={{ borderBottom: "2px solid rgb(165, 165, 165)" }}
                  >
                    <div className="col pt-2 pl-2 pr-2 ">
                      <br />
                      <p style={{ fontSize: 19, fontWeight: 750 }}>
                        Description
                      </p>
                      <p style={{ fontSize: 15, fontWeight: 400 }}>
                        Step 2 of 5
                      </p>
                    </div>
                  </div>
                  <div className="row" style={{ marginLeft: 5 }}>
                    <div className="col pt-4 pl-4 pr-4 pb-2">
                      <p style={{ fontSize: 15, fontWeight: 600 }}>
                        A good description includes:
                      </p>
                      <p style={{ fontSize: 15, fontWeight: 400 }}>
                        1. &nbsp; What the deileverable is
                      </p>
                      <p style={{ fontSize: 15, fontWeight: 400 }}>
                        2.&nbsp; Type of employee you're looking for{" "}
                      </p>
                      <p style={{ fontSize: 15, fontWeight: 400 }}>
                        3.&nbsp; Anything unique about your company
                      </p>
                      {/* <form> */}
                      <div
                        className="input-group"
                        style={{
                          borderRadius: 12,
                          border: "2px solid grey",
                          width: "96%",
                        
                        }}
                      >
                        <textarea
                          style={{ borderRadius: 12, border: "none",  }}
                          className="form-control"
                          aria-label="With textarea"
                          defaultValue={""}
                          id="firstName"
                          value={formik.values.firstName}
                          onChange={formik.handleChange}
                         
                        />
                      </div>
                    </div>
                    <center>
                      <div className="col 12 p-1">
                        {formik.errors.firstName && usesubmit ? (
                          <div className="descriptionerror">
                            {" "}
                            <ErrorIcon /> {formik.errors.firstName}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </center>

                    <div
                      className="col-5 offset-7"
                      style={{ fontSize: 15, fontWeight: 400 }}
                    >
                      {" "}
                      <span>0</span>/6000 characters (minimum 100)
                    </div>
                  </div>
                  <div className="row" style={{}}>
                    <div className="col pt-3  pb-1">
                      <p style={{ fontSize: 15, fontWeight: 600 }}>
                        Additional Information (optional)
                      </p>
                    </div>
                  </div>
                  <div style={{ paddingLeft: 14 }}>
                    <div
                      className="row pt-4  pb-4"
                      style={{
                        border: "3px dotted #0d6efd",
                        backgroundColor: "whitesmoke",
                        fontSize: 10,
                        fontWeight: 600,
                        width: "97%",
                      }}
                    >
                      <center>
                        <div
                          className="input-group  "
                          style={{ backgroundColor: "whitesmoke" }}
                        >
                          <input
                            style={{ backgroundColor: "whitesmoke" }}
                            type="file"
                            className="form-control"
                            id="inputGroupFile03"
                            aria-describedby="inputGroupFileAddon03"
                            aria-label="Upload"
                          />
                          <label
                            className="input-group-text"
                            htmlFor="inputGroupFile02"
                          >
                            Upload
                          </label>
                        </div>
                      </center>
                    </div>
                  </div>
                  <div style={{ paddingLeft: 14 }}>
                    <div className="row" style={{}}>
                      <div
                        className="col"
                        style={{ fontSize: 15, fontWeight: 400 }}
                      >
                        file must be under 50 MB
                      </div>
                    </div>
                  </div>
                  <br />
                  <div
                    className="row"
                    style={{ borderTop: "2px solid rgb(165, 165, 165)" }}
                  >
                    <div className="col pt-3 pl-3 pr-3 pb-1">
                      <button
                        style={{
                          backgroundColor: "white",
                          width: "20%",
                          borderRadius: 12,
                          fontSize: 20,
                          fontWeight: 700,
                          color: "#0d6efd",
                        }}
                        className="p-3"
                      >
                        BACK
                      </button>
                      &ensp;&ensp;
                      <button
                        type="submit"
                        style={{
                          backgroundColor: "#0d6efd",
                          width: "20%",
                          borderRadius: 12,
                          fontSize: 20,
                          fontWeight: 700,
                          color: "white",
                        }}
                        className="p-3"
                        onClick={() => {
                          setsubmit(true);
                        }}
                      >
                        NEXT
                      </button>
                    </div>
                    <br />
                  </div>

                  <br />
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
          </div>
        </div>
      </form>
    </div>
  );
}
export default Main;
