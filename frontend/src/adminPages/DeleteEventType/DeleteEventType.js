import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import Axios from 'axios'

const DeleteEventType = () => {
  const [name, setName] = useState([]);

  const {id} = useParams();
  const history = useHistory();

  const deleteEventType = (e) => {
      e.preventDefault();
      Axios.delete(`http://localhost:5000/delete-event-type/${id}`).then((response) => {
          history.push('/admin/event-type');
      })
  }

  const getEventType = (id) => {
    Axios.post(`http://localhost:5000/event-typeid`, {
        id: id
    }).then((response) => {
        setName(response.data[0].name);
    })
  }

  useEffect(() => {
    getEventType(id);
  }, [])

  return (
    <div>
      <Link to="/admin/event-type"><h2>Back</h2></Link>  
      <p>Nama Tipe Event: {name}</p>
      <h2>Delete this event type?</h2>
      <button onClick={deleteEventType}>Yes</button>
    </div>
  )
}

export default DeleteEventType
