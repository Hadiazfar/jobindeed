import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "./Title.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import ErrorIcon from "@material-ui/icons/Error";
import Button from "../../job_posting_steps/Button/Button";

function MainMobile() {
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
        .required("JOB POST NAME?"),
    }),
  });
  return (
    <div className="Title1">
      <form onSubmit={formik.handleSubmit}>
        <div className="container " style={{ width: "100%" }}>
          <div
            className="row"
            style={{ borderBottom: "3px solid rgb(165, 165, 165)" }}
          >
            <div className="col pt-4 pl-4 pr-4 pb-2">
              <p style={{ fontSize: 28, fontWeight: 700 }}>Get started</p>

              <p style={{ fontSize: 18, fontWeight: 400 }}>Step 1 of 5</p>
            </div>
          </div>
          <br />
          <p style={{ fontSize: 18, fontWeight: 700 }}>
            ENTER THE NAME OF YOUR JOB POST
          </p>
          <div
            className="row em1 pb-1 pt-1 "
            style={{
              borderRadius: 12,
              width: "91%",
              paddingLeft: 6,
              marginLeft: 10,
            }}
          >
            <div className="col p-0">
              <input
                className="em"
                style={{
                  width: "98%",
                  border: "none",
                  outline: "none",
                  fontSize: 18,
                }}
                type="text"
                id="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <center>
            <div className="col 10 p-1">
              {formik.errors.firstName && usesubmit ? (
                <div className="error1">
                  {" "}
                  <ErrorIcon /> {formik.errors.firstName}
                </div>
              ) : (
                ""
              )}
            </div>
          </center>
          <div className="row" style={{ marginLeft: 5 }}>
            <div className="col pt-4 pl-4 pr-4 pb-2">
              <p style={{ fontSize: 18, fontWeight: 400 }}>Expamle:</p>
              <p style={{ fontSize: 18, fontWeight: 400 }}>
                1. Software developer need for creating websites or mobile
                applications
              </p>
              <p style={{ fontSize: 18, fontWeight: 400 }}>
                2. Electrical engineer need for test and manage the
                manufacturing of electrical equipment
              </p>
            </div>
          </div>
          <br />
          <div className="row" style={{}}>
            <div className="col pt-4 pl-4 pr-4 pb-2">
              <p style={{ fontSize: 24, fontWeight: 700 }}>Job Categories</p>
              <br />
              <p style={{ fontSize: 15, fontWeight: 400 }}>
                Let's categorize your job, which helps us personalize <br />
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
                name="cars"
                id="cars"
                style={{
                  width: "98%",
                  border: "none",
                  cursor: "pointer",
                  outline: "none",
                }}
              >
                <option className="em" value="volvo">
                  Software /cs/it
                </option>
                <option className="em" value="saab">
                  Electrical
                </option>
                <option className="em" value="opel">
                  Electronics
                </option>
                <option className="em" value="audi">
                  Management
                </option>
                <option className="em" value="audi">
                  Marketing
                </option>
              </select>
            </div>
          </div>
          <br /> <br />
          <div
            className="row"
            style={{ borderTop: "3px solid rgb(165, 165, 165)" }}
          >
            <div
              className="col pt-2  pb-2"
              style={{ paddingLeft: 4, paddingRight: 4 }}
            >
              <br />
              <br />
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
            </div>
          </div>
          <br />
        </div>
      </form>
    </div>
  );
}
export default MainMobile;
