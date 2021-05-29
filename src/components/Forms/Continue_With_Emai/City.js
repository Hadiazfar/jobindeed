import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./city.css";
import React from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Link } from "react-router-dom";

function City() {
  return (
    <div>
      <div className="p-1" style={{ height: 60 }}>
        <button
          className="btn btn-primary pt-0 pb-0 mainbutton"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
          style={{
            width: "92%",
            height: 50,
            backgroundColor: "white",
            border: "1px solid black",
            outline: "none",
            color: "black",
            borderRadius: 12,
          }}
        >
          <div className="row p-0 pt-1 pb-1" style={{ height: 50 }}>
            <div className="col-3 ">
              <center>
                <p
                  style={{
                    fontSize: 22,
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Karachi
                </p>
              </center>
            </div>
            <div className="col-7" />
            <div className="col-2 pt-1">
              <ArrowDropDownIcon />
            </div>
          </div>
        </button>
        <div
          className="collapse "
          id="collapseExample"
          style={{
            width: "90%",
            boxShadow: "0 0 6px 0 rgba(0,0,0,.12), 0 6px 6px 0 rgba(0,0,0,.24)",
          }}
        >
          <div
            className="card card-body p-0"
            style={{
              overflowX: "hidden",
              overflowY: "scroll",
              height: 290,
            }}
          >
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                {" "}
                Karachi
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                {" "}
                Karachi
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                {" "}
                Islamabad
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                {" "}
                Peshawar
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                {" "}
                Multan
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                {" "}
                Rawalpindi
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                {" "}
                Faislabad
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                Gujran wala
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                {" "}
                Sialkot
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                {" "}
                Quetta
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                {" "}
                Bhawalpur
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                {" "}
                Hyderabad
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                {" "}
                Attock
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                {" "}
                Gawwadar
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                {" "}
                Gujrat
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                Rahimyaar Khan
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                {" "}
                DG Khan
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                {" "}
                Kasur
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                {" "}
                Chitral
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                {" "}
                Sargodha
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                {" "}
                Abbottabad
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                {" "}
                Jhung
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                {" "}
                Sahiwal
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                {" "}
                Mardan
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                {" "}
                Thatta
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                {" "}
                Sukkur
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                {" "}
                Mirpur Khas
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                {" "}
                Jhelum
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                {" "}
                Sheikhupura
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                Jacobabad
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                {" "}
                Okara
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                {" "}
                Mianwali
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                {" "}
                Larkana
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                {" "}
                Chinot
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                {" "}
                Sawat
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                {" "}
                Chakwal
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                {" "}
                Khairpur
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                {" "}
                Burewala
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                {" "}
                Saqidabad
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                {" "}
                Khudzar
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                Dhera ismaili khan
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                {" "}
                Nawabshah
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                {" "}
                Taxila
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                {" "}
                Chaman{" "}
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <div
                className="row p-1 sc"
                style={{ width: "100%", marginLeft: 1 }}
              >
                Dadu
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default City;
