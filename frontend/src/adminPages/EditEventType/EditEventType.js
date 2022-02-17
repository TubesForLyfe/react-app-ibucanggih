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

  const updateEventType = (e) => {
    e.preventDefault();
    Axios.put('http://localhost:5000/edit-event-type', {
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
    Axios.post(`http://localhost:5000/event-typeid`, {
        id: id
    }).then((response) => {
        setName(response.data[0].name);
    })
  }

  useEffect(() => {
    getEventTypeId(id);
  }, [])

  const imageHandler = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  }
    
  return (
    <div>
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
            <button onClick={updateEventType}></button>
            <h2>Update</h2>
      </form>
      <h1>{message}</h1>
    </div>
  )
}

export default EditEventType
