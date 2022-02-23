import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Axios from 'axios'

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
    <div>
      {logIn && (roleLogIn == "admin") && <div>
      <Link to="/admin/user"><h2>Back</h2></Link>
      <div className="add-user">
          <form>
            <div>
              <input type="text" name="name" placeholder=" Nama Grup Whatsapp" 
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <button type="submit" onClick={addWAGroup}></button>
            <h2>Tambah</h2>
          </form>
          <h2>{WAGroupStatus}</h2>
      </div>
      </div>}
    </div>
  )
}

export default AddUser
