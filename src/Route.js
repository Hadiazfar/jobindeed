import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Title from "../src/components/job_posting_steps/step1/Title";
import Description from "../src/components/job_posting_steps/step2/Description";
import Expertise from "../src/components/job_posting_steps/step3/Expertise";
import Budget from "../src/components/job_posting_steps/step4/Budget";
import Review from "../src/components/job_posting_steps/step5/Review";
import Login from "../src/components/Forms/Login/Login";
import ContinueWithEmai from "../src/components/Forms/Continue_With_Emai/ContinueWithEmai";
import ContinueWitGoogle from "../src/components/Forms/Continue_With_Google/ContinueWitGoogle";
import Signup from "../src/components/Forms/Signup/Singup";
import Password from "../src/components/Forms/Password/Password";
import GetStarted from "../src/components/Applicant/CV/Get Started/GetStarted"
import Guide from "./components/Applicant/CV/Guidenes/Guide";
import Category from './components/Applicant/CV/Category/Category'
import Expertisecv from "./components/Applicant/CV/Expertise/Expertisecv";
import ExpertiseLevel from "./components/Applicant/CV/Expertise Level/ExpertiseLevel";
import Education from "./components/Applicant/Education/Education";
import Employment from "./components/Applicant/CV/Empoyment/Employment"
import Language from "./components/Applicant/CV/Language/Language"
import Titlecv from "./components/Applicant/CV/Title/Titlecv"
import Location from "./components/Applicant/CV/Location/Location"
import Phone from './components/Applicant/CV/Phone/Phone'
import Preview from './components/Applicant/CV/Previwe/Preview'
import ProfilePicture from './components/Applicant/CV/ProfilePicture/ProfilePicture'
import Dashboard from './components/Applicant/Main Dashboard/Dashboard/Dashboard'
import OrganizationDashboard from './components/organization dashboard/OrganizationDashboard/OrganizationDashboard'
import View from './components/job post preview/preview/View'
import Cvpreview from "./components/job post preview/Cv preview/Cvpreview";
import Hiring from "./components/job post preview/Cv preview/Hiring";

function RouteConfig() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/Password" component={Password} />
            <Route path="/Signup" component={Signup} />
            <Route path="/ContinueWithEmai" component={ContinueWithEmai} />
            <Route path="/ContinueWitGoogle" component={ContinueWitGoogle} />
            <Route path="/Title" component={Title} />
            <Route path="/Description" component={Description} />
            <Route path="/Expertise" component={Expertise} />
            <Route path="/Budget" component={Budget} />
            <Route path="/Review" component={Review} />
            <Route path="/GetStarted" component={GetStarted} />
            <Route path="/Guide" component={Guide} />
            <Route path="/Category" component={Category} />
            <Route path="/Expertisecv" component={Expertisecv} />
            <Route path="/ExpertiseLevel" component={ExpertiseLevel} />
            <Route path="/Education" component={Education} />
            <Route path="/Employment" component={Employment} />
            <Route path="/Language" component={Language} />
            <Route path="/Titlecv" component={Titlecv} />
            <Route path="/Location" component={Location} />
            <Route path="/Phone" component={Phone} />
            <Route path="/Preview" component={Preview} />
            <Route path="/ProfilePicture" component={ProfilePicture} />
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/OrganizationDashboard" component={OrganizationDashboard} />
            <Route path="/View" component={View} />
            <Route path="/Cvpreview" component={Cvpreview} />
            <Route path="/Hiring" component={Hiring} />
          
          </Switch>
        </Router>
      </div>
    );
  }
  
  export default RouteConfig;