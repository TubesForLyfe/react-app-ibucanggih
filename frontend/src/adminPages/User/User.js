import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

import "./User.css"

const User = () => {
  const [user, setUser] = useState([]);

  const [logIn, setLogIn] = useState(false);
  const [roleLogIn, setRoleLogIn] = useState([]);

  Axios.defaults.withCredentials = true;

  const getUser = () => {
      Axios.get(`${process.env.REACT_APP_IBUCANGGIH_API}/get-user`).then((response) => {
          setUser(response.data);
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
    getUser();
  }, [])

  return (
    <div>
      {logIn && (roleLogIn == "admin") && <div>
      <div>
          <Link to="/admin"><h2>Back</h2></Link>
          <Link to="/admin/add-user"><h2>Add User</h2></Link>
          <div>
              {user.map((val, key) => {
                  return (
                    <div className="user-admin">
                        <p>Nama Lengkap: {val.name}</p>
                        <p>Email: {val.email}</p>
                        <p>No Handphone: {val.phone}</p>
                        <p>Alamat: {val.address}</p>
                        <p>Asal Grup Whatsapp: {val.wagroup}</p>
                        <Link to={`/admin/edit-user/${val.id}`}><button>Edit</button></Link>
                        <Link to={`/admin/delete-user/${val.id}`}><button>Delete</button></Link>
                    </div>
                  )
              })}
          </div>
      </div>
      </div>}
    </div>
  )
}

export default User
