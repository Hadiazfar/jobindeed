import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { useFormik } from "formik";
import * as yup from "yup";
import ErrorIcon from "@material-ui/icons/Error";
function MainMobile() {
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
    <div className="Singup1" style={{ width: "100%" }}>
      <div
        className="mycontainer"
        style={{
          width: "100%",
          backgroundColor: "white",
          zIndex: 7,
        }}
      >
        <center>
          <div className="row">
            <div className="col pt-4 pl-4 pr-4 pb-2">
              <p style={{ fontSize: 28, fontWeight: 400 }}>
                Get your free account{" "}
              </p>
            </div>
          </div>
        </center>
        <center>
          <div
            className="row em1"
            style={{
              borderRadius: 4,
              border: "1px solid white",
              width: "100%",
            }}
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
                af
              />{" "}
              Countinue with google
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
            <button
              className="pb-2 pt-2"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                backgroundColor: "whitesmoke",
                color: "black",
                fontSize: 18,
                fontWeight: 500,
                borderRadius: 4,
              }}
            >
              <img
                style={{ width: "10%", height: "10%", borderRadius: 5 }}
                src="images/app.svg"
              />{" "}
              Countinue with Apple
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
              className="col-5"
              style={{ color: "rgb(157, 157, 157)", fontSize: 12 }}
            >
              {" "}
              <hr />{" "}
            </div>
            <div
              className="col-2 pt-1"
              style={{ color: "rgb(157, 157, 157)", fontSize: 14 }}
            >
              or
            </div>
            <div className="col-5">
              {" "}
              <hr />{" "}
            </div>
          </div>
        </center>
        <br />
        <form onSubmit={formik.handleSubmit}>
          <center>
            <div
              className="row em1 pb-1 pt-1"
              style={{ borderRadius: 4, width: "100%" }}
            >
              <div className="col-2 pl-0 pb-2 pt-2">
                {" "}
                <MailOutlineIcon className="MailOutlineIcon" />
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
                  }}
                  type="email"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </div>
            </div>
          </center>
          <div className="col-12 p-0">
            {formik.errors.email ? (
              <div className="signuperrorMob">
                {" "}
                <ErrorIcon className="ErrorIcon" /> {formik.errors.email}
              </div>
            ) : (
              ""
            )}
          </div>
          <br />
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
              <button
                className="pb-2 pt-2 emailbutton"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  backgroundColor: "#37a000",
                  color: "white",
                  fontSize: 18,
                  fontWeight: 500,
                  borderRadius: 4,
                  outline: "none",
                }}
              >
                Continue With Email
              </button>
            </div>
          </center>
        </form>
        <br />
        <br />
        <br />
        <div className="container">
          <center>
            <p className="mytext4">
              More than 100 jobs are posted on Jobindeed every week
            </p>
            <br />
          </center>
          <div className="row">
            <div className="col-sm">
              <center>
                <p className="mytext5">Find what you need</p>
                <p>
                  Choose from specialized freelancers and agencies with 5,000+
                  skills.
                </p>
              </center>
            </div>
            <div className="col-sm">
              <center>
                <p className="mytext5">Post today,hire tomorrow</p>
                <p>
                  Get custom quotes right away on terms you negotiate directly.
                </p>
              </center>
            </div>
            <div className="col-sm">
              <center>
                <p className="mytext5">Engage with confidence</p>
                <p>
                  Only pay for work you authorize, with secure billing and
                  invoices.
                </p>
              </center>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
export default MainMobile;
