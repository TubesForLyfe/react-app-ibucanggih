import React from 'react'
import { Link } from 'react-router-dom'

import Logo from "../../img/Logo.png";
import Background from "../../img/Background.png";
import LandingPhoto from "../../img/LandingPhoto.png";
import "./Landing.css";
import FooterLanding from "../../components/FooterLanding/FooterLanding";

const Landing = () => {
  return (
    <div>
      <img className="landing-top" src={LandingPhoto} />
      <div>
        <img className="landing-bg1" src={Background} />
        <img className="landing-logo" src={Logo} />
        <div>
            <p className="landing-bodytext">
                Ibu-ibu Canggih
            </p>
            <p className="landing-bodytext2">
                adalah Komunitas
            </p>
            <p className="landing-bodytext3">
                ibu-ibu yang bercita menjadi ibu modern multitalenta yang memiliki skill cukup untuk menaklukan dunia digital.
            </p>
        </div>
        <div>
            <p className="landing-bottomtext">
                Ayo Nikmati Reward Program dengan cara mendaftar Akun Ibu-Ibu Canggih!
            </p>
            <div>
                <Link to="/login" className="landing-login"><p className="landing-logintext">Masuk</p></Link>
                <Link to="/sign-up" className="landing-register"><p className="landing-registertext">Registrasi</p></Link>
            </div>
        </div>
        <FooterLanding />
      </div>
    </div>
  )
}

export default Landing
