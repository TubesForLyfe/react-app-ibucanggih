import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

import "./User.css"

const User = () => {
    const [user, setUser] = useState([]);

    const getUser = () => {
        Axios.get('http://localhost:5000/get-user').then((response) => {
            setUser(response.data);
        })
    }

    useEffect(() => {
        getUser();
    }, [])

  return (
    <div>
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
    </div>
  )
}

export default User
