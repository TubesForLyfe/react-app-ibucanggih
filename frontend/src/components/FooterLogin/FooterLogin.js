import React from 'react'

import FooterBackground1 from '../../img/FooterBackground1.png';
import FooterLine from '../../img/FooterLine.png';
import FooterSmallLine from '../../img/FooterSmallLine.png';
import Instagram from '../../img/Instagram.png';
import Facebook from '../../img/Facebook.png';
import Youtube from '../../img/Youtube.png';
import Ellipse from '../../img/Ellipse.png';
import Logo from '../../img/Logo.png';
import "./FooterLogin.css";

const FooterLogin = () => {
  return (
    <div className="footer-login">
        <img src={FooterBackground1} />
        <div>
            <img className="logo-ellipse" src={Ellipse} />
            <img className="logo-footer" src={Logo} />
            <p className="email-footer">
                Email
                ibu2canggih@gmail.com
            </p>
            <img className="footer-small-line" src={FooterSmallLine} />
            <p className="whatsapp-footer">
                Via Whatsapp
                +62 812 1122 111
            </p>
        </div>
        <div>
            <img className="facebook-footer" src={Facebook} />
            <img className="instagram-footer" src={Instagram} />
            <img className="youtube-footer" src={Youtube} />
            <p className="footer-text">© 2022 Ibu2Canggih</p>
            <img className="footer-line" src={FooterLine} />
        </div>
    </div>
  )
}

export default FooterLogin
