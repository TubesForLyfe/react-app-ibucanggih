import React from 'react'
import { Link } from 'react-router-dom'

import './Landing.css'

const Landing = () => {
  return (
    <div className="landing-admin">
      <h1>Welcome, Admin</h1>
      <h2>Select what page you want to change</h2>
      <Link to="/admin/user"><h3>User Page</h3></Link>
      <Link to="/admin/wagroup"><h3>WA Group Page</h3></Link>
      <Link to="/admin/event-type"><h3>Event Type Page</h3></Link>
      <Link to="/admin/event"><h3>Event Page</h3></Link>
      <Link to="/admin/event-form"><h3>Event Form</h3></Link>
    </div>
  )
}

export default Landing
