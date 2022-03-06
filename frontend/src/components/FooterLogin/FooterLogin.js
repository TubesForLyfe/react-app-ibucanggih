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
            <a href="https://lynk.id/link/redirect/to?n=email&link=mailto:community@bertsolution.com&u=@ibu2canggih" target="_blank"><p className="email-footer">
                Email
                ibu2canggih@gmail.com
            </p></a>
            <img className="footer-small-line" src={FooterSmallLine} />
            <a href="http://wa.me/6281326035476" target="_blank"><p className="whatsapp-footer">
                Via Whatsapp
                +62 812 1122 111
            </p></a>
        </div>
        <div>
            <a href="https://www.facebook.com/groups/1065991477161916/?ref=share" target="_blank"><img className="facebook-footer" src={Facebook} /></a>
            <a href="https://instagram.com/ibu2canggih" target="_blank"><img className="instagram-footer" src={Instagram} /></a>
            <a href="https://youtube.com/c/IbuIbuCanggih" target="_blank"><img className="youtube-footer" src={Youtube} /></a>
            <p className="footer-text">© 2022 Ibu2Canggih</p>
            <img className="footer-line" src={FooterLine} />
        </div>
    </div>
  )
}

export default FooterLogin
