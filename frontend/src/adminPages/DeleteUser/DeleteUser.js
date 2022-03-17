import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import Axios from 'axios'

import Logo from "../../img/icon_white_circle.png"
import "./DeleteUser.css"

const DeleteUser = () => {
  const [name, setName] = useState([]);
  const [phone, setPhone] = useState([]);
  const [address, setAddress] = useState([]);
  const [wagroup, setWagroup] = useState([]);
  const [email, setEmail] = useState([]);
  
  const {id} = useParams();
  const history = useHistory();

  const [logIn, setLogIn] = useState(false);
  const [roleLogIn, setRoleLogIn] = useState([]);

  Axios.defaults.withCredentials = true;

  const deleteUser = (e) => {
      e.preventDefault();
      Axios.delete(`${process.env.REACT_APP_IBUCANGGIH_API}/delete-user/${id}`).then((response) => {
          history.push('/admin/user');
      })
  }

  const getUserId = (id) => {
    Axios.post(`${process.env.REACT_APP_IBUCANGGIH_API}/profil`, {
        id: id
    }).then((response) => {
        setName(response.data[0].name);
        setPhone(response.data[0].phone);
        setAddress(response.data[0].address);
        setWagroup(response.data[0].wagroup);
        setEmail(response.data[0].email);
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
    getUserId(id);
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
      <div className="delete-admin">
        <p>Nama: {name}</p>
        <p>Email: {email}</p>
        <p>No Handphone: {phone}</p>
        <p>Alamat: {address}</p>
        <p>Asal Grup Whatsapp: {wagroup}</p>
        <h2>Delete this user?</h2>
        <button onClick={deleteUser}>Yes</button>
      </div>
      </div>}
    </div>
  )
}

export default DeleteUser
