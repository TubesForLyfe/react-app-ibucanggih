import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import Axios from 'axios'

import Background from "../../img/Background.png";
import Back from "../../img/Back.png";
import SubmitEditProfile from "../../img/SubmitEditProfile.png";
import FooterEditProfileEmail from '../../components/FooterEditProfileEmail/FooterEditProfileEmail';
import "./EditProfilePassword.css"

const EditProfilePassword = () => {
  const [password, setPassword] = useState('');
  const [pwconfirm, setPwconfirm] = useState('');
  const [pwstatus, setPwstatus] = useState('');
  const {id} = useParams();
  const history = useHistory();

  const [logIn, setLogIn] = useState(false);
  const [idLogIn, setIDLogIn] = useState([]);
  const [roleLogIn, setRoleLogIn] = useState([]);

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get('http://localhost:5000/login').then((response) => {
        if (response.data.loggedIn) {
          setIDLogIn(response.data.user[0].id);
          setRoleLogIn(response.data.user[0].role);
          setLogIn(true);
        } else {
          setLogIn(false);
        }
    })
  })

  const updatePassword = (e) => {
    e.preventDefault();
    Axios.put('http://localhost:5000/edit-profil/password', {
      id: id,
      password: password,
      pwconfirm: pwconfirm     
    }).then((response) => {
      if (response.data.message) {
        setPwstatus(response.data.message);
      } else {
        const id = response.data;
        history.push(`/edit-profil/${id}`);
      }
    });
  }

  return (
    <div>
      {logIn && (roleLogIn == "user") && (id == idLogIn) && <div>
      <img className="editpassword-bg" src={Background} />
      <Link to={`/edit-profil/${id}`}><img className="back-password" src={Back} /></Link>
      <p className="editpassword-text">Edit Kata Sandi</p>
      <div>
          <p className="password-border"></p>
          <p className="password-now">************</p>
          <form>
              <input className="form-password" type="password" name="password" placeholder="Masukkan kata sandi baru"
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
              />
              <input className="form-pwconfirm" type="password" name="password" placeholder="Masukkan ulang kata sandi baru"
                onChange={(e) => {
                    setPwconfirm(e.target.value);
                }}
              />
              <button onClick={updatePassword}><img src={SubmitEditProfile} /></button>
          </form>
          <p className="status-password">{pwstatus}</p>
      </div>
      <FooterEditProfileEmail />
      </div>}
    </div>
  )
}

export default EditProfilePassword
