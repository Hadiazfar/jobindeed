import React from "react";
import Main from "../step1/Main";
import MainMobile from "../step1/MainMobile";
import Footer from "../../Footer/Footer";
import Dashboardheader from "../dashoboardheader/Dashboardheader";
function Title() {
  return (
    <div>
      <Dashboardheader />
      <Main />
      <MainMobile />
      <Footer />
    </div>
  );
}

export default Title;
