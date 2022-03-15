import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Axios from 'axios'

import Logo from "../../img/icon_white_circle.png"
import './AddWAGroup.css'

const AddUser = () => {
  const [name, setName] = useState('');

  const [WAGroupStatus, setWAGroupStatus] = useState('');
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

  const addWAGroup = (e) => {
    e.preventDefault();
    Axios.post(`${process.env.REACT_APP_IBUCANGGIH_API}/add-wagroup`, {
      name: name,
    }).then((response) => {
      if (response.data.message) {
        setWAGroupStatus(response.data.message);
      } else {
        history.push(`/admin/wagroup`);
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
      <div className="add-admin">
          <form>
            <div>
              <input type="text" name="name" placeholder=" Nama Grup Whatsapp" 
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className='add-wagroup-admin'>
              <button type="submit" onClick={addWAGroup}></button>
              <h2>Tambah</h2>
            </div>
          </form>
          <h2 className="addstatus-admin">{WAGroupStatus}</h2>
      </div>
      </div>}
    </div>
  )
}

export default AddUser
