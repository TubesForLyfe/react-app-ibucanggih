import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from 'react';

import Landing from "./userPages/Landing/Landing";
import Login from "./userPages/Login/Login";
import Register from "./userPages/Register/Register";

const RouteManager = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Landing />
                </Route>
                <Route path="/sign-up">
                    <Register />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </Router>
    )
}

export default RouteManager