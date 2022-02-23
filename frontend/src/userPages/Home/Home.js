import React, { useState, useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import Axios from 'axios'

import Background from "../../img/Background.png";
import LandingPhoto from "../../img/LandingPhoto.png";
import Banner1 from "../../img/Banner2.jpg";
import Banner2 from "../../img/Banner3.jpg";
import RightArrow from "../../img/RightArrow.png";
import FooterHome from "../../components/FooterHome/FooterHome" 
import "./Home.css"

const Image = [
  Banner1,
  Banner2
];

let slideInterval;
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
    Axios.post(`${process.env.REACT_APP_IBUCANGGIH_API}/profil`, {
        id: id
    }).then((response) => {
        setName(response.data[0].name);
        setImage(response.data[0].image);
        setPoin(response.data[0].poin);
    })
  }

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_IBUCANGGIH_API}/login`).then((response) => {
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

  const [index, setIndex] = useState(0);
  const slideRef = useRef();

  const handleNextClick = () => {
    setIndex((index + 1) % Image.length);
    slideRef.current.classList.add('fade-anim');
  }
  
  const handlePrevClick = () => {
    setIndex((index + Image.length - 1) % Image.length);
    slideRef.current.classList.add('fade-anim');
  }

  const removeAnimation = () => {
    slideRef.current.classList.remove('fade-anim');
  }

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleNextClick();
    }, 4000);
  }

  const pauseSlider =() => {
    clearInterval(slideInterval);
  }

  useEffect(() => {
    slideRef.current.addEventListener('animationend', removeAnimation);
    startSlider();
    return () => {
      pauseSlider();
    }
  })

  return (
    <div>
      <div ref={slideRef}>
        {index == 0 && <a href="https://bertsolution.com/our-community-ibu2canggih/" target="_blank">
          <img src={Image[index]} />
        </a>}
        {index == 1 && <a href="http://wa.me/6281326035476" target="_blank">
          <img src={Image[index]} />
        </a>}
      </div>
      <div>
        <img className="left-slide" src={RightArrow} onClick={handlePrevClick} />
        <img className="right-slide" src={RightArrow} onClick={handleNextClick} />
      </div>
      {logIn && (roleLogIn == "user") && (id == idLogIn) && <div>
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
      <FooterHome />
      </div>}
    </div>
  )
}

export default Home
