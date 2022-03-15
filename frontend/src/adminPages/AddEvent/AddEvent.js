import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Axios from 'axios'

import Logo from "../../img/icon_white_circle.png"

import './AddEvent.css'

const AddEvent = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [date, setDate] = useState('');
  const [month, setMonth] = useState('');
  const [poin, setPoin] = useState('');

  const history = useHistory();

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

  const addEvent = (e) => {
    e.preventDefault();
    Axios.post(`${process.env.REACT_APP_IBUCANGGIH_API}/add-eventname`, {
      name: name,
      type: type,
      date: date,
      month: month,
      poin: poin
    }).then((response) => {
      history.push(`/admin/event`);
    });
  };

  return (
    <div className="landing-admin">
      {logIn && (roleLogIn == "admin") && <div>
      <img className="imageadmin" src={Logo} />
      <Link to="/admin/user"><h3 className="linkadmin">User</h3></Link>
      <Link to="/admin/wagroup"><h3 className="linkadmin">WA Group</h3></Link>
      <Link to="/admin/event-type"><h3 className="linkadmin">Event Type</h3></Link>
      <Link to="/admin/event"><h3 className="linkadmin">Event</h3></Link>
      <Link to="/admin/event-form"><h3 className="linkadmin">Event Form</h3></Link>
      <div className="add-admin">
          <form>
            <div>
              <input type="text" name="name" placeholder=" Nama Event" 
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div>
              <input type="email" name="email" placeholder=" Tipe Event" 
                onChange={(e) => {
                  setType(e.target.value);
                }}
              />
            </div>
            <div>
              <input type="number" name="phone" placeholder=" Tanggal (Format: dd)" 
                onChange={(e) => {
                  if (e.target.value < 10) {
                    setDate("0" + e.target.value);
                  } else {
                    setDate(e.target.value);
                  }
                }}
              />
            </div>
            <div>
              <input type="text" name="password" placeholder=" Bulan (Format: Jan, Feb, etc)" 
                onChange={(e) => {
                  setMonth(e.target.value);
                }}
              />
            </div>
            <div>
              <input type="text" name="wagroup" placeholder=" Poin" 
                onChange={(e) => {
                  setPoin(e.target.value);
                }}
              />
            </div>
            <div className="add-eventadmin">
              <button type="submit" onClick={addEvent}></button>
              <h2>Tambah</h2>
            </div>
          </form>
      </div>
      </div>}
    </div>
  )
}

export default AddEvent
