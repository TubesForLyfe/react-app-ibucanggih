import React from 'react';
import { Link } from 'react-router-dom';

import Logo from "../../img/Logo.png";
import Background from "../../img/Background.png";
import "./Login.css";
import FooterLogin from "../../components/FooterLogin/FooterLogin";

const Login = () => {
  return (
    <div>
      <img className="background-login" src={Background} />
      <div>
        <img className="logo-login" src={Logo} />
      </div>
      <div>
        <form>
          <div>
            <input className="email-login" type="email" name="email" placeholder=" Email" />
            <input className="password-login" type="password" name="password" placeholder=" Kata Sandi" />
          </div>
          <button type="submit" className="submit-login"><p className="submit-text-login">Masuk</p></button>
        </form>
      </div>
      <p className="bottom-text-login">
        Belum punya Akun Ibu-Ibu Canggih? <Link to="/sign-up">Daftar disini</Link>
      </p>
      <FooterLogin />
    </div>
  )
}

export default Login;
