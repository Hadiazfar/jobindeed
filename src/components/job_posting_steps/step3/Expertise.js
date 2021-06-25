import React from "react";
import Main from "./Main";
import MainMobile from "./MainMobile";
import Dashboardheader from "../dashoboardheader/Dashboardheader";
import Footer from "../../Footer/Footer"

function Expertise() {
  return (
    <div>
      <Dashboardheader />
      <Main />
      <MainMobile />
      <Footer />
    </div>
  );
}

export default Expertise;
