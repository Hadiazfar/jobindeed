import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PersonIcon from "@material-ui/icons/Person";
import React from "react";
import "../Login/Login.css";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import ErrorIcon from "@material-ui/icons/Error";
import { Link } from "react-router-dom";
function Main() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: yup.object({
      email: yup.string().email().required("This field is required."),
    }),
  });

  return (
    <div>
      <div className="as">
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
                      Log in and get to work
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
                        <PersonIcon className="PersonIcon" />
                      </div>
                      <div className="col-10 p-0">
                        <input
                          className="em"
                          placeholder="Username or Email"
                          style={{
                            width: "100%",
                            height: "100%",
                            border: "none",
                            outline: "none",
                            backgroundColor: "white",
                          }}
                          type="email"
                          id="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                        />
                      </div>
                    </div>
                  </center>
                  <center>
                    <div className="col-2 pl-0 pb-2 pt-2 p1">
                      {formik.errors.email ? (
                        <div className="loginerror">
                          {" "}
                          <ErrorIcon /> {formik.errors.email}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </center>

                  <center>
                    <div
                      className="row em1"
                      style={{ borderRadius: 4, border: "1px solid white" }}
                    >
                      <button
                        type="submit"
                        className="pb-2 pt-2"
                        style={{
                          width: "100%",
                          height: "100%",
                          border: "none",
                          backgroundColor: "#37a000",
                          color: "white",
                          fontSize: 18,
                          fontWeight: 500,
                          borderRadius: 4,
                        }}
                      >
                        Continue
                      </button>
                    </div>
                  </center>
                  <br />
                </form>
                <center>
                  <div
                    className="row em1"
                    style={{ borderRadius: 4, border: "1px solid white" }}
                  >
                    <div
                      className="col-5"
                      style={{ color: "rgb(157, 157, 157)", fontSize: 12 }}
                    >
                      <hr />
                    </div>
                    <div
                      className="col-2 pt-1"
                      style={{ color: "rgb(157, 157, 157)", fontSize: 14 }}
                    >
                      or
                    </div>
                    <div className="col-5">
                      <hr />
                    </div>
                  </div>
                </center>
                <br />
                <center>
                  <div
                    className="row em1"
                    style={{ borderRadius: 4, border: "1px solid white" }}
                  >
                    <button
                      className="pb-2 pt-2"
                      style={{
                        width: "100%",
                        height: "100%",
                        border: "none",
                        backgroundColor: "#4285f4",
                        color: "white",
                        fontSize: 18,
                        fontWeight: 500,
                        borderRadius: 4,
                      }}
                    >
                      <img
                        style={{ width: "11%", height: "11%", borderRadius: 5 }}
                        src="images/gbt.PNG"
                      />{" "}
                      Sign in with Google
                    </button>
                  </div>
                </center>
                <br />
                <div
                  className="row p-0"
                  style={{
                    backgroundColor: "#f9f9f9",
                    borderBottomRightRadius: 12,
                    borderBottomLeftRadius: 12,
                  }}
                >
                  <div className="contaier p-0" style={{ width: "100%" }}>
                    <br />
                    <center>
                      <div
                        className="row em1"
                        style={{
                          borderRadius: 4,
                          border: "none",
                          backgroundColor: "#f9f9f9",
                        }}
                      >
                        <div
                          className="col-4"
                          style={{ color: "rgb(157, 157, 157)", fontSize: 12 }}
                        >
                          <hr />
                        </div>
                        <div
                          className="col-4 p-0 pt-1"
                          style={{ color: "rgb(157, 157, 157)", fontSize: 14 }}
                        >
                          New to upwork?
                        </div>
                        <div className="col-4">
                          <hr />
                        </div>
                      </div>
                    </center>
                    <br />
                    <center>
                      <div
                        className="row "
                        style={{
                          borderRadius: 4,
                          border: "1px solid rgb(202, 202, 202)",
                          width: "50%",
                          backgroundColor: "white",
                        }}
                      >
                        <Link
                          to="/Signup"
                          className="pb-2 pt-2"
                          style={{
                            width: "100%",
                            height: "100%",
                            border: "none",
                            boxShadow:
                              "0 0 6px 0 rgba(0,0,0,.12), 0 6px 6px 0 rgba(0,0,0,.24)",
                            backgroundColor: "white",
                            color: "#37a000",
                            fontSize: 18,
                            fontWeight: 500,
                            borderRadius: 4,
                            textDecoration: "none",
                          }}
                        >
                          Sign up
                        </Link>
                      </div>
                    </center>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
              <br />
            </center>
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
