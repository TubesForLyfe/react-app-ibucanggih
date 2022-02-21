import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Axios from 'axios'

import './AddEvent.css'

const AddEvent = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [date, setDate] = useState('');
  const [month, setMonth] = useState('');
  const [poin, setPoin] = useState('');

  const history = useHistory();

  const [logIn, setLogIn] = useState(false);
  const [roleLogIn, setRoleLogIn] = useState([]);

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get('http://localhost:5000/login').then((response) => {
    if (response.data.loggedIn) {
        setRoleLogIn(response.data.user[0].role);
        setLogIn(true);
      } else {
        setLogIn(false);
      }
    })
  }, [])

  const addEvent = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:5000/add-eventname', {
      name: name,
      type: type,
      date: date,
      month: month,
      poin: poin
    }).then((response) => {
      history.push(`/admin/event`);
    });
  };

  return (
    <div>
      {logIn && (roleLogIn == "admin") && <div>
      <Link to="/admin/event"><h2>Back</h2></Link>
      <div className="add-eventadmin">
          <form>
            <div>
              <input type="text" name="name" placeholder=" Nama Event" 
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div>
              <input type="email" name="email" placeholder=" Tipe Event" 
                onChange={(e) => {
                  setType(e.target.value);
                }}
              />
            </div>
            <div>
              <input type="number" name="phone" placeholder=" Tanggal (Format: dd)" 
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </div>
            <div>
              <input type="text" name="password" placeholder=" Bulan (Format: Jan, Feb, etc)" 
                onChange={(e) => {
                  setMonth(e.target.value);
                }}
              />
            </div>
            <div>
              <input type="text" name="wagroup" placeholder=" Poin" 
                onChange={(e) => {
                  setPoin(e.target.value);
                }}
              />
            </div>
            <button type="submit" onClick={addEvent}></button>
            <h2>Tambah</h2>
          </form>
      </div>
      </div>}
    </div>
  )
}

export default AddEvent
