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
          </Switch>
        </Router>
      </div>
    );
  }
  
  export default RouteConfig;