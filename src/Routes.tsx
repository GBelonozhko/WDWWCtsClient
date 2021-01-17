import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import  Dashboard from "./containers/Dashboard";
import  Home  from "./containers/Home";
import  SignIn  from "./containers/SignIn";
import  SignUp  from "./containers/SignUp";

const Routes: React.FC = () => {

    return(
        <BrowserRouter>

            <Switch>
            <Route exact path="/" component={Home}  />
            <Route path="/SignUp" exact component={SignUp} />
            <Route path="/SignIn" exact component={SignIn} />
         
            <Route path="/dashboard" exact component={Dashboard}/>
            </Switch>

        </BrowserRouter>
    )
};

export default Routes;