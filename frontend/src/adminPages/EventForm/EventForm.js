import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Axios from 'axios'

import Logo from "../../img/icon_white_circle.png"
import { ExportFile } from '../../components/ExportFile/ExportFile'
import "./EventForm.css"

const EventForm = () => {
  const [eventForm, setEventForm] = useState([]);
  const [search, setSearch] = useState('');
  const history = useHistory();

  const [logIn, setLogIn] = useState(false);
  const [roleLogIn, setRoleLogIn] = useState([]);

  Axios.defaults.withCredentials = true;

  const getEventForm = () => {
      Axios.get(`${process.env.REACT_APP_IBUCANGGIH_API}/get-eventform`).then((response) => {
          setEventForm(response.data);
      })
  }

  const searchEventForm = (e) => {
    e.preventDefault();
    Axios.post(`${process.env.REACT_APP_IBUCANGGIH_API}/get-eventformbysearch`, {
      search: search
    }).then((response) => {
        setEventForm(response.data);
    })
  }

  const fileName = "IbuCanggih_EventForm"

  const logOut = (() => {
    Axios.delete(`${process.env.REACT_APP_IBUCANGGIH_API}/delete-cookies`).then((response) => {
      history.push('/');
      window.location.reload(true);
    })
  })

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_IBUCANGGIH_API}/login`).then((response) => {
    if (response.data.loggedIn) {
        setRoleLogIn(response.data.user[0].role);
        setLogIn(true);
      } else {
        setLogIn(false);
      }
    })
    getEventForm();
  }, [])

  return (
    <div className="landing-admin">
      {logIn && (roleLogIn == "admin") && <div>
      <div>
          <img className="imageadmin" src={Logo} />
          <Link to="/admin/user"><h3 className="linkadmin">User</h3></Link>
          <Link to="/admin/wagroup"><h3 className="linkadmin">WA Group</h3></Link>
          <Link to="/admin/event-type"><h3 className="linkadmin">Event Type</h3></Link>
          <Link to="/admin/event"><h3 className="linkadmin">Event</h3></Link>
          <Link to="/admin/event-form"><h3 className="linkadmin">Event Form</h3></Link>
          <div className="userexport-admin">
            <ExportFile csvData={eventForm} fileName={fileName} />
          </div>
          <Link to="/admin/banner"><h3 className="linkadmin">Banner</h3></Link>
          <Link to="/admin/artikel"><h3 className="linkadmin">Artikel</h3></Link>
          <div className="logout-button-admin" onClick={logOut}>
            <p className="logout-bg"></p>
            <p className="logout-text">Log Out</p>
          </div>
          <div className="tbl-admin">
            <table className="table-admin">
              <th>Nama Ibu</th>
              <th>Nama Event</th>
              <th>Tipe Event</th>
              <th>Tanggal</th>
              <th>Bukti</th>
              {eventForm.map((val, key) => {
                  return (
                    <tr>
                        <td>{val.name}</td>
                        <td>{val.eventname}</td>
                        <td>{val.eventtype}</td>
                        <td>{val.date} {val.month}</td>
                        <td><img className="eventform-img" src={`${process.env.REACT_APP_IBUCANGGIH_API}/` + val.image} /></td>
                        <td><Link to={`/admin/valid-event-form/${val.id}`}><button>Valid</button></Link></td>
                        <td><Link to={`/admin/invalid-event-form/${val.id}`}><button>Tidak Valid</button></Link></td>
                    </tr>
                  )
              })}
            </table>
          </div>
          <form className="search-admin">
            <input type="text" placeholder='Type words to search' value={search} 
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button onClick={searchEventForm}>Search</button>
          </form>
      </div>
      </div>}
    </div>
  )
}

export default EventForm