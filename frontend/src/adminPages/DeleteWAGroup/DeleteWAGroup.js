import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import Axios from 'axios'

import Logo from "../../img/icon_white_circle.png"

const DeleteWAGroup = () => {
  const [name, setName] = useState([]);

  const {id} = useParams();
  const history = useHistory();

  const [logIn, setLogIn] = useState(false);
  const [roleLogIn, setRoleLogIn] = useState([]);

  Axios.defaults.withCredentials = true;

  const deleteWAGroup = (e) => {
      e.preventDefault();
      Axios.delete(`${process.env.REACT_APP_IBUCANGGIH_API}/delete-wagroup/${id}`).then((response) => {
          history.push('/admin/wagroup');
      })
  }

  const getWAGroup = (id) => {
    Axios.post(`${process.env.REACT_APP_IBUCANGGIH_API}/get-wagroupid`, {
        id: id
    }).then((response) => {
        setName(response.data[0].name);
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
    getWAGroup(id);
  }, [])

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
      <div className='delete-admin'>
        <p>Nama Grup Whatsapp: {name}</p>
        <h2>Delete this whatsapp group?</h2>
        <button onClick={deleteWAGroup}>Yes</button>
      </div>
      </div>}
    </div>
  )
}

export default DeleteWAGroup
