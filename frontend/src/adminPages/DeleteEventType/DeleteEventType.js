import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import Axios from 'axios'

const DeleteEventType = () => {
  const [name, setName] = useState([]);

  const {id} = useParams();
  const history = useHistory();

  const [logIn, setLogIn] = useState(false);
  const [roleLogIn, setRoleLogIn] = useState([]);

  Axios.defaults.withCredentials = true;

  const deleteEventType = (e) => {
      e.preventDefault();
      Axios.delete(`${process.env.REACT_APP_IBUCANGGIH_API}/delete-event-type/${id}`).then((response) => {
          history.push('/admin/event-type');
      })
  }

  const getEventType = (id) => {
    Axios.post(`${process.env.REACT_APP_IBUCANGGIH_API}/event-typeid`, {
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
    getEventType(id);
  }, [])

  return (
    <div>
      {logIn && (roleLogIn == "admin") && <div>
      <Link to="/admin/event-type"><h2>Back</h2></Link>  
      <p>Nama Tipe Event: {name}</p>
      <h2>Delete this event type?</h2>
      <button onClick={deleteEventType}>Yes</button>
      </div>}
    </div>
  )
}

export default DeleteEventType
