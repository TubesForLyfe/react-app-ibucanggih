import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Axios from 'axios'

import "./EventForm.css"

const EventForm = () => {
  const [eventForm, setEventForm] = useState([]);
  const history = useHistory();

  const [logIn, setLogIn] = useState(false);
  const [roleLogIn, setRoleLogIn] = useState([]);

  Axios.defaults.withCredentials = true;

  const getEventForm = () => {
      Axios.get(`${process.env.REACT_APP_IBUCANGGIH_API}/get-eventform`).then((response) => {
          setEventForm(response.data);
      })
  }

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_IBUCANGGIH_API}/login`).then((response) => {
    if (response.data.loggedIn) {
        setRoleLogIn(response.data.user[0].role);
        setLogIn(true);
      } else {
        setLogIn(false);
      }
    })
    getEventForm();
  }, [])

  return (
    <div>
      {logIn && (roleLogIn == "admin") && <div>
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
      </div>}
    </div>
  )
}

export default EventForm