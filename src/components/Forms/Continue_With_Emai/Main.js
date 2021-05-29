import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "./ContinueWithEmai.css";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import City from "./City";
import { useFormik } from "formik";
import * as yup from "yup";
import ErrorIcon from "@material-ui/icons/Error";

function Main() {
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

      firstName: yup.string().required("Required"),
      lastName: yup.string().required("Required"),

      terms: yup.boolean().oneOf([true], "Must Accept Terms and Conditions"),

      box: yup.boolean().oneOf([true], "Must Accept Terms and Conditions"),
    }),
  });

  return (
    <div>
      <div className="ContinueWithEmai">
        <form onSubmit={formik.handleSubmit}>
          <div
            className="container-fluid b"
            style={{ backgroundColor: "rgb(243, 247, 247)", zIndex: 5 }}
          >
            <div className="container pt-5" style={{ zIndex: 6 }}>
              <center>
                <div
                  className="container "
                  style={{
                    width: 420,
                    backgroundColor: "white",
                    zIndex: 7,
                    borderRadius: 12,
                    boxShadow:
                      "0 0 6px 0 rgba(0,0,0,.12), 0 6px 6px 0 rgba(0,0,0,.24)",
                  }}
                >
                  <div className="row">
                    <div className="col pt-4 pl-4 pr-4 pb-2">
                      <p style={{ fontSize: 28, fontWeight: 400 }}>
                        Complete your free account <br />
                        setup{" "}
                      </p>
                    </div>
                  </div>{" "}
                  <div
                    className="row  "
                    style={{ borderRadius: 4, width: "90%" }}
                  >
                    <div
                      className="col-5  "
                      style={{
                        borderRadius: 10,
                        cursor: "pointer",
                        width: "48%",
                      }}
                    >
                      <div className="row  pt-2 pb-2 em3" style={{}}>
                        <div
                          className="col-2 "
                          style={{
                            paddingLeft: 1,
                            paddingRight: 3,
                            margin: "auto",
                          }}
                        >
                          <PersonIcon />
                        </div>
                        <div
                          className="col-10"
                          style={{ paddingLeft: 1, paddingRight: 2 }}
                        >
                          <input
                            className="em"
                            placeholder=" First name"
                            style={{
                              width: "100%",
                              height: "100%",
                              border: "none",
                              outline: "none",
                              fontSize: 20,
                            }}
                            type="text"
                            id="firstName"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-2 p-1 ">
                        {formik.errors.firstName && usesubmit ? (
                          <div className="firsnameterror">
                            {" "}
                            <ErrorIcon /> {formik.errors.firstName}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    &ensp;
                    <div
                      className="col-5 "
                      style={{
                        borderRadius: 10,
                        cursor: "pointer",
                        width: "49%",
                      }}
                    >
                      <div className="row pt-2 pb-2 em3" style={{}}>
                        <div
                          className="col-2 "
                          style={{
                            paddingLeft: 1,
                            paddingRight: 1,
                            margin: "auto",
                          }}
                        >
                          <PersonIcon />
                        </div>
                        <div
                          className="col-10"
                          style={{ paddingLeft: 2, paddingRight: 1 }}
                        >
                          <input
                            className="em"
                            id="lastname"
                            placeholder=" Last name"
                            style={{
                              width: "100%",
                              height: "100%",
                              border: "none",
                              outline: "none",
                              fontSize: 20,
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
                          <div className="lastNameerror">
                            {" "}
                            <ErrorIcon /> {formik.errors.lastName}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                  <br />
                  <center>
                    <div
                      className="row em3 pb-2 pt-2"
                      style={{ borderRadius: 12, width: "90%" }}
                    >
                      <div className="col-2 pl-1 pb-2 pt-1">
                        {" "}
                        <LockIcon />
                      </div>
                      <div className="col-10 p-0">
                        <input
                          className="em"
                          placeholder=" Create Password"
                          style={{
                            width: "95%",
                            height: "100%",
                            border: "none",
                            outline: "none",
                            fontSize: 18,
                            borderRadius: 10,
                          }}
                          type="password"
                          id="password"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                        />
                      </div>
                    </div>
                  </center>
                  <div className="col-10 p-1">
                  {formik.errors.password && usesubmit ? (
                    <div className="Errorpassworderror">
                      {" "}
                      <ErrorIcon /> {formik.errors.password}
                    </div>
                  ) : (
                    ""
                  )}
                  </div>
                  <br />
                  <center>
                    <City />
                  </center>
                  <div className="row">
                    <div className="col pt-4 pl-4 pr-4 pb-2">
                      <p style={{ fontSize: 28, fontWeight: 400 }}>
                        I want to:{" "}
                      </p>
                    </div>
                  </div>
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
                          fontSize: 16,
                          fontWeight: 700,
                          height: 60,
                        }}
                      >
                        <button
                          className="btq"
                          style={{
                            outline: "none",
                            width: "100%",
                            height: 50,
                            fontSize: 15,
                            borderTopLeftRadius: 12,
                            borderBottomLeftRadius: 12,
                          }}
                        >
                          {" "}
                          Hire For Project
                        </button>
                      </div>
                      <div
                        className="col-6 p-0"
                        style={{
                          height: 60,
                          borderTopRightRadius: 12,
                          borderBottomRightRadius: 12,
                          fontSize: 16,
                          fontWeight: 700,
                        }}
                      >
                        <button
                          className="btq"
                          style={{
                            outline: "none",
                            height: 50,
                            width: "100%",
                            fontSize: 15,
                            borderTopRightRadius: 12,
                            borderBottomRightRadius: 12,
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
                          id="box"
                          value={formik.values.box}
                          onChange={formik.handleChange}
                        />
                        <a style={{ fontSize: 18, fontWeight: 600 }}>
                          &nbsp;Yes! Send me genuinely useful emails every now
                          and then to help me get the most out of Jobindeed.
                        </a>{" "}
                        {formik.errors.box && usesubmit ? (
                          <div className="boxerror">
                            {" "}
                            <ErrorIcon /> {formik.errors.box}
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
                          id="terms"
                          value={formik.values.terms}
                          onChange={formik.handleChange}
                        />
                        <a style={{ fontSize: 18, fontWeight: 600 }}>
                          &nbsp;Yes, I understand and agree to the Jobindeed
                          Terms of Service, including the User Agreement and
                          Privacy Policy.
                        </a>{" "}
                        {formik.errors.terms && usesubmit ? (
                          <div className="boxerror">
                            {" "}
                            <ErrorIcon /> {formik.errors.terms}
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
                        width: "50%",
                        height: 60,
                        backgroundColor: "white",
                      }}
                    >
                      <button
                        type="submit"
                        style={{
                          width: "100%",
                          height: "110%",
                          border: "none",
                          boxShadow:
                            "0 0 6px 0 rgba(0,0,0,.12), 0 6px 6px 0 rgba(0,0,0,.24)",
                          backgroundColor: "rgb(15, 119, 192)",
                          color: "white",
                          fontSize: 15,
                          fontWeight: 600,
                          borderRadius: 10,
                        }}
                        onClick={() => {
                          setsubmit(true);
                        }}
                      >
                        Create My Account
                      </button>
                    </div>
                  </center>
                  <br />
                  <br />
                </div>
              </center>
            </div>
            <br />
            <br />
            <br />
          </div>
        </form>
      </div>
    </div>
  );
}
export default Main;
