import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useState, useEffect } from 'react';
import Axios from 'axios'

import Landing from "./userPages/Landing/Landing";
import Login from "./userPages/Login/Login";
import Register from "./userPages/Register/Register";
import Profile from "./userPages/Profile/Profile";
import EditProfile from "./userPages/EditProfile/EditProfile";
import EditProfileEmail from "./userPages/EditProfileEmail/EditProfileEmail";
import EditProfilePassword from "./userPages/EditProfilePassword/EditProfilePassword";
import Home from "./userPages/Home/Home";
import AddReward from "./userPages/AddReward/AddReward";
import Submitted from "./userPages/Submitted/Submitted";
import DetailReward from "./userPages/DetailReward/DetailReward";
import Calendar from "./userPages/Calendar/Calendar";
import NotFound from "./userPages/NotFound/NotFound";

import LandingAdmin from "./adminPages/Landing/Landing"
import User from "./adminPages/User/User"
import AddUser from "./adminPages/AddUser/AddUser"
import EditUser from "./adminPages/EditUser/EditUser"
import DeleteUser from "./adminPages/DeleteUser/DeleteUser"
import WAGroup from "./adminPages/WAGroup/WAGroup"
import AddWAGroup from "./adminPages/AddWAGroup/AddWAGroup"
import EditWAGroup from "./adminPages/EditWAGroup/EditWAGroup"
import DeleteWAGroup from "./adminPages/DeleteWAGroup/DeleteWAGroup"
import EventType from "./adminPages/EventType/EventType"
import AddEventType from "./adminPages/AddEventType/AddEventType"
import EditEventType from "./adminPages/EditEventType/EditEventType"
import DeleteEventType from "./adminPages/DeleteEventType/DeleteEventType"
import Event from "./adminPages/Event/Event"
import AddEvent from "./adminPages/AddEvent/AddEvent"
import EditEvent from "./adminPages/EditEvent/EditEvent"
import DeleteEvent from "./adminPages/DeleteEvent/DeleteEvent"
import EventForm from "./adminPages/EventForm/EventForm"
import ValidEvent from "./adminPages/ValidEvent/ValidEvent"
import InvalidEvent from "./adminPages/InvalidEvent/InvalidEvent"

const RouteManager = () => {
    const [logIn, setLogIn] = useState(false);
    const [id, setID] = useState([]);
    const [role, setRole] = useState([]);

    Axios.defaults.withCredentials = true;

    useEffect(() => {
        Axios.get('http://localhost:5000/login').then((response) => {
          if (response.data.loggedIn) {
            setID(response.data.user[0].id);
            setRole(response.data.user[0].role);
            setLogIn(true);
          } else {
            setLogIn(false);
          }
        })
    }, [])

    if (logIn) {
        if (role == "user") {
            return (
                <Router>
                    <Switch>
                        <Route path="/sign-up">
                            <Register />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/profil/:id">
                            <Profile />
                        </Route>
                        <Route path="/edit-profil/:id" exact>
                            <EditProfile />
                        </Route>
                        <Route path="/edit-profil/email/:id">
                            <EditProfileEmail />
                        </Route>
                        <Route path="/edit-profil/password/:id">
                            <EditProfilePassword />
                        </Route>
                        <Route path="/homepage/:id">
                            <Home />
                        </Route>
                        <Route path="/tambah-poin-reward/:id">
                            <AddReward />
                        </Route>
                        <Route path="/submitted/:id">
                            <Submitted />
                        </Route>
                        <Route path="/detail-poin-reward/:id">
                            <DetailReward />
                        </Route>
                        <Route path="/kalender/:id">
                            <Calendar />
                        </Route>
                        <Route path="/not-found/:id">
                            <NotFound />
                        </Route>
                        <Route path="/admin">
                            <Redirect to="/login" />
                        </Route>
                        <Route>
                            <Redirect to={`/not-found/${id}`} />
                        </Route>
                    </Switch>
                </Router>
            )
        } else {
            return (
                <Router>
                    <Switch>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/admin" exact>
                            <LandingAdmin />
                        </Route>
                        <Route path="/admin/user">
                            <User />
                        </Route>
                        <Route path="/admin/add-user">
                            <AddUser />
                        </Route>
                        <Route path="/admin/edit-user/:id">
                            <EditUser />
                        </Route>
                        <Route path="/admin/delete-user/:id">
                            <DeleteUser />
                        </Route>
                        <Route path="/admin/wagroup">
                            <WAGroup />
                        </Route>
                        <Route path="/admin/add-wagroup">
                            <AddWAGroup />
                        </Route>
                        <Route path="/admin/edit-wagroup/:id">
                            <EditWAGroup />
                        </Route>
                        <Route path="/admin/delete-wagroup/:id">
                            <DeleteWAGroup />
                        </Route>
                        <Route path="/admin/event-type">
                            <EventType />
                        </Route>
                        <Route path="/admin/add-event-type">
                            <AddEventType />
                        </Route>
                        <Route path="/admin/edit-event-type/:id">
                            <EditEventType />
                        </Route>
                        <Route path="/admin/delete-event-type/:id">
                            <DeleteEventType />
                        </Route>
                        <Route path="/admin/event">
                            <Event />
                        </Route>
                        <Route path="/admin/add-event">
                            <AddEvent />
                        </Route>
                        <Route path="/admin/edit-event/:id">
                            <EditEvent />
                        </Route>
                        <Route path="/admin/delete-event/:id">
                            <DeleteEvent />
                        </Route>
                        <Route path="/admin/event-form">
                            <EventForm />
                        </Route>
                        <Route path="/admin/valid-event-form/:id">
                            <ValidEvent />
                        </Route>
                        <Route path="/admin/invalid-event-form/:id">
                            <InvalidEvent />
                        </Route>
                        <Route path="/homepage">
                            <Redirect to="/login" />
                        </Route>
                        <Route>
                            <Redirect to="/admin" />
                        </Route>
                    </Switch>
                </Router>
            )
        }
    } else {
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
                    <Route>
                        <Redirect to="/login" />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default RouteManager