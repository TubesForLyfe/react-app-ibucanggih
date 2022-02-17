import React from 'react'
import { Link, useParams } from "react-router-dom"

import HouseFooter from '../../img/PurpleFooterHouse.PNG';
import FooterProf from '../../img/FooterProfile.PNG';
import FooterCalendar from '../../img/FooterCalendar.PNG'
import FooterRectangle from '../../img/FooterRectangle.png';
import FooterLongRectangle from '../../img/FooterLongRectangle.png';
import FooterProfileLine from '../../img/FooterProfileLine.png';
import "./FooterHome.css"

const FooterHome = () => {
  const {id} = useParams();

  return (
    <div className="footer-homepage">
      <div>
          <p className="footer-rectangle1">
            <img src={FooterRectangle} />
            <Link to={`/homepage/${id}`}><img className="footer-house" src={HouseFooter} /></Link>
          </p>
          <Link to={`/homepage/${id}`}><p className="footer-txt1-home">Beranda</p></Link>
      </div>
      <div>
          <p className="footer-rectangle2">
            <img src={FooterRectangle} />
            <Link to={`/profil/${id}`}><img className="footer-prof" src={FooterProf} /></Link>
          </p>
          <Link to={`/profil/${id}`}><p className="footer-txt2-home">Profil</p></Link>
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

export default FooterHome
