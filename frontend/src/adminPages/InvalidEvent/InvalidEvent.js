import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import Axios from 'axios'

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
    <div>
      {logIn && (roleLogIn == "admin") && <div>
      <Link to="/admin/event-form"><h2>Back</h2></Link>  
      <p>Nama Ibu: {name}</p>
      <p>Tipe Event: {eventtype}</p>
      <p>Nama Event: {eventname}</p>
      <p>Tanggal: {date} {month}</p>
      <p>Bukti:</p>
      <img src={image} />
      <h2>Tidak Valid?</h2>
      <button onClick={invalidEventForm}>Yes</button>
      </div>}
    </div>
  )
}

export default InvalidEvent
