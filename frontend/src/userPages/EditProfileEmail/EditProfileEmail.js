import React, { useEffect, useState } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import Axios from 'axios'

import Background from "../../img/Background.png";
import Back from "../../img/Back.png";
import SubmitEditProfile from "../../img/SubmitEditProfile.png";
import FooterEditProfileEmail from '../../components/FooterEditProfileEmail/FooterEditProfileEmail';
import "./EditProfileEmail.css"

const EditProfileEmail = () => {
  const [email, setEmail] = useState([]);
  const [newEmail, setNewEmail] = useState('');
  
  const {id} = useParams();
  const history = useHistory();

  const updateEmail = (e) => {
    e.preventDefault();
    Axios.put('http://localhost:5000/edit-profil/email', {
      id: id,
      email: newEmail
    }).then((response) => {
      const id = response.data;
      history.push(`/edit-profil/${id}`);
    });
  }

  const getUserId = (id) => {
    Axios.post(`http://localhost:5000/profil`, {
        id: id
    }).then((response) => {
        setEmail(response.data[0].email);
    })
  }

  useEffect(() => {
    getUserId(id);
  }, [])

  return (
    <div>
      <img className="editemail-bg" src={Background} />
      <Link to={`/edit-profil/${id}`}><img className="back-email" src={Back} /></Link>
      <h2 className="editemail-text">Edit Email</h2>
      <div>
          <p className="email-border"></p>
          <p className="email-now">{email}</p>
          <form className="form-email">
              <input type="email" name="email" placeholder="Masukkan email baru" 
                onChange={(e) => {
                    setNewEmail(e.target.value);
                }}
              />
              <button onClick={updateEmail}><img src={SubmitEditProfile} /></button>
          </form>
      </div>
      <FooterEditProfileEmail />
    </div>
  )
}

export default EditProfileEmail
