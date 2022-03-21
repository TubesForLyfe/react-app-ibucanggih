import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import Axios from 'axios'

import Logo from "../../img/icon_white_circle.png"

const InvalidEvent = () => {
  const [name, setName] = useState([]);
  const [eventtype, setEventtype] = useState([]);
  const [eventname, setEventname] = useState([]);
  const [date, setDate] = useState([]);
  const [month, setMonth] = useState([]);
  const [image, setImage] = useState([]);
  
  const {id} = useParams();
  const history = useHistory();

  const [logIn, setLogIn] = useState(false);
  const [roleLogIn, setRoleLogIn] = useState([]);

  Axios.defaults.withCredentials = true;

  const invalidEventForm = (e) => {
      e.preventDefault();
      Axios.put(`${process.env.REACT_APP_IBUCANGGIH_API}/invalid-eventform/${id}`).then((response) => {
          history.push('/admin/event-form');
      })
  }

  const getEventFormId = (id) => {
    Axios.post(`${process.env.REACT_APP_IBUCANGGIH_API}/get-eventformid`, {
        id: id
    }).then((response) => {
        setName(response.data[0].name);
        setEventtype(response.data[0].eventtype);
        setEventname(response.data[0].eventname);
        setDate(response.data[0].date);
        setMonth(response.data[0].month);
        setImage(response.data[0].image);
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
    getEventFormId(id);
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
        <p>Nama Ibu: {name}</p>
        <p>Tipe Event: {eventtype}</p>
        <p>Nama Event: {eventname}</p>
        <p>Tanggal: {date} {month}</p>
        <p>Bukti:</p>
        <img src={`${process.env.REACT_APP_IBUCANGGIH_API}/` + image} />
        <h2>Tidak Valid?</h2>
        <button onClick={invalidEventForm}>Yes</button>
      </div>
      </div>}
    </div>
  )
}

export default InvalidEvent
