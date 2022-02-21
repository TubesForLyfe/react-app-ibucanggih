import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Axios from 'axios'

import Background from "../../img/Background.png"
import Submission from "../../img/Submission.PNG"
import "./Submitted.css"

const Submitted = () => {
  const {id} = useParams();

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
  }, [])

  return (
    <div>
      {logIn && (roleLogIn == "user") && (id == idLogIn) && <div>
      <img src={Background} />
      <p className="terimakasih">Terima kasih!</p>
      <img className="submission" src={Submission} />
      <p className="txt-submission">Submission Ibu sudah diterima</p>
      <Link to={`/tambah-poin-reward/${id}`}>
        <p className="button-add-submission"></p>
        <p className="txt-add-submission">Tambah Lagi</p>
      </Link>
      <Link to={`/homepage/${id}`}>
        <p className="txt-go-home">Kembali ke Beranda</p>
      </Link>
      </div>}
    </div>
  )
}

export default Submitted
