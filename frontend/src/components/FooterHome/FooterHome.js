<<<<<<< HEAD
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
=======
import React from 'react'
import { Link, useParams } from "react-router-dom"

import HouseFooterPurple from '../../img/PurpleFooterHouse.PNG';
import HouseFooter from '../../img/HouseFooter.png';
import FooterProfPurple from '../../img/PurpleFooterProfile.PNG';
import FooterProf from '../../img/FooterProfile.PNG';
import FooterCal from '../../img/PurpleFooterCalendar.PNG'
import FooterCalendar from '../../img/FooterCalendar.PNG';
import "./FooterHome.css"

const FooterHome = (props) => {
  const {id} = useParams();

  const activeHome = props.active == "home";
  const activeProfile = props.active == "profile";
  const activeCalendar = props.active == "calendar";

  return (
    <div className="full-width flex-row">
      <div className="footer-home-item flex-column">
        <Link className='center-horizontal' to={`/homepage/${id}`}><img src={activeHome ? HouseFooterPurple : HouseFooter} /></Link>
        <Link className={`center-horizontal footer-item-text ${activeHome ? "active": ""}`} to={`/homepage/${id}`}><div>Beranda</div></Link>
      </div>
      <div className="footer-home-item flex-column">
        <Link className='center-horizontal' to={`/profil/${id}`}><img src={activeProfile ? FooterProfPurple : FooterProf} /></Link>
        <Link className={`center-horizontal footer-item-text ${activeProfile ? "active": ""}`} to={`/profil/${id}`}><div>Profil</div></Link>
      </div>
      <div className="footer-home-item flex-column">
        <Link className='center-horizontal' to={`/kalender/${id}`}><img src={activeCalendar ? FooterCal : FooterCalendar} /></Link>
        <Link className={`center-horizontal footer-item-text ${activeCalendar ? "active": ""}`} to={`/kalender/${id}`}><div>Kalender</div></Link>
      </div>
    </div>
  )
}

export default FooterHome
>>>>>>> 7870f2f7d2bc82e99136dcb91ce3900fcb98e852
