import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import Axios from 'axios'

const DeleteWAGroup = () => {
  const [name, setName] = useState([]);

  const {id} = useParams();
  const history = useHistory();

  const [logIn, setLogIn] = useState(false);
  const [roleLogIn, setRoleLogIn] = useState([]);

  Axios.defaults.withCredentials = true;

  const deleteWAGroup = (e) => {
      e.preventDefault();
      Axios.delete(`${process.env.REACT_APP_IBUCANGGIH_API}/delete-wagroup/${id}`).then((response) => {
          history.push('/admin/wagroup');
      })
  }

  const getWAGroup = (id) => {
    Axios.post(`${process.env.REACT_APP_IBUCANGGIH_API}/get-wagroupid`, {
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
    getWAGroup(id);
  }, [])

  return (
    <div>
      {logIn && (roleLogIn == "admin") && <div>
      <Link to="/admin/wagroup"><h2>Back</h2></Link>  
      <p>Nama Grup Whatsapp: {name}</p>
      <h2>Delete this whatsapp group?</h2>
      <button onClick={deleteWAGroup}>Yes</button>
      </div>}
    </div>
  )
}

export default DeleteWAGroup
