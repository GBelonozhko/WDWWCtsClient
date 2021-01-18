import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import  Dashboard from "./containers/Dashboard";
import  Home  from "./containers/Home";
import  SignIn  from "./containers/SignIn";
import  SignUp  from "./containers/SignUp";
import AppBar from './components/AppBar';
import TodoList from "./containers/TodoList";

const Routes: React.FC = () => {

    return(
        <BrowserRouter>
        <AppBar/>
            <Switch>
            <Route exact path="/" component={SignIn}  />
            <Route path="/SignUp" exact component={SignUp} />
            <Route path="/SignIn" exact component={SignIn} />
            <Route path="/dashboard" exact component={Dashboard}/>
            <Route path="/TodoListDashboard" exact component={TodoList}/>
            </Switch>

        </BrowserRouter>
    )
};

export default Routes;