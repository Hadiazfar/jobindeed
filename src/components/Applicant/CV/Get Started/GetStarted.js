import React from "react"
import Main from "./Main"
import MainMobile from "./MainMobile"
import Dashboardheader from "../../../job_posting_steps/dashoboardheader/Dashboardheader"
import Footer from "../../../Footer/Footer"
import Header from "../Header/Header"

function GetStarted(){
    return (
        <div>
            <Header />
    <Main />
    <MainMobile />
    <Footer />
    </div>
    )
}
export default GetStarted