import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import Axios from 'axios'

const DeleteWAGroup = () => {
  const [name, setName] = useState([]);

  const {id} = useParams();
  const history = useHistory();

  const deleteWAGroup = (e) => {
      e.preventDefault();
      Axios.delete(`http://localhost:5000/delete-wagroup/${id}`).then((response) => {
          history.push('/admin/wagroup');
      })
  }

  const getWAGroup = (id) => {
    Axios.post(`http://localhost:5000/get-wagroupid`, {
        id: id
    }).then((response) => {
        setName(response.data[0].name);
    })
  }

  useEffect(() => {
    getWAGroup(id);
  }, [])

  return (
    <div>
      <Link to="/admin/wagroup"><h2>Back</h2></Link>  
      <p>Nama Grup Whatsapp: {name}</p>
      <h2>Delete this whatsapp group?</h2>
      <button onClick={deleteWAGroup}>Yes</button>
    </div>
  )
}

export default DeleteWAGroup
