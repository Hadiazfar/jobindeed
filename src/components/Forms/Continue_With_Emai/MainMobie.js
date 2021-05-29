import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "./ContinueWithEmai.css";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import City from "./City";
import { useFormik } from "formik";
import * as yup from "yup";
import ErrorIcon from "@material-ui/icons/Error";

function MainMobie() {
  var [usesubmit, setsubmit] = useState(false);
  const formik = useFormik({
    initialValues: {
      password: "",
      terms: "false",
      box: "false",
      firstName: "",
      lastName: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: yup.object({
      password: yup
        .string()
        .min(6, "Password is too short.")
        .max(12, "Password is too long.")
        .required("Enter your Password."),

      firstName: yup.string().required("Enter your First Name."),
      lastName: yup.string().required("Enter your First Name."),

      terms: yup.boolean().oneOf([true], "Must Accept Terms and Conditions"),
      box: yup.boolean().oneOf([true], "Must Accept Terms and Conditions"),
    }),
  });
  return (
    <div className="ContinueWithEmai1" style={{ width: "100%" }}>
      <form onSubmit={formik.handleSubmit}>
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
                <p style={{ fontSize: 28, fontWeight: 700 }}>
                  Complete your free account <br />
                  setup{" "}
                </p>
              </div>
            </div>
          </center>
          <center>
            <div
              className="row em3 pb-1 pt-1"
              style={{ borderRadius: 12, width: "90%" }}
            >
              <div className="col-2 pl-0 pb-1 pt-1">
                {" "}
                <PersonIcon className="PersonIcon" />
              </div>
              <div className="col-10 p-0">
                <input
                  className="em"
                  placeholder="First Name"
                  style={{
                    width: "95%",
                    height: "100%",
                    border: "none",
                    outline: "none",
                    fontSize: 22,
                    borderRadius: 10,
                  }}
                  type="text"
                  id="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <div className="col-10 p-1">
              {formik.errors.firstName && usesubmit ? (
                <div className="Emaierrormob">
                  {" "}
                  <ErrorIcon /> {formik.errors.firstName}
                </div>
              ) : (
                ""
              )}
            </div>
          </center>
          <br />
          <center>
            <div
              className="row em3 pb-1 pt-1"
              style={{ borderRadius: 12, width: "90%" }}
            >
              <div className="col-2 pl-0 pb-1 pt-1">
                {" "}
                <PersonIcon className="PersonIcon" />
              </div>
              <div className="col-10 p-0">
                <input
                  className="em"
                  placeholder="Last Name"
                  style={{
                    width: "95%",
                    height: "100%",
                    border: "none",
                    outline: "none",
                    fontSize: 22,
                    borderRadius: 10,
                  }}
                  type="text"
                  id="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <div className="col-10 p-1">
              {formik.errors.lastName && usesubmit ? (
                <div className="Emaierrormob">
                  {" "}
                  <ErrorIcon /> {formik.errors.lastName}
                </div>
              ) : (
                ""
              )}
            </div>
          </center>
          <br />
          <center>
            <div
              className="row em3 pb-1 pt-1"
              style={{ borderRadius: 12, width: "90%" }}
            >
              <div className="col-2 pl-0 pb-1 pt-1">
                {" "}
                <LockIcon className="LockIcon" />
              </div>
              <div className="col-10 p-0">
                <input
                  className="em"
                  placeholder="Create Password"
                  style={{
                    width: "95%",
                    height: "100%",
                    border: "none",
                    outline: "none",
                    fontSize: 22,
                    borderRadius: 10,
                  }}
                  type="password"
                  id="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <div className="col-10 p-1">
              {formik.errors.password && usesubmit ? (
                <div className="Emaierrormob">
                  {" "}
                  <ErrorIcon /> {formik.errors.password}
                </div>
              ) : (
                ""
              )}
            </div>
          </center>

          <br />
          <center>
            <City />
          </center>
          <center>
            <div className="row">
              <div className="col pt-4 pl-4 pr-4 pb-2">
                <p style={{ fontSize: 28, fontWeight: 600 }}>I want to: </p>
              </div>
            </div>
          </center>
          <br />
          <center>
            <div
              className="row  "
              style={{ borderRadius: 12, width: "90%", height: 50 }}
            >
              <div
                className="col-6 p-0"
                style={{
                  borderTopLeftRadius: 12,
                  borderBottomLeftRadius: 12,
                  fontSize: 18,
                  fontWeight: 700,
                  height: 50,
                }}
              >
                <button
                  className="btq"
                  style={{
                    outline: "none",
                    width: "100%",
                    height: 50,
                    borderTopLeftRadius: 12,
                    borderBottomLeftRadius: 12,
                    fontSize: 15,
                  }}
                >
                  {" "}
                  Hire For Project
                </button>
              </div>
              <div
                className="col-6 p-0"
                style={{
                  height: 50,
                  borderTopRightRadius: 12,
                  borderBottomRightRadius: 12,
                  fontSize: 18,
                  fontWeight: 700,
                }}
              >
                <button
                  className="btq"
                  style={{
                    outline: "none",
                    height: 50,
                    width: "100%",
                    borderTopRightRadius: 12,
                    borderBottomRightRadius: 12,
                    fontSize: 15,
                  }}
                >
                  Work As freelancer
                </button>
              </div>
            </div>
          </center>
          <br />
          <div className="row pb-1 pt-1" style={{ borderRadius: 4 }}>
            <label>
              <div className="col  pl-0 pl-4 pr-0 pb-2 pt-2">
                {" "}
                <input
                  style={{ width: 19, height: 19, cursor: "pointer" }}
                  type="checkbox"
                  id="terms"
                  value={formik.values.terms}
                  onChange={formik.handleChange}
                />
                <a style={{ fontSize: 19, fontWeight: 600 }}>
                  &nbsp;Yes! Send me genuinely useful emails every now and then
                  to help me get the most out of Jobindeed.
                </a>{" "}
                {formik.errors.terms && usesubmit ? (
                  <div className="boxerrormob">
                    {" "}
                    <ErrorIcon /> {formik.errors.terms}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </label>
          </div>
          <div className="row pb-1 pt-1" style={{ borderRadius: 4 }}>
            <label>
              <div className="col  pl-0 pl-4 pr-0 pb-2 pt-2">
                {" "}
                <input
                  style={{ width: 19, height: 19, cursor: "pointer" }}
                  type="checkbox"
                  id="box"
                  value={formik.values.box}
                  onChange={formik.handleChange}
                />
                <a style={{ fontSize: "18.5px", fontWeight: 600 }}>
                  &nbsp;Yes, I understand and agree to the Jobindeed terms of
                  Service, including the User Agreement and Privacy Policy.
                </a>{" "}
                {formik.errors.box && usesubmit ? (
                  <div className="boxerrormob">
                    {" "}
                    <ErrorIcon /> {formik.errors.box}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </label>
          </div>
          <br />
          <center>
            <div
              className="row "
              style={{
                borderRadius: 11,
                border: "1px solid rgb(202, 202, 202)",
                width: "100%",
                height: 60,
                backgroundColor: "white",
              }}
            >
              <button
                className="pb-2 pt-1"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  boxShadow:
                    "0 0 6px 0 rgba(0,0,0,.12), 0 6px 6px 0 rgba(0,0,0,.24)",
                  backgroundColor: "rgb(15, 119, 192)",
                  color: "white",
                  fontSize: 18,
                  fontWeight: 600,
                  borderRadius: 10,
                }}
                onClick={() => {
                  setsubmit(true);
                }}
              >
                {" "}
                Create My Account
              </button>
            </div>
          </center>
          <br />
          <br />
          <br />
          <br />
        </div>
        <br />
        <br />
      </form>
    </div>
  );
}
export default MainMobie;
