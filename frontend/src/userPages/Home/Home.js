import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Axios from 'axios'

import Background from "../../img/Background.png";
import LandingPhoto from "../../img/LandingPhoto.png";
import FooterHome from "../../components/FooterHome/FooterHome" 
import "./Home.css"

const Home = () => {
  const [name, setName] = useState([]);
  const [image, setImage] = useState([]);
  const [poin, setPoin] = useState([]);
  const {id} = useParams();

  const [logIn, setLogIn] = useState(false);
  const [idLogIn, setIDLogIn] = useState([]);
  const [roleLogIn, setRoleLogIn] = useState([]);

  Axios.defaults.withCredentials = true;

  const getUserId = (id) => {
    Axios.post(`http://localhost:5000/profil`, {
        id: id
    }).then((response) => {
        setName(response.data[0].name);
        setImage(response.data[0].image);
        setPoin(response.data[0].poin);
    })
  }

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
    getUserId(id);
  }, [])

  return (
    <div>
      {logIn && (roleLogIn == "user") && (id == idLogIn) && <div>
      <img src={LandingPhoto} />
      <img className="background-home" src={Background} />
      <div>
        <img className="img-home" src={image} />
        <p className="txt1-home">Halo, Ibu Canggih</p>
        <p className="name-home">{name}</p>
        <div>
            <p className="bg-poin-home"></p>
            <p className="txt2-home">Poin Ibu sekarang:</p>
            <p className="poin-home">{poin}</p>
            <Link to={`/tambah-poin-reward/${id}`}>
                <p className="bg-pluspoin-home"><p className="txt-pluspoin-home">Tambah Poin Reward</p></p>
            </Link>
            <Link to={`/detail-poin-reward/${id}`}>
                <p className="bg-pluspoin-home2"><p className="txt-pluspoin-home2">Detail Poin Reward</p></p>
            </Link>
        </div>
      </div>
      <img className="bg-home" src={LandingPhoto} />
      <FooterHome />
      </div>}
    </div>
  )
}

export default Home
