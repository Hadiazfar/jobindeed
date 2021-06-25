import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import City from "../City/City";
import "./Title.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import ErrorIcon from "@material-ui/icons/Error";
import Button from "../../job_posting_steps/Button/Button";
import { Link } from "react-router-dom";
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
        .min(1, "Too Short!")
        .max(4, "Too Long!")
        .required("JOB POST NAME? "),
    }),
  });
  return (
    <div className="Title">
      <form onSubmit={formik.handleSubmit}>
        <div
          className="container-fluid b"
          style={{ backgroundColor: "rgb(243, 247, 247)", zIndex: 5 }}
        >
          <div className="container pt-5" style={{ zIndex: 6 }}>
            <div className="row">
              <City 
              
              Title= {<CheckCircleIcon  style={{ color: '#174964', fontSize: '20px', }}/>}
              DescriptionIcon= {<CheckCircleOutlineIcon style={{  fontSize: '20px',}}/>}
              ExpertiseIcon ={<CheckCircleOutlineIcon style={{  fontSize: '20px',}}/>}
              Budget ={<CheckCircleOutlineIcon style={{ fontSize: '20px',}}/>}
              Review = {< CheckCircleOutlineIcon style={{  fontSize: '20px',}}/>}
              />

              <div className="col-9">
                <div
                  className="container box1 "
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
                    style={{ borderBottom: "3px solid rgb(165, 165, 165)" }}
                  >
                    <div className="col pt-4 pl-4 pr-4 pb-1">
                      <p style={{ fontSize: 19, fontWeight: 750 }}>
                        Get started
                      </p>
                      <p style={{ fontSize: 15, fontWeight: 400 }}>
                        Step 1 of 5
                      </p>
                    </div>
                  </div>
                  <br />
                  <p style={{ fontSize: 15, fontWeight: 600 }}>
                    {" "}
                    ENTER THE NAME OF YOUR JOB POST
                  </p>

                  <div
                    className="row em1 pb-1 pt-1 hadi"
                    style={{
                      borderRadius: 12,
                      width: "50%",
                      paddingLeft: 6,
                      marginLeft: 0,
                    }}
                  >
                    <div className="col p-8">
                      <input
                        className="em"
                        style={{
                          width: "97%",
                          border: "none",
                          outline: "none",
                          fontSize: 25,
                        }}
                        type="text"
                        id="firstName"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                      />
                    </div>
                  </div>
                  <div className="col 12 p-1">
                    {formik.errors.firstName && usesubmit ? (
                      <div className="titerror">
                        {" "}
                        <ErrorIcon /> {formik.errors.firstName}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="row" style={{ marginLeft: 5 }}>
                    <div className="col pt-4 pl-4 pr-4 pb-2">
                      <p style={{ fontSize: 15, fontWeight: 400 }}>Expamle:</p>
                      <p style={{ fontSize: 15, fontWeight: 400 }}>
                        1. Software developer need for creating websites or
                        mobile applications
                      </p>
                      <p style={{ fontSize: 15, fontWeight: 400 }}>
                        2. Electrical engineer need for test and manage the
                        manufacturing of electrical equipment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />

            <div className="col-9 offset-3">
              <div
                className="container box2 "
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  zIndex: 7,
                  borderRadius: 6,
                  border: "1px solid rgb(165, 165, 165)",
                }}
              >
                <div className="row" style={{}}>
                  <div className="col pt-4 pl-4 pr-4 pb-2">
                    <p style={{ fontSize: 19, fontWeight: 750 }}>
                      Job Categories
                    </p>
                    <p style={{ fontSize: 15, fontWeight: 400 }}>
                      Let's categorize your job, which helps us personalize{" "}
                      <br />
                      your job detail and match your job to relevant applicant
                    </p>
                  </div>
                </div>
                <div
                  className="row em1 pb-1 pt-1 "
                  style={{
                    borderRadius: 12,
                    width: "40%",
                    paddingLeft: 6,
                    marginLeft: 2,
                    borderBottom: "3px solid rgb(165, 165, 165)",
                  }}
                >
                  <div className="col p-0">
                    <select
                      className="em"
                      name="categorie"
                      style={{
                        width: "98%",
                        border: "none",
                        cursor: "pointer",
                        outline: "none",
                      }}
                    >
                      <option className="em" value="Software /cs/it">
                        Software /cs/it
                      </option>
                      <option className="em" value="Electrical">
                        Electrical
                      </option>
                      <option className="em" value="Electronics">
                        Electronics
                      </option>
                      <option className="em" value="Management">
                        Management
                      </option>
                      <option className="em" value="Marketing">
                        Marketing
                      </option>
                    </select>
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
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </form>
    </div>
  );
}
export default Main;
