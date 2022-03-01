<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Link, useHistory, Redirect } from 'react-router-dom';
import Axios from 'axios';

import Logo from "../../img/Logo.png";
import Background from "../../img/Background.png";
import "./Login.css";
import FooterLogin from "../../components/FooterLogin/FooterLogin";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState([]);
  const history = useHistory();

  const login = (e) => {
    e.preventDefault();
    Axios.post(`${process.env.REACT_APP_IBUCANGGIH_API}/login`, {
      phone: phone,
      password: password
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        if (response.data[0].role === "user") {
          const id = response.data[0].id;
          history.push(`/homepage/${id}`);
        } else {
          history.push('/admin')
        }
        window.location.reload(true);
      }
    });
  };

  return (
    <div>
      <img className="background-login" src={Background} />
      <div>
        <img className="logo-login" src={Logo} />
      </div>
      <div>
        <form onSubmit={login}>
          <div>
            <input className="phone-login" type="number" name="phone" placeholder="No Handphone"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <input className="password-login" type="password" name="password" placeholder="Kata Sandi" 
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button type="submit" className="submit-login"><p className="submit-text-login">Masuk</p></button>
        </form>
      </div>
      <p className="bottom-text-login">
        Belum punya Akun Ibu-Ibu Canggih? <Link to="/sign-up">Daftar disini</Link>
      </p>
      <p class="login-status">{loginStatus}</p>
      <FooterLogin />
    </div>
  )
}

export default Login;
=======
import React, { useState, useEffect } from 'react';
import { Link, useHistory, Redirect } from 'react-router-dom';
import Axios from 'axios';

import Logo from "../../img/Logo.png";
import "./Login.css";
import FooterLanding from "../../components/FooterLanding/FooterLanding";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState([]);
  const history = useHistory();

  const login = (e) => {
    e.preventDefault();
    if (phone == "" || password == "") {
      setLoginStatus("Data belum diisi");
    } else {
      Axios.post(`${process.env.REACT_APP_IBUCANGGIH_API}/login`, {
        phone: phone,
        password: password
      }).then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          const id = response.data[0].id;
          Axios.post(`${process.env.REACT_APP_IBUCANGGIH_API}/set-cookies`, {id: id}).then((respCookies) => {
            if (response.data[0].role === "user") {
              history.push(`/homepage/${id}`);
            } else {
              history.push('/admin')
            }
            window.location.reload(true);
          });
          
        }
      });
    }
  };

  return (
    <div className='flex-column padding-horizontal full-height'>
      <img className='logo-login center-horizontal margin-bot margin-top' src={Logo} />
      <div className='full-width'>
        <form onSubmit={login}>
          <div>
            <input className="form-login margin-bot-16" type="number" name="phone" placeholder="No Handphone"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <input className="form-login" type="password" name="password" placeholder="Kata Sandi" 
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <p class="login-status">{loginStatus}</p>
          </div>
          <button type="submit" className="submit-login"><p className="submit-text-login">Masuk</p></button>
        </form>
      </div>
      <p className="bottom-text-login">
        Belum punya Akun Ibu-Ibu Canggih? <Link to="/sign-up">Daftar disini</Link>
      </p>
      <div className="footer-login">
        <FooterLanding />
      </div>
    </div>
  )
}

export default Login;
>>>>>>> 7870f2f7d2bc82e99136dcb91ce3900fcb98e852
