import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "./Description.css";
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
        .min(100, "Too Short!")
        .max(6001, "Too Long!")
        .required("Please Enter The Description "),
    }),
  });
  return (
    <div className="Description1">
      <form onSubmit={formik.handleSubmit}>
        <div className="container mq1" style={{ width: "100%" }}>
          <div
            className="row"
            style={{ borderBottom: "3px solid rgb(165, 165, 165)" }}
          >
            <div className="col pt-4 pb-2">
              <p style={{ fontSize: 28, fontWeight: 700 }}>Description</p>

              <p style={{ fontSize: 18, fontWeight: 400 }}>Step 2 of 5</p>
            </div>
          </div>
          <div
            className="row"
            style={{ marginLeft: 5, paddingLeft: 0, paddingRight: 0 }}
          >
            <div
              className="col-12 pt-4  pb-2"
              style={{ paddingLeft: 0, paddingRight: 0 }}
            >
              <p style={{ fontSize: 19, fontWeight: 750 }}>
                A good description includes:
              </p>
              <p style={{ fontSize: 15, fontWeight: 400 }}>
                1. What the deileverable is
              </p>
              <p style={{ fontSize: 15, fontWeight: 400 }}>
                2.Type of employee you're looking for{" "}
              </p>
              <p style={{ fontSize: 15, fontWeight: 400 }}>
                3. Anything unique about your company
              </p>
              <div
                className="input-group"
                style={{ borderRadius: 12, border: "3px solid grey" }}
              >
                <textarea
                  style={{ borderRadius: 12, border: "none" }}
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
              <div className="col" style={{ fontSize: 18, fontWeight: 600 }}>
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
            <div className="col" style={{ fontSize: 18, fontWeight: 600 }}>
              {" "}
              0/6000 characters (minimum 100)
            </div>
          </div>
          <div className="row" style={{}}>
            <div className="col pt-4  pb-2">
              <p style={{ fontSize: 21, fontWeight: 700 }}>
                Additional Information (optional)
              </p>
              <br />
            </div>
          </div>
          <div
            className="row pt-4  pb-4"
            style={{
              border: "3px dotted #0d6efd",
              backgroundColor: "whitesmoke",
              fontSize: 18,
              fontWeight: 600,
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
                <label className="input-group-text" htmlFor="inputGroupFile02">
                  Upload
                </label>
              </div>
            </center>
          </div>
          <div className="row" style={{}}>
            <div className="col" style={{ fontSize: 18, fontWeight: 600 }}>
              file must be under 50 MB
            </div>
          </div>
          <br />
          <br />
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
