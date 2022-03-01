<<<<<<< HEAD
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Axios from 'axios';

import Logo from "../../img/Logo.png";
import Background from "../../img/Background.png";
import DefaultPicture from "../../img/Mother.png";
import "./Register.css";
import FooterRegister from "../../components/FooterRegister/FooterRegister";

const Register = () => {
  const [nameReg, setNameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [phoneReg, setPhoneReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [pwConfirmReg, setPwConfirmReg] = useState("");

  const [registerStatus, setRegisterStatus] = useState("");
  const history = useHistory();

  const regist = (e) => {
    e.preventDefault();
    Axios.post(`${process.env.REACT_APP_IBUCANGGIH_API}/register`, {
      name: nameReg,
      email: emailReg,
      phone: phoneReg,
      password: passwordReg,
      pwconfirm: pwConfirmReg,
      address: '-',
      wagroup: '-',
      image: DefaultPicture
    }).then((response) => {
      if (response.data.message) {
        setRegisterStatus(response.data.message);
      } else {
        const id = response.data.insertId;
        history.push(`/homepage/${id}`);
        window.location.reload(true);
      }
    });
  };

  return (
    <div>
      <img className="background" src={Background} />
      <div>
        <img className="logo" src={Logo} />
      </div>
      <div>
        <form>
          <input className="name" type="text" name="name" placeholder="Nama Lengkap" 
            onChange={(e) => {
              setNameReg(e.target.value);
            }}
          />
          <div className="form">
            <input className="email" type="email" name="email" placeholder="Email" 
              onChange={(e) => {
                setEmailReg(e.target.value);
              }}
            />
            <input className="number" type="number" name="number" placeholder="No Handphone" 
              onChange={(e) => {
                setPhoneReg(e.target.value);
              }}
            />
            <input className="password" type="password" name="password" placeholder="Kata Sandi" 
              onChange={(e) => {
                setPasswordReg(e.target.value);
              }}
            />
            <input className="pwconfirm" type="password" name="pwconfirm" placeholder="Ulangi Kata Sandi" 
              onChange={(e) => {
                setPwConfirmReg(e.target.value);
              }}
            />
          </div>
          <button type="submit" className="submit" onClick={regist}><p className="submit-text">Daftar</p></button>
        </form>
      </div>
      <p className="bottom-text">
        Sudah punya Akun Ibu-Ibu Canggih? <Link to="/login">Masuk disini</Link>
      </p>
      <p class="register-status">{registerStatus}</p>
      <FooterRegister />
    </div>
  )
}

export default Register;
=======
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Axios from 'axios';

import Logo from "../../img/Logo.png";
import DefaultPicture from "../../img/Mother.png";
import "./Register.css";
import FooterLanding from "../../components/FooterLanding/FooterLanding";

const Register = () => {
  const [nameReg, setNameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [phoneReg, setPhoneReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [pwConfirmReg, setPwConfirmReg] = useState("");

  const [registerStatus, setRegisterStatus] = useState("");
  const history = useHistory();

  const regist = (e) => {
    e.preventDefault();
    if (nameReg == "" 
    || emailReg == "" 
    || phoneReg == "" 
    || passwordReg == "" 
    || pwConfirmReg == "") {
      setRegisterStatus("Data belum diisi");
    } else {
      Axios.post(`${process.env.REACT_APP_IBUCANGGIH_API}/register`, {
        name: nameReg,
        email: emailReg,
        phone: phoneReg,
        password: passwordReg,
        pwconfirm: pwConfirmReg,
        address: '-',
        wagroup: '-',
        image: DefaultPicture
      }).then((response) => {
        if (response.data.message) {
          setRegisterStatus(response.data.message);
        } else {
          const id = response.data.insertId;
          Axios.post(`${process.env.REACT_APP_IBUCANGGIH_API}/set-cookies`, {id: id}).then((respCookies) => {
            history.push(`/homepage/${id}`);
            window.location.reload(true);
          });
        }
      });
    }
  };

  return (
    <div className='flex-column padding-horizontal'>
      <img className='logo-register center-horizontal margin-bot margin-top' src={Logo} />
      <div className='full-width'>
        <form>
          <input className="form-register margin-bot-16" type="text" name="name" placeholder="Nama Lengkap" 
            onChange={(e) => {
              setNameReg(e.target.value);
            }}
          />
          <div>
            <input className="form-register margin-bot-16" type="email" name="email" placeholder="Email" 
              onChange={(e) => {
                setEmailReg(e.target.value);
              }}
            />
            <input className="form-register margin-bot-16" type="number" name="number" placeholder="No Handphone" 
              onChange={(e) => {
                setPhoneReg(e.target.value);
              }}
            />
            <input className="form-register margin-bot-16" type="password" name="password" placeholder="Kata Sandi" 
              onChange={(e) => {
                setPasswordReg(e.target.value);
              }}
            />
            <input className="form-register" type="password" name="pwconfirm" placeholder="Ulangi Kata Sandi" 
              onChange={(e) => {
                setPwConfirmReg(e.target.value);
              }}
            />
            <p class="register-status">{registerStatus}</p>
          </div>
          <button type="submit" className="submit-register" onClick={regist}><p className="submit-text-register">Daftar</p></button>
        </form>
      </div>
      <p className="bottom-text-register">
        Sudah punya Akun Ibu-Ibu Canggih? <Link to="/login">Masuk disini</Link>
      </p>
      <div className='footer-register'>
        <FooterLanding />
      </div>
      
    </div>
  )
}

export default Register;
>>>>>>> 7870f2f7d2bc82e99136dcb91ce3900fcb98e852
