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

  const invalidEventForm = (e) => {
      e.preventDefault();
      Axios.put(`http://localhost:5000/invalid-eventform/${id}`).then((response) => {
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
        setImage(response.data[0].image);
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
      <h2>Tidak Valid?</h2>
      <button onClick={invalidEventForm}>Yes</button>
    </div>
  )
}

export default InvalidEvent
