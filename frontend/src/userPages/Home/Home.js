import React, { useState, useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import Axios from 'axios'

import RightArrow from "../../img/RightArrow.png";
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

  const [Image, setImageBanner] = useState([]);
  const [banner, setBanner] = useState([]);
  
  let slideInterval;

  const getBannerHome = () => {
    Axios.get(`${process.env.REACT_APP_IBUCANGGIH_API}/get-bannerhome`).then((response) => {
      let img = [];
      let link = [];
      for (let i = 0; i < response.data.length; i++) {
        img[i] = response.data[i].image;
        link[i] = response.data[i].link;
      }
      setImageBanner(img);
      setBanner(link);
    })
  }

  const getUserId = (id) => {
    Axios.post(`${process.env.REACT_APP_IBUCANGGIH_API}/profil`, {
        id: id
    }).then((response) => {
        const fullname = response.data[0].name;
        let length = 0;
        while (length < fullname.length && fullname[length] != " ") {
          length++;
        }
        let frontname = "";
        for (let i = 0; i < length; i++) {
          frontname += fullname[i];
        }
        setName(frontname);
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
    fetch(`${process.env.REACT_APP_IBUCANGGIH_API}/image/${id}`, {
      method: 'GET',
      headers: {
        "Content-Type": 'application/json, charset=UTF-8',
        'Accept': 'application/json, text/html'
      },
      credentials: 'include'
    }).then(data => data.json()).then((data) => {
      setImage(`${process.env.REACT_APP_IBUCANGGIH_API}/` + data.image);
    })
    getBannerHome();
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
    }, 6000);
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
    <div className=''>
      <div className='flex-column'>
        <div ref={slideRef}>
          <a href={`${banner[index]}`} target="_blank">
            <img className="full-width" src={`${process.env.REACT_APP_IBUCANGGIH_API}/${Image[index]}`} />
          </a>
        </div>
        <div>
          <img className="left-slide" src={RightArrow} onClick={handlePrevClick} />
          <img className="right-slide" src={RightArrow} onClick={handleNextClick} />
        </div>
        
        <img className="img-home center-horizontal margin-top" src={image} />
        <div className="txt1-home center-horizontal margin-top-16">Halo, Ibu Canggih</div>
        <div className="name-home center-horizontal margin-horizontal margin-bot-16">{name}</div>
        <div className='bg-poin-home center-horizontal flex-column margin-bot'>
          <div className="txt2-home margin-top-8">Poin Ibu sekarang:</div>
          <div className="poin-home">{poin}</div>
          <Link className="bg-pluspoin-home center-horizontal margin-bot-16" to={`/tambah-poin-reward/${id}`}>
              Tambah Poin Reward
          </Link>
          <Link className="bg-pluspoin-home2 center-horizontal margin-bot-16" to={`/detail-poin-reward/${id}`}>
              Detail Poin Reward
          </Link>
        </div>
      </div>
      <div className='margin-top'>
        <FooterHome active="home"/>
      </div>
    </div>
  )
}

export default Home
