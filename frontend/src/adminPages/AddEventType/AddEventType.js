import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Axios from 'axios'

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
    <div>
      {logIn && (roleLogIn == "admin") && <div>
      <Link to="/admin/event-type"><h2>Back</h2></Link>
      <div className="add-eventtypeadmin">
          <form>
            <div>
              <input type="text" name="name" placeholder=" Nama Tipe Event" 
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <button type="submit" onClick={addEventType}></button>
            <h2>Tambah</h2>
          </form>
          <h1>{eventStatus}</h1>
      </div>
      </div>}
    </div>
  )
}

export default AddEventType
