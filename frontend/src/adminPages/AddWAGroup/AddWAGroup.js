import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Axios from 'axios'

import './AddWAGroup.css'

const AddUser = () => {
  const [name, setName] = useState('');

  const [WAGroupStatus, setWAGroupStatus] = useState('');
  const history = useHistory();

  const addWAGroup = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:5000/add-wagroup', {
      name: name,
    }).then((response) => {
      if (response.data.message) {
        setWAGroupStatus(response.data.message);
      } else {
        history.push(`/admin/wagroup`);
      }
    });
  };

  return (
    <div>
      <Link to="/admin/user"><h2>Back</h2></Link>
      <div className="add-user">
          <form>
            <div>
              <input type="text" name="name" placeholder=" Nama Grup Whatsapp" 
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <button type="submit" onClick={addWAGroup}></button>
            <h2>Tambah</h2>
          </form>
          <h2>{WAGroupStatus}</h2>
      </div>
    </div>
  )
}

export default AddUser
