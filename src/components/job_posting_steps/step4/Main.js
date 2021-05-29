import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import City from "../City/City";
import "./Budget.css";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

import { useFormik } from "formik";
import * as Yup from "yup";
import ErrorIcon from "@material-ui/icons/Error";
import Button from "../../job_posting_steps/Button/Button";
function Main() {
  var [usesubmit, setsubmit] = useState(false);
  const formik = useFormik({
    initialValues: {
      Money: "0",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object().shape({
      Money: Yup.string().required("Please Enter The  "),
    }),
  });
  return (
    <div>
      <div className="Budget">
        <div
          className="container-fluid b"
          style={{ backgroundColor: "rgb(243, 247, 247)", zIndex: 5 }}
        >
          <div className="container pt-5" style={{ zIndex: 6 }}>
            <div className="row">
              <City />
              <div className="col-9">
                <div
                  className="container "
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
                    style={{ borderBottom: "2px solid rgb(165, 165, 165)" }}
                  >
                    <div className="col pt-4 pl-4 pr-4 pb-2">
                      <p style={{ fontSize: 20, fontWeight: 750 }}>Budget</p>
                      <p style={{ fontSize: 15, fontWeight: 400 }}>
                        Step 4 of 5
                      </p>
                    </div>
                  </div>
                  <div className="row" style={{}}>
                    <div className="col pt-2 pl-4 pr-4 pb-2">
                      <p style={{ fontSize: 15, fontWeight: 600 }}>
                        Set the pay for your employee:
                      </p>
                    </div>
                  </div>
                  <div className="row " style={{ width: "100%", height: 40 }}>
                    <div className="col-4 " style={{}}>
                      <div
                        className="row   p-0"
                        style={{
                          width: "100%",
                          height: 50,
                          borderRadius: 12,
                          border: "2px solid black",
                        }}
                      >
                        <div className="col-1 ">
                          <p style={{ fontSize: 25, fontWeight: 750 }}>
                            <AttachMoneyIcon />
                          </p>{" "}
                        </div>
                        <div
                          className="col-10  pl-1 pr-0"
                          style={{ paddingRight: 0 }}
                        >
                          <input
                            className="em pr-0"
                            id="salry"
                            placeholder=" "
                            style={{
                              width: "100%",
                              height: 41,
                              border: "none",
                              outline: "none",
                              fontSize: 20,
                            }}
                            type="number"
                            id="Money"
                            value={formik.values.Money}
                            onChange={formik.handleChange}
                          />
                          {formik.errors.Money && usesubmit ? (
                            <div className="error1">
                              {" "}
                              <ErrorIcon /> {formik.errors.Money}
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-4" style={{}}>
                      <select
                        className="em"
                        name="wor"
                        style={{
                          width: "98%",
                          border: "2px solid black",
                          cursor: "pointer",
                          height: 50,
                          borderRadius: 12,
                          fontSize: 20,
                          outline: "none !important",
                        }}
                      >
                        <option className="em" value="months">
                          months
                        </option>
                        <option className="em" value="hours">
                          hours
                        </option>
                        <option className="em" value="days">
                          days
                        </option>
                      </select>
                    </div>
                  </div>
                  <br />
                  <br />
                </div>
              </div>
            </div>

            <br />
            <div className="col-9 offset-3">
              <div
                className="container "
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  zIndex: 7,
                  borderRadius: 6,
                  border: "1px solid rgb(165, 165, 165)",
                }}
              >
                <br />
                <div className="row" style={{ marginLeft: 5 }}>
                  <div className="col pt-2 pl-4 pr-4 pb-2">
                    <a style={{ fontSize: 15, fontWeight: 600 }}>
                      You want a permanent employee or temporary employee ?{" "}
                    </a>
                    <br />
                    <br />
                    <button style={{ height: 130 }} className="p-3 bt3">
                      <a style={{ fontSize: 15, fontWeight: 750 }}>
                        Permanent Employee
                      </a>{" "}
                      <br />
                      <a style={{ fontSize: 12 }}>
                        you want to hire{" "}
                      </a> <br />{" "}
                      <a style={{ fontSize: 12 }}>a person for long time</a>{" "}
                    </button>
                    &ensp;&ensp;
                    <button style={{ height: 130 }} className="p-2 bt3">
                      <a style={{ fontSize: 15, fontWeight: 750 }}>
                        Temporary Employee{" "}
                      </a>
                      <br />
                      <a style={{ fontSize: 12 }}>you want to hire </a> <br />
                      <a style={{ fontSize: 12 }}>
                        a person for a particular project{" "}
                      </a>
                    </button>
                    <br />
                  </div>
                </div>
                <div className="row" style={{ marginLeft: 5 }}>
                  <div className="col pt-2 pl-4 pr-4 pb-2">
                    <p style={{ fontSize: 15, fontWeight: 400 }}>
                      If you want a temporary employee then also fill the below
                      fields{" "}
                    </p>
                  </div>
                </div>
                <div className="row" style={{ marginLeft: 20 }}>
                  <div className="col-3" style={{}}>
                    <div
                      className="row   p-0"
                      style={{
                        width: "100%",
                        height: 50,
                        borderRadius: 12,
                        border: "2px solid black",
                      }}
                    >
                      <div
                        className="col-12  pl-1 pr-0"
                        style={{ paddingRight: 0 }}
                      >
                        <input
                          id="temporarySalary"
                          className="em pr-0"
                          placeholder=" "
                          style={{
                            width: "95%",
                            height: 43,
                            border: "none",
                            outline: "none",
                            fontSize: 20,
                          }}
                          type="number"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-3 pt-2">
                    <p style={{ fontSize: 15, fontWeight: 400 }}>
                      month/hours/days
                    </p>
                  </div>
                </div>
                <div className="row" style={{ marginLeft: 5 }}>
                  <div className="col pt-2 pl-4 pr-4 pb-2">
                    <p style={{ fontSize: 15, fontWeight: 400 }}>
                      For how many months your wants to hire for expamle 1 or 2
                      etc{" "}
                    </p>
                  </div>
                </div>
                <br />
                <br />
                <div
                  className="row"
                  style={{
                    height: 50,
                    borderTop: "2px solid rgb(165, 165, 165)",
                  }}
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
                  </div>
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
export default Main;
