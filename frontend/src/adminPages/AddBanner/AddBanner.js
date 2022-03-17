import React, { useState, useEffect} from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import Axios from 'axios'

import Logo from "../../img/icon_white_circle.png"

const AddBanner = () => {
  const [page, setPage] = useState([]);
  const [link, setLink] = useState([]);
  const [image, setImage] = useState([]);
  const [imageView, setImageView] = useState([]);
  const [message, setMessage] = useState([]);

  const {id} = useParams();
  const history = useHistory();

  const [logIn, setLogIn] = useState(false);
  const [roleLogIn, setRoleLogIn] = useState([]);

  Axios.defaults.withCredentials = true;

  const addBanner = (e) => {
    e.preventDefault();
    Axios.post(`${process.env.REACT_APP_IBUCANGGIH_API}/add-banner`, {
      page: page,
      link: link,
      image: image
    }).then((response) => {
      if (response.data.message) {
        setMessage(response.data.message);
      } else {
        history.push(`/admin/banner`);
      }
    });
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
  }, [])

  const imageHandler = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    
    fetch(`${process.env.REACT_APP_IBUCANGGIH_API}/image-eventform/${id}`, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'multipart/form-data',
      },
      credentials: 'include'
    }).then(res => res.json()).then(res => {
      console.log(res.data.insertId)
      fetch(`${process.env.REACT_APP_IBUCANGGIH_API}/image-eventform/${res.data.insertId}`, {
        method: 'GET',
        headers: {
          "Content-Type": 'application/json, charset=UTF-8',
          'Accept': 'application/json, text/html'
        },
        credentials: 'include'
      }).then(data => data.json()).then((data) => {
        setImage(data.image);
        setImageView(`${process.env.REACT_APP_IBUCANGGIH_API}/${data.image}`);
      })
    });
  }
    
  return (
    <div className="landing-admin">
      {logIn && (roleLogIn == "admin") && <div>
      <img className="imageadmin" src={Logo} />
      <Link to="/admin/user"><h3 className="linkadmin">User</h3></Link>
      <Link to="/admin/wagroup"><h3 className="linkadmin">WA Group</h3></Link>
      <Link to="/admin/event-type"><h3 className="linkadmin">Event Type</h3></Link>
      <Link to="/admin/event"><h3 className="linkadmin">Event</h3></Link>
      <Link to="/admin/event-form"><h3 className="linkadmin">Event Form</h3></Link>
      <Link to="/admin/banner"><h3 className="linkadmin">Banner</h3></Link>
      <Link to="/admin/artikel"><h3 className="linkadmin">Artikel</h3></Link>
      <form className="editeventtype-admin">
            <div>
              <input type="text" name="name" placeholder=" Halaman banner (landing atau home)" value={page}
                onChange={(e) => {
                  setPage(e.target.value);
                }}
              />
            </div>
            <div>
              <input type="text" name="name" placeholder=" Link to" value={link}
                onChange={(e) => {
                  setLink(e.target.value);
                }}
              />
            </div>
            <div>
                <input type="file" name="image" accept="image/*" onChange={imageHandler} />
            </div>
            <img className="imageeventtype-admin" src={imageView} />
            <button onClick={addBanner}></button>
            <h2>Tambah</h2>
      </form>
      <h1>{message}</h1>
      </div>}
    </div>
  )
}

export default AddBanner
