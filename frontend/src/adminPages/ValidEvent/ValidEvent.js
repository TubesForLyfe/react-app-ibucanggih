import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import Axios from 'axios'

const ValidEvent = () => {
  const [name, setName] = useState([]);
  const [userID, setUserID] = useState([]);
  const [eventtype, setEventtype] = useState([]);
  const [eventname, setEventname] = useState([]);
  const [date, setDate] = useState([]);
  const [month, setMonth] = useState([]);
  const [poin, setPoin] = useState([]);
  const [image, setImage] = useState([]);
  
  const {id} = useParams();
  const history = useHistory();

  const validEventForm = (e) => {
      e.preventDefault();
      Axios.put(`http://localhost:5000/valid-eventform/${id}`).then((response) => {})
      Axios.put(`http://localhost:5000/edit-user-poin/${userID}`, {
        poin: poin
      }).then((response) => {
        history.push('/admin/event-form');
      })
  }

  const getEventFormId = (id) => {
    Axios.post(`http://localhost:5000/get-eventformid`, {
        id: id
    }).then((response) => {
        setName(response.data[0].name);
        setEventtype(response.data[0].eventtype);
        setEventname(response.data[0].eventname);
        setDate(response.data[0].date);
        setMonth(response.data[0].month);
        setPoin(response.data[0].poin)
        setImage(response.data[0].image);
        setUserID(response.data[0].user_id);
    })
  }

  useEffect(() => {
    getEventFormId(id);
  }, [])

  return (
    <div>
      <Link to="/admin/event-form"><h2>Back</h2></Link>  
      <p>Nama Ibu: {name}</p>
      <p>Tipe Event: {eventtype}</p>
      <p>Nama Event: {eventname}</p>
      <p>Tanggal: {date} {month}</p>
      <p>Bukti:</p>
      <img src={image} />
      <h2>Valid?</h2>
      <button onClick={validEventForm}>Yes</button>
    </div>
  )
}

export default ValidEvent
