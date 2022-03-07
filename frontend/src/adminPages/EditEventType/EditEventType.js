import React, { useState, useEffect} from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import Axios from 'axios'

import './EditEventType.css'

const EditEventType = () => {
  const [name, setName] = useState([]);
  const [image, setImage] = useState('');
  const [message, setMessage] = useState([]);

  const {id} = useParams();
  const history = useHistory();

  const [logIn, setLogIn] = useState(false);
  const [roleLogIn, setRoleLogIn] = useState([]);

  Axios.defaults.withCredentials = true;

  const updateEventType = (e) => {
    e.preventDefault();
    Axios.put(`${process.env.REACT_APP_IBUCANGGIH_API}/edit-event-type`, {
      id: id,
      name: name,
      image: image
    }).then((response) => {
      if (response.data.message) {
        setMessage(response.data.message);
      } else {
        history.push(`/admin/event-type`);
      }
    });
  }

  const getEventTypeId = (id) => {
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
    getEventTypeId(id);
    fetch(`${process.env.REACT_APP_IBUCANGGIH_API}/image-eventtype/${id}`, {
      method: 'GET',
      headers: {
        "Content-Type": 'application/json, charset=UTF-8',
        'Accept': 'application/json, text/html'
      },
      credentials: 'include'
    }).then(data => data.json()).then((data) => {
      setImage(`${process.env.REACT_APP_IBUCANGGIH_API}/` + data.image);
    })
  }, [])

  const imageHandler = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  }
    
  return (
    <div>
      {logIn && (roleLogIn == "admin") && <div>
      <Link to="/admin/event-type"><h2>Back</h2></Link>
      <form className="editeventtype-admin">
            <div>
              <input type="text" name="name" placeholder=" Nama Tipe Event" value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div>
                <input type="file" name="image" accept="image/*" onChange={imageHandler} />
            </div>
            <img className="imageeventtype-admin" src={image} />
            <button onClick={updateEventType}></button>
            <h2>Update</h2>
      </form>
      <h1>{message}</h1>
      </div>}
    </div>
  )
}

export default EditEventType
