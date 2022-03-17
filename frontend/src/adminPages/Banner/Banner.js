import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Axios from 'axios'

import Logo from "../../img/icon_white_circle.png"
import "./Banner.css"

const Banner = () => {
  const [bannerLanding, setBannerLanding] = useState([]);
  const [bannerHome, setBannerHome] = useState([]);
  const history = useHistory();

  const [logIn, setLogIn] = useState(false);
  const [roleLogIn, setRoleLogIn] = useState([]);

  Axios.defaults.withCredentials = true;

  const getBannerLanding = () => {
      Axios.get(`${process.env.REACT_APP_IBUCANGGIH_API}/get-bannerlanding`).then((response) => {
          setBannerLanding(response.data);
      })
  }

  const getBannerHome = () => {
    Axios.get(`${process.env.REACT_APP_IBUCANGGIH_API}/get-bannerhome`).then((response) => {
        setBannerHome(response.data);
    })
}

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
    getBannerLanding();
    getBannerHome();
  }, [])

  return (
    <div className='landing-admin'>
      {logIn && (roleLogIn == "admin") && <div>
      <div>
          <img className="imageadmin" src={Logo} />
          <Link to="/admin/user"><h3 className="linkadmin">User</h3></Link>
          <Link to="/admin/wagroup"><h3 className="linkadmin">WA Group</h3></Link>
          <Link to="/admin/event-type"><h3 className="linkadmin">Event Type</h3></Link>
          <Link to="/admin/event"><h3 className="linkadmin">Event</h3></Link>
          <Link to="/admin/event-form"><h3 className="linkadmin">Event Form</h3></Link>
          <Link to="/admin/banner"><h3 className="linkadmin">Banner</h3></Link>
          <div className="userexport-admin">
            <Link to="/admin/add-banner"><h4 className="linkadmin">Add Banner</h4></Link>
          </div>
          <Link to="/admin/artikel"><h3 className="linkadmin">Artikel</h3></Link>
          <div className="logout-button-admin" onClick={logOut}>
            <p className="logout-bg"></p>
            <p className="logout-text">Log Out</p>
          </div>
          <div>
              <h3 className="banner-landing">Banner Landing</h3>
              {bannerLanding.map((val, key) => {
                  return (
                    <div className="user-admin">
                        <img className="banner-image" src={`${process.env.REACT_APP_IBUCANGGIH_API}/${val.image}`} />
                        <p>Link: {val.link}</p>
                        <Link to={`/admin/delete-banner/${val.id}`}><button>Delete</button></Link>
                    </div>
                  )
              })}
              <h3 className="banner-landing">Banner Home</h3>
              {bannerHome.map((val, key) => {
                  return (
                    <div className="user-admin">
                        <img className="banner-image" src={`${process.env.REACT_APP_IBUCANGGIH_API}/${val.image}`} />
                        <p>Link: {val.link}</p>
                        <Link to={`/admin/delete-banner/${val.id}`}><button>Delete</button></Link>
                    </div>
                  )
              })}
          </div>
      </div>
      </div>}
    </div>
  )
}

export default Banner
