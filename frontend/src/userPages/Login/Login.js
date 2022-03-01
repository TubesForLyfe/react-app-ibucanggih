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
