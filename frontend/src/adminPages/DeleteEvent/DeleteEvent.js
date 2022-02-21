import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import Axios from 'axios'

const DeleteEvent = () => {
  const [name, setName] = useState([]);
  const [type, setType] = useState([]);
  const [date, setDate] = useState([]);
  const [month, setMonth] = useState([]);
  const [poin, setPoin] = useState([]);
  
  const {id} = useParams();
  const history = useHistory();

  const [logIn, setLogIn] = useState(false);
  const [roleLogIn, setRoleLogIn] = useState([]);

  Axios.defaults.withCredentials = true;

  const deleteEvent = (e) => {
      e.preventDefault();
      Axios.delete(`http://localhost:5000/delete-event/${id}`).then((response) => {
          history.push('/admin/event');
      })
  }

  const getEventId = (id) => {
    Axios.post(`http://localhost:5000/get-eventid`, {
        id: id
    }).then((response) => {
        setName(response.data[0].name);
        setType(response.data[0].type);
        setDate(response.data[0].date);
        setMonth(response.data[0].month);
        setPoin(response.data[0].poin);
    })
  }

  useEffect(() => {
    Axios.get('http://localhost:5000/login').then((response) => {
    if (response.data.loggedIn) {
        setRoleLogIn(response.data.user[0].role);
        setLogIn(true);
      } else {
        setLogIn(false);
      }
    })
    getEventId(id);
  }, [])

  return (
    <div>
      {logIn && (roleLogIn == "admin") && <div>
      <Link to="/admin/user"><h2>Back</h2></Link>  
      <p>Nama Event: {name}</p>
      <p>Tipe: {type}</p>
      <p>Tanggal: {date} {month}</p>
      <p>Poin: {poin}</p>
      <h2>Delete this event?</h2>
      <button onClick={deleteEvent}>Yes</button>
      </div>}
    </div>
  )
}

export default DeleteEvent
