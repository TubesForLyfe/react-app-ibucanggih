import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Axios from 'axios'

import Logo from "../../img/icon_white_circle.png"
import { ExportFile } from '../../components/ExportFile/ExportFile'

const EventType = () => {
  const [eventType, setEventType] = useState([]);
  const history = useHistory();

  const [logIn, setLogIn] = useState(false);
  const [roleLogIn, setRoleLogIn] = useState([]);

  Axios.defaults.withCredentials = true;

  const getEventType = () => {
      Axios.get(`${process.env.REACT_APP_IBUCANGGIH_API}/get-eventtype`).then((response) => {
          setEventType(response.data);
      })
  }

  const fileName = "IbuCanggih_EventType"

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
    getEventType();
  }, [])

  return (
    <div className="landing-admin">
      {logIn && (roleLogIn == "admin") && <div>
      <div>
          <img className="imageadmin" src={Logo} />
          <Link to="/admin/user"><h3 className="linkadmin">User</h3></Link>
          <Link to="/admin/wagroup"><h3 className="linkadmin">WA Group</h3></Link>
          <Link to="/admin/event-type"><h3 className="linkadmin">Event Type</h3></Link>
          <div className="userexport-admin">
            <Link to="/admin/add-event-type"><h4 className="linkadmin">Add Event Type</h4></Link>
            <ExportFile csvData={eventType} fileName={fileName} />
          </div>
          <Link to="/admin/event"><h3 className="linkadmin">Event</h3></Link>
          <Link to="/admin/event-form"><h3 className="linkadmin">Event Form</h3></Link>
          <Link to="/admin/banner"><h3 className="linkadmin">Banner</h3></Link>
          <Link to="/admin/artikel"><h3 className="linkadmin">Artikel</h3></Link>
          <div className="logout-button-admin" onClick={logOut}>
            <p className="logout-bg"></p>
            <p className="logout-text">Log Out</p>
          </div>
          <div className="tbl-admin">
            <table className="tabel-admin">
                <tr>
                  <th>Nama Tipe Event</th>
                </tr>
                {eventType.map((val, key) => {
                  return (
                    <tr>
                        <td>{val.name}</td>
                        <td><Link to={`/admin/edit-event-type/${val.id}`}><button>Edit</button></Link></td>
                        <td><Link to={`/admin/delete-event-type/${val.id}`}><button>Delete</button></Link></td>
                    </tr>
                  )
              })}
            </table>
          </div>
      </div>
      </div>}
    </div>
  )
}

export default EventType
