import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Axios from 'axios'

import Logo from "../../img/icon_white_circle.png"
import './AddEventType.css'

const AddEventType = () => {
  const [name, setName] = useState('');

  const [eventStatus, setEventStatus] = useState('');
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

  const addEventType = (e) => {
    e.preventDefault();
    Axios.post(`${process.env.REACT_APP_IBUCANGGIH_API}/add-eventtype`, {
      name: name,
      image: "uploads/DefaultPicture.png"
    }).then((response) => {
      if (response.data.message) {
        setEventStatus(response.data.message);
      } else {
        history.push(`/admin/event-type`);
      }
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
      <Link to="/admin/banner"><h3 className="linkadmin">Banner</h3></Link>
      <Link to="/admin/artikel"><h3 className="linkadmin">Artikel</h3></Link>
      <div className="add-admin">
          <form>
            <div>
              <input type="text" name="name" placeholder=" Nama Tipe Event" 
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="add-eventtypeadmin">
              <button type="submit" onClick={addEventType}></button>
              <h2>Tambah</h2>
            </div>
          </form>
          <h1 className="addstatus-admin">{eventStatus}</h1>
      </div>
      </div>}
    </div>
  )
}

export default AddEventType
