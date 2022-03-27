import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Axios from 'axios'

import Logo from "../../img/icon_white_circle.png"
import { ExportFile } from '../../components/ExportFile/ExportFile'
import "./User.css"

const User = () => {
  const [user, setUser] = useState([]);
  const [startID, setStartID] = useState(1);
  const [finishID, setFinishID] = useState(10);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const history = useHistory();

  const [logIn, setLogIn] = useState(false);
  const [roleLogIn, setRoleLogIn] = useState([]);

  Axios.defaults.withCredentials = true;

  const getUser = (id1, id2) => {
      Axios.post(`${process.env.REACT_APP_IBUCANGGIH_API}/get-userbyid`, {
        id1: id1,
        id2: id2
      }).then((response) => {
          setUser(response.data);
      })
  }

  const handlePrevClick = () => {
    if (page != 1 && page != "") {
      setPage(page - 1);
      const id1 = startID - 10;
      const id2 = finishID - 10;
      getUser(id1, id2);
      setStartID(id1);
      setFinishID(id2);
    }
  }

  const handleNextClick = () => {
    if (page == "") {
      setPage(1);
      getUser(1, 10);
      setStartID(1);
      setFinishID(10);
      setSearch('')
    } else {
      setPage(page + 1);
      const id1 = startID + 10;
      const id2 = finishID + 10;
      getUser(id1, id2);
      setStartID(id1);
      setFinishID(id2);
    }
  }

  const searchUser = (e) => {
    e.preventDefault();
    Axios.post(`${process.env.REACT_APP_IBUCANGGIH_API}/get-userbysearch`, {
      search: search
    }).then((response) => {
        setUser(response.data);
    })
    if (page != "") {
      setPage('');
    }
  }

  const fileName = "IbuCanggih_User"

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
    getUser(startID, finishID);
  }, [])

  return (
    <div className='landing-admin'>
      {logIn && (roleLogIn == "admin") && <div>
      <div>
          <img className="imageadmin" src={Logo} />
          <Link to="/admin/user"><h3 className="linkadmin">User</h3></Link>
          <div className="userexport-admin">
            <Link to="/admin/add-user"><h4 className="linkadmin">Add User</h4></Link>
            <ExportFile csvData={user} fileName={fileName} />
          </div>
          <Link to="/admin/wagroup"><h3 className="linkadmin">WA Group</h3></Link>
          <Link to="/admin/event-type"><h3 className="linkadmin">Event Type</h3></Link>
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
                  <th>Nama Lengkap</th>
                  <th>Email</th>
                  <th>No Handphone</th>
                  <th>Alamat</th>
                  <th>Asal Grup Whatsapp</th>
                  <th>Poin</th>
                </tr>
                {user.map((val, key) => {
                    return (
                      <tr>
                          <td>{val.name}</td>
                          <td>{val.email}</td>
                          <td>{val.phone}</td>
                          <td>{val.address}</td>
                          <td>{val.wagroup}</td>
                          <td>{val.poin}</td>
                          <td><Link to={`/admin/edit-user/${val.id}`}><button>Edit</button></Link></td>
                          <td><Link to={`/admin/delete-user/${val.id}`}><button>Delete</button></Link></td>
                          <td><Link to={`/admin/reset-poin-user/${val.id}`}><button>Reset Poin</button></Link></td>
                      </tr>
                    )
                })}
            </table>
          </div>
          <div className="next-prev">
            <p onClick={handlePrevClick}>Prev</p>
            <p className='margin-left'>{page}</p>
            <p className='margin-left' onClick={handleNextClick}>Next</p>
          </div>
          <form className="search-admin">
            <input type="text" placeholder='Type words to search' value={search} 
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button onClick={searchUser}>Search</button>
          </form>
      </div>
      </div>}
    </div>
  )
}

export default User
