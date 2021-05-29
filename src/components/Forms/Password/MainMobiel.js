import React, { useState } from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Password.css";
import LockIcon from "@material-ui/icons/Lock";
import { useFormik } from "formik";
import * as yup from "yup";
import ErrorIcon from "@material-ui/icons/Error";
import { Link } from "react-router-dom";
function MainMobile() {
  var [usesubmit, setsubmit] = useState(false);
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: yup.object({
      password: yup.string().required("This field is required."),
    }),
  });
  return (
    <div className="password1" style={{ width: "100%" }}>
      <div
        className="container "
        style={{
          width: "100%",
          backgroundColor: "white",
          zIndex: 7,
          boxShadow: "0 0 6px 0 rgba(0,0,0,.12), 0 6px 6px 0 rgba(0,0,0,.24)",
        }}
      >
        <center>
          <div className="row">
            <div className="col pt-4 pl-4 pr-4 pb-2">
              <p style={{ fontSize: 28, fontWeight: 600 }}>Welcome </p>
              <p style={{ fontSize: 18, fontWeight: 400 }}>
                Hadiazfar@0@gmai.com
              </p>
            </div>
          </div>
        </center>
        <form onSubmit={formik.handleSubmit}>
          <center>
            <div
              className="row em1 pb-1 pt-1"
              style={{ borderRadius: 4, width: "100%" }}
            >
              <div className="col-2 pl-0 pb-2 pt-2">
                {" "}
                <LockIcon className="LockIcon" />
              </div>
              <div className="col-10 p-0">
                <input
                  className="em"
                  placeholder="password"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    outline: "none",
                    fontSize: 25,
                  }}
                  type="password"
                  id="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
              </div>
            </div>
          </center>
          <div className="col-12 p-0">
          {formik.errors.password && usesubmit ? (
            <div className="passworderrormob">
              {" "}
              <ErrorIcon /> {formik.errors.password}
            </div>
          ) : (
            ""
          )}
          </div>
          <br />
          <div
            className="row pb-1 pt-1 "
            style={{ borderRadius: 4, width: "100%" }}
          ></div>
          <br />
          <center>
            <div
              className="row "
              style={{
                width: "100%",
                borderRadius: 11,
                border: "1px solid rgb(202, 202, 202)",
                height: 60,
                backgroundColor: "white",
              }}
            >
              <button
                type="submit"
                className="pb-2 pt-1"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  boxShadow:
                    "0 0 6px 0 rgba(0,0,0,.12), 0 6px 6px 0 rgba(0,0,0,.24)",
                  backgroundColor: "rgb(15, 119, 192)",
                  color: "white",
                  fontSize: 24,
                  fontWeight: 600,
                  borderRadius: 10,
                }}
                onClick={() => {
                  setsubmit(true);
                }}
              >
                {" "}
                login
              </button>
            </div>
          </center>
          <br />
          <center>
            <div
              className="row em1"
              style={{
                borderRadius: 4,
                border: "1px solid white",
                width: "100%",
              }}
            >
              <div
                className="col-5 pt-1 "
                style={{ color: "rgb(157, 157, 157)", fontSize: 14 }}
              >
                <Link
                  to=""
                  style={{
                    fontSize: 15,
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  {" "}
                  Not you?
                </Link>
              </div>
              <div className="col-6 offset-1 pl-0 pb-2 pt-2 pr-0 pl-0">
                {" "}
                <Link
                  to=""
                  style={{
                    fontSize: 15,
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  forget password?
                </Link>
              </div>
            </div>
          </center>
          <br />
          <br />
          <br />
          <br />
        </form>
      </div>
    </div>
  );
}
export default MainMobile;
