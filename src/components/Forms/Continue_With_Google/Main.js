import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "../Continue_With_Google/ContinueWithGoogle.css";
import City from "../Continue_With_Emai/City";
import { useFormik } from "formik";
import * as yup from "yup";
import ErrorIcon from "@material-ui/icons/Error";
function Main() {
  var [usesubmit, setsubmit] = useState(false);
  const formik = useFormik({
    initialValues: {
      terms: "false",
      box: "false",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: yup.object({
      terms: yup.boolean().oneOf([true], "Must Accept Terms and Conditions"),
      box: yup.boolean().oneOf([true], "Must Accept Terms and Conditions"),
    }),
  });

  return (
    <div>
      <div className="ContinueWitGoogle">
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
                  </div>
                  <br />
                  <City />
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
                      id="occupation"
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
                          id="hire"
                          onclick="occupation('hire')"
                          className="btq"
                          style={{
                            outline: "none",
                            width: "100%",
                            height: 50,
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
                          height: 50,
                          borderTopRightRadius: 12,
                          borderBottomRightRadius: 12,
                          fontSize: 15,
                          fontWeight: 700,
                        }}
                      >
                        <button
                          id="freelancer"
                          onclick="occupation('freelancer')"
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
                          Work As Freelancer
                        </button>
                      </div>
                    </div>
                  </center>
                  <br />
                  <label>
                    <div className="row pb-1 pt-1" style={{ borderRadius: 4 }}>
                      <div className="col-0  pl-0 pl-4 pr-0 pb-2 pt-2">
                        {" "}
                        <input
                          style={{ width: 19, height: 19, cursor: "pointer" }}
                          type="checkbox"
                          id="terms"
                          value={formik.values.terms}
                          onChange={formik.handleChange}
                        />
                        <a style={{ fontSize: 18, fontWeight: 600 }}>
                          &nbsp;Yes! Send me genuinely useful emails every now
                          and then to help me get the most out of Jobindeed.
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
                    </div>
                  </label>
                  <label>
                    <div className="row pb-1 pt-1" style={{ borderRadius: 4 }}>
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
                    </div>
                  </label>
                  <br />
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
                          fontSize: 16,
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
              <br />
              <br />
            </div>
            <br />
          </div>
        </form>
      </div>
    </div>
  );
}
export default Main;
