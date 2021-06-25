import React from "react";
import Main from "./Main";
import MainMobile from "./MainMobiel";
import Navbar from "../navbar/Navbar";
import Footer from "../../Footer/Footer"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
function Password() {
  return (
    <div>
      <Navbar
      hadi ={<AccountCircleIcon className="AccountCircleIcon" />}
      name={"SYED HADI "}
      
      />
      <Main />
      <MainMobile />
      <Footer />
    </div>
  );
}

export default Password;
