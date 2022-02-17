import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Axios from 'axios'

import "./EventForm.css"

const EventForm = () => {
    const [eventForm, setEventForm] = useState([]);
    const history = useHistory();

    const getEventForm = () => {
        Axios.get('http://localhost:5000/get-eventform').then((response) => {
            setEventForm(response.data);
        })
    }

    useEffect(() => {
        getEventForm();
    }, [])

  return (
    <div>
      <div>
          <Link to="/admin"><h2>Back</h2></Link>
          <div>
              {eventForm.map((val, key) => {
                  return (
                    <div className="eventform-admin">
                        <p>Nama Ibu: {val.name}</p>
                        <p>Nama Event: {val.eventname}</p>
                        <p>Tipe Event: {val.eventtype}</p>
                        <p>Tanggal: {val.date} {val.month}</p>
                        <p>Bukti:</p>
                        <img className="eventform-img" src={val.image} />
                        <Link to={`/admin/valid-event-form/${val.id}`}><button>Valid</button></Link>
                        <Link to={`/admin/invalid-event-form/${val.id}`}><button>Tidak Valid</button></Link>
                    </div>
                  )
              })}
          </div>
      </div>
    </div>
  )
}

export default EventForm