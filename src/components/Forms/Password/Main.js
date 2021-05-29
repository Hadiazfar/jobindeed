import React, { useState } from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Password.css";
import LockIcon from "@material-ui/icons/Lock";
import { useFormik } from "formik";
import * as yup from "yup";
import ErrorIcon from "@material-ui/icons/Error";
function Main() {
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
    <div>
      <div className="password">
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
                    <p style={{ fontSize: 28, fontWeight: 600 }}>Welcome </p>

                    <p style={{ fontSize: 20, fontWeight: 600 }}>
                      Hadiazfar20@gmail.com
                    </p>
                  </div>
                </div>
                <form onSubmit={formik.handleSubmit}>
                  <center>
                    <div
                      className="row em1 pb-1 pt-1"
                      style={{ borderRadius: 4 }}
                    >
                      <div className="col-2 pl-0 pb-2 pt-2">
                        {" "}
                        <LockIcon className="LockIcon" />
                      </div>
                      <div className="col-10 p-0">
                        <input
                          id="password"
                          className="em"
                          placeholder="Password"
                          style={{
                            width: "100%",
                            height: "100%",
                            border: "none",
                            outline: "none",
                            fontSize: 20,
                          }}
                          type="password"
                          id="password"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                        />
                      </div>
                    </div>
                  </center>
                  <div className="col-12 p-1">
                    {formik.errors.password && usesubmit ? (
                      <div className="passworderror">
                        {" "}
                        <ErrorIcon /> {formik.errors.password}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-6 offset-6 pl-0 pb-2 pt-2">
                    {" "}
                    <a
                      href
                      style={{
                        fontSize: 15,
                        textDecoration: "none",
                        fontWeight: 600,
                        color: "rgb(15, 119, 192)",
                      }}
                    >
                      forget password?
                    </a>
                  </div>
                  <div className="row pb-1 pt-1" style={{ borderRadius: 4 }}>
                    <div className="col-7 offset-1 pl-0 pl-4 pr-0 pb-2 pt-2">
                      <input
                        style={{ width: 18, height: 18 }}
                        type="checkbox"
                      />
                      <a style={{ fontSize: 18, fontWeight: 600 }}>
                        {" "}
                        Keep me logged in
                      </a>{" "}
                    </div>
                  </div>
                  <br />
                  <center>
                    <div
                      className="row "
                      style={{
                        borderRadius: 11,
                        border: "1px solid rgb(202, 202, 202)",
                        width: "40%",
                        height: 55,
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
                          fontSize: 20,
                          fontWeight: 600,
                          borderRadius: 10,
                        }}
                        onClick={() => {
                          setsubmit(true);
                        }}
                      >
                        {" "}
                        Sign up
                      </button>
                    </div>
                  </center>
                </form>
                <br />
                <center>
                  <div
                    className="row em1"
                    style={{ borderRadius: 4, border: "1px solid white" }}
                  >
                    <div
                      className="col-4"
                      style={{ color: "rgb(157, 157, 157)", fontSize: 12 }}
                    >
                      {" "}
                      <hr />{" "}
                    </div>
                    <div
                      className="col-4 "
                      style={{ color: "rgb(157, 157, 157)", fontSize: 14 }}
                    >
                      <p
                        href
                        style={{
                          fontSize: 18,
                          textDecoration: "none",
                          fontWeight: 600,
                        }}
                      >
                        Not you?
                      </p>
                    </div>
                    <div className="col-4">
                      {" "}
                      <hr />{" "}
                    </div>
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
      </div>
    </div>
  );
}

export default Main;
