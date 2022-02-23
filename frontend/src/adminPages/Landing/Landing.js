import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

import './Landing.css'

const Landing = () => {
  const [logIn, setLogIn] = useState(false);
  const [roleLogIn, setRoleLogIn] = useState([]);

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_IBUCANGGIH_API}/login`).then((response) => {
    if (response.data.loggedIn) {
        setRoleLogIn(response.data.user[0].role);
        setLogIn(true);
      } else {
        setLogIn(false);
      }
    })
  }, [])

  return (
    <div className="landing-admin">
      {logIn && (roleLogIn == "admin") && <div>
      <h1>Welcome, Admin</h1>
      <h2>Select what page you want to change</h2>
      <Link to="/admin/user"><h3>User Page</h3></Link>
      <Link to="/admin/wagroup"><h3>WA Group Page</h3></Link>
      <Link to="/admin/event-type"><h3>Event Type Page</h3></Link>
      <Link to="/admin/event"><h3>Event Page</h3></Link>
      <Link to="/admin/event-form"><h3>Event Form</h3></Link>
      </div>}
    </div>
  )
}

export default Landing
