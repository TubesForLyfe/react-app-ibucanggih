<<<<<<< HEAD
import React from 'react'
import { Link, useParams } from "react-router-dom"

import HouseFooter from '../../img/HouseFooter.png';
import FooterProf from '../../img/PurpleFooterProfile.PNG';
import FooterCalendar from '../../img/FooterCalendar.PNG'
import FooterRectangle from '../../img/FooterRectangle.png';
import FooterLongRectangle from '../../img/FooterLongRectangle.png';
import FooterProfileLine from '../../img/FooterProfileLine.png';
import "./FooterProfile.css"

const FooterProfile = () => {
  const {id} = useParams();

  return (
    <div>
      <div>
          <p className="footer-rectangle1">
            <img src={FooterRectangle} />
            <Link to={`/homepage/${id}`}><img className="footer-house" src={HouseFooter} /></Link>
          </p>
          <Link to={`/homepage/${id}`}><p className="footer-txt1">Beranda</p></Link>
      </div>
      <div>
          <p className="footer-rectangle2">
            <img src={FooterRectangle} />
            <Link to={`/profil/${id}`}><img className="footer-prof" src={FooterProf} /></Link>
          </p>
          <Link to={`/profil/${id}`}><p className="footer-txt2">Profil</p></Link>
      </div>
      <div>
          <p className="footer-rectangle3">
            <img src={FooterRectangle} />
            <Link to={`/kalender/${id}`}><img className="footer-calendar" src={FooterCalendar} /></Link>
          </p>
          <Link to={`/kalender/${id}`}><p className="footer-txt3">Kalender</p></Link>
      </div>
      <img className="footer-bottom" src={FooterLongRectangle} />
      <img className="footer-lineprofil" src={FooterProfileLine} />
    </div>
  )
}

export default FooterProfile
=======
import React from 'react'
import { Link, useParams } from "react-router-dom"

import HouseFooter from '../../img/HouseFooter.png';
import FooterProf from '../../img/PurpleFooterProfile.PNG';
import FooterCalendar from '../../img/FooterCalendar.PNG'
import FooterRectangle from '../../img/FooterRectangle.png';
import FooterLongRectangle from '../../img/FooterLongRectangle.png';
import FooterProfileLine from '../../img/FooterProfileLine.png';
import "./FooterProfile.css"

const FooterProfile = () => {
  const {id} = useParams();

  return (
    <div>
      <div>
          <p className="footer-rectangle1">
            <img src={FooterRectangle} />
            <Link to={`/homepage/${id}`}><img className="footer-house" src={HouseFooter} /></Link>
          </p>
          <Link to={`/homepage/${id}`}><p className="footer-txt1">Beranda</p></Link>
      </div>
      <div>
          <p className="footer-rectangle2">
            <img src={FooterRectangle} />
            <Link to={`/profil/${id}`}><img className="footer-prof" src={FooterProf} /></Link>
          </p>
          <Link to={`/profil/${id}`}><p className="footer-txt2">Profil</p></Link>
      </div>
      <div>
          <p className="footer-rectangle3">
            <img src={FooterRectangle} />
            <Link to={`/kalender/${id}`}><img className="footer-calendar" src={FooterCalendar} /></Link>
          </p>
          <Link to={`/kalender/${id}`}><p className="footer-txt3">Kalender</p></Link>
      </div>
    </div>
  )
}

export default FooterProfile
>>>>>>> 7870f2f7d2bc82e99136dcb91ce3900fcb98e852
