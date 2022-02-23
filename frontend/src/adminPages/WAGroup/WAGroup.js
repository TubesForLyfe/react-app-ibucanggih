import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

import "./WAGroup.css"

const WAGroup = () => {
  const [WAGroup, setWAGroup] = useState([]);

  const [logIn, setLogIn] = useState(false);
  const [roleLogIn, setRoleLogIn] = useState([]);

  Axios.defaults.withCredentials = true;

  const getWAGroup = () => {
      Axios.get(`${process.env.REACT_APP_IBUCANGGIH_API}/get-wagroup`).then((response) => {
          setWAGroup(response.data);
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
    getWAGroup();
  }, [])

  return (
    <div>
      {logIn && (roleLogIn == "admin") && <div>
      <div>
          <Link to="/admin"><h2>Back</h2></Link>
          <Link to="/admin/add-wagroup"><h2>Add WA Group</h2></Link>
          <div>
              {WAGroup.map((val, key) => {
                  return (
                    <div className="wagroup-admin">
                        <p>Nama Grup Whataapp: {val.name}</p>
                        <Link to={`/admin/edit-wagroup/${val.id}`}><button>Edit</button></Link>
                        <Link to={`/admin/delete-wagroup/${val.id}`}><button>Delete</button></Link>
                    </div>
                  )
              })}
          </div>
      </div>
      </div>}
    </div>
  )
}

export default WAGroup
