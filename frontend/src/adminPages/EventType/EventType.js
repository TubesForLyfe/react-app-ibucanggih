import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

import "./EventType.css"

const EventType = () => {
    const [eventType, setEventType] = useState([]);

    const getEventType = () => {
        Axios.get('http://localhost:5000/get-eventtype').then((response) => {
            setEventType(response.data);
        })
    }

    useEffect(() => {
        getEventType();
    }, [])

  return (
    <div>
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
    </div>
  )
}

export default EventType
