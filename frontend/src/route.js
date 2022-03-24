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
import ResetPoin from "./adminPages/ResetPoin/ResetPoin"
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
import Banner from "./adminPages/Banner/Banner"
import AddBanner from "./adminPages/AddBanner/AddBanner"
import DeleteBanner from "./adminPages/DeleteBanner/DeleteBanner"
import Artikel from "./adminPages/Artikel/Artikel"
import AddArtikel from "./adminPages/AddArtikel/AddArtikel"
import DeleteArtikel from "./adminPages/DeleteArtikel/DeleteArtikel"

const RouteManager = () => {
    const [logIn, setLogIn] = useState(false);
    const [idLogIn, setIDLogIn] = useState([]);
    const [roleLogIn, setRoleLogIn] = useState([]);

    Axios.defaults.withCredentials = true;

    useEffect(() => {
        Axios.get(`${process.env.REACT_APP_IBUCANGGIH_API}/login`).then((response) => {
          if (response.data.loggedIn) {
            setIDLogIn(response.data.user[0].id);
            setRoleLogIn(response.data.user[0].role);
            setLogIn(true);
          } else {
            setLogIn(false);
          }
        })
    }, [])

    return (
        <Router>
            <Switch>
                {!logIn && <div className="app">
                <Route path="/" exact component={Landing} />
                <Route path="/sign-up" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="*">
                    <Redirect to="/" />
                </Route>
                </div>}

                {logIn && roleLogIn == "user" && <div className="app">
                <Route path="/profil/:id" component={Profile} />
                <Route path="/edit-profil/:id" exact component={EditProfile} />
                <Route path="/edit-profil/email/:id" component={EditProfileEmail} />
                <Route path="/edit-profil/password/:id" component={EditProfilePassword} />
                <Route path="/homepage/:id" component={Home} />
                <Route path="/tambah-poin-reward/:id" component={AddReward} />
                <Route path="/submitted/:id" component={Submitted} />
                <Route path="/detail-poin-reward/:id" component={DetailReward} />
                <Route path="/kalender/:id" component={Calendar} />
                <Route path="/not-found/:id" component={NotFound} />
                <Route path="*">
                    <Redirect to={`/homepage/${idLogIn}`} />
                </Route>
                </div>}
                
                {logIn && roleLogIn == "admin" && <div>
                <Route path="/admin" exact component={LandingAdmin} />
                <Route path="/admin/user" component={User} />
                <Route path="/admin/add-user" component={AddUser} />
                <Route path="/admin/edit-user/:id" component={EditUser} />
                <Route path="/admin/delete-user/:id" component={DeleteUser} />
                <Route path="/admin/reset-poin-user/:id" component={ResetPoin} />
                <Route path="/admin/wagroup" component={WAGroup} />
                <Route path="/admin/add-wagroup" component={AddWAGroup} />
                <Route path="/admin/edit-wagroup/:id" component={EditWAGroup} />
                <Route path="/admin/delete-wagroup/:id" component={DeleteWAGroup} />
                <Route path="/admin/event-type" component={EventType} />
                <Route path="/admin/add-event-type" component={AddEventType} />
                <Route path="/admin/edit-event-type/:id" component={EditEventType} />
                <Route path="/admin/delete-event-type/:id" component={DeleteEventType} />
                <Route path="/admin/event" component={Event} />
                <Route path="/admin/add-event" component={AddEvent} />
                <Route path="/admin/edit-event/:id" component={EditEvent} />
                <Route path="/admin/delete-event/:id" component={DeleteEvent} />
                <Route path="/admin/event-form" component={EventForm} />
                <Route path="/admin/valid-event-form/:id" component={ValidEvent} />
                <Route path="/admin/invalid-event-form/:id" component={InvalidEvent} />
                <Route path="/admin/banner" component={Banner} />
                <Route path="/admin/add-banner" component={AddBanner} />
                <Route path="/admin/delete-banner/:id" component={DeleteBanner} />
                <Route path="/admin/artikel" component={Artikel} />
                <Route path="/admin/add-artikel" component={AddArtikel} />
                <Route path="/admin/delete-artikel/:id" component={DeleteArtikel} />
                <Route path="*">
                    <Redirect to="/admin" />
                </Route>
                </div>}
            </Switch>
        </Router>
    )
}

export default RouteManager