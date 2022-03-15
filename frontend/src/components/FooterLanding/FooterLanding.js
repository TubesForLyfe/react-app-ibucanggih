import React from 'react'

import FooterBackground1 from '../../img/FooterBackground1.png';
import iconWhiteCircle from '../../img/icon_white_circle.png';
import FooterLine from '../../img/FooterLine.png';
import FooterSmallLine from '../../img/FooterSmallLine.png';
import Instagram from '../../img/Instagram.png';
import Facebook from '../../img/Facebook.png';
import Youtube from '../../img/Youtube.png';
import Ellipse from '../../img/Ellipse.png';
import Logo from '../../img/Logo.png';
import "./FooterLanding.css";
import "../../App.css";

const FooterLanding = () => {
  return (
    <div className='full-width bg-footer'>
        <img className='child' src={FooterBackground1} />
        <div className='full-width flex-column child margin-top-footer'>
            <div className='footer-inquiries margin-bot-16'>FOR BUSINESS INQUIRIES</div>
            <div className='center-horizontal flex-row margin-bot'>
                <img className='icon margin-right-16' src={iconWhiteCircle}/>
                <div className='margin-right-16'>
                    <a href="https://lynk.id/link/redirect/to?n=email&link=mailto:community@bertsolution.com&u=@ibu2canggih" className="footer-white-text" target="_blank"><p>
                        Email<br/>
                        ibu2canggih@gmail.com
                    </p></a>
                </div>
                <div className='whitespace margin-right-16'></div>
                <div>
                    <a href="https://wa.me/6281326035476?text=Halo%2C%20saya%20ingin%20bekerjasama%20dengan%20Ibu2Canggih" target="_blank" className="footer-white-text"><p>
                        Whatsapp<br/>(+62) 813-2603-5476
                    </p></a>
                </div>
            </div>

            <div className='center-horizontal flex-row margin-bot-8'>
                <a href="https://www.facebook.com/groups/1065991477161916/?ref=share" target="_blank" className="margin-right-16"><img src={Facebook} /></a>
                <a href="https://instagram.com/ibu2canggih" target="_blank" className="margin-right-16"><img src={Instagram} /></a>
                <a href="https://youtube.com/c/IbuIbuCanggih" target="_blank"><img src={Youtube} /></a>
            </div>

            <p className="footer-copyright center-horizontal">© 2022 Ibu2Canggih</p>
        </div>
        {/* <div>
            
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
        </div> */}
    </div>
  )
}

export default FooterLanding
