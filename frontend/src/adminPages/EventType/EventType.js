import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

import "./EventType.css"

const EventType = () => {
  const [eventType, setEventType] = useState([]);

  const [logIn, setLogIn] = useState(false);
  const [roleLogIn, setRoleLogIn] = useState([]);

  Axios.defaults.withCredentials = true;

  const getEventType = () => {
      Axios.get('http://localhost:5000/get-eventtype').then((response) => {
          setEventType(response.data);
      })
  }

  useEffect(() => {
    Axios.get('http://localhost:5000/login').then((response) => {
    if (response.data.loggedIn) {
        setRoleLogIn(response.data.user[0].role);
        setLogIn(true);
      } else {
        setLogIn(false);
      }
    })
    getEventType();
  }, [])

  return (
    <div>
      {logIn && (roleLogIn == "admin") && <div>
      <div>
          <Link to="/admin"><h2>Back</h2></Link>
          <Link to="/admin/add-event-type"><h2>Add Event</h2></Link>
          <div>
              {eventType.map((val, key) => {
                  return (
                    <div className="eventtype-admin">
                        <p>Event Type: {val.name}</p>
                        <img className="eventtype-img" src={val.image} />
                        <Link to={`/admin/edit-event-type/${val.id}`}><button>Edit</button></Link>
                        <Link to={`/admin/delete-event-type/${val.id}`}><button>Delete</button></Link>
                    </div>
                  )
              })}
          </div>
      </div>
      </div>}
    </div>
  )
}

export default EventType
