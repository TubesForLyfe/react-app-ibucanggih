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
