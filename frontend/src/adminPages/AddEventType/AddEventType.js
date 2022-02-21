import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Axios from 'axios'

import './AddEventType.css'

const AddEventType = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  const [eventStatus, setEventStatus] = useState('');
  const history = useHistory();

  const [logIn, setLogIn] = useState(false);
  const [roleLogIn, setRoleLogIn] = useState([]);

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get('http://localhost:5000/login').then((response) => {
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
    Axios.post('http://localhost:5000/add-eventtype', {
      name: name,
      image: image
    }).then((response) => {
      if (response.data.message) {
        setEventStatus(response.data.message);
      } else {
        history.push(`/admin/event-type`);
      }
    });
  };

  const imageHandler = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  }

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
            <div>
                <input type="file" name="image" accept="image/*" onChange={imageHandler} />
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
