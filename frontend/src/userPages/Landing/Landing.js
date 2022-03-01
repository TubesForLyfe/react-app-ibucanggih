<<<<<<< HEAD
import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import Logo from "../../img/Logo.png";
import Background from "../../img/Background.png";
import LandingPhoto from "../../img/LandingPhoto.png";
import Banner1 from "../../img/Banner2.jpg";
import Banner2 from "../../img/Banner3.jpg";
import RightArrow from "../../img/RightArrow.png";
import LandingDesc from "../../img/LandingDesc.png";
import "./Landing.css";
import FooterLanding from "../../components/FooterLanding/FooterLanding";

const Image = [
  Banner1,
  Banner2
];

let slideInterval;
const Landing = () => {
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
          <img className="landing-top" src={Image[index]} />
        </a>}
        {index == 1 && <a href="http://wa.me/6281326035476" target="_blank">
          <img className="landing-top" src={Image[index]} />
        </a>}
      </div>
      <div>
        <img className="left-slide" src={RightArrow} onClick={handlePrevClick} />
        <img className="right-slide" src={RightArrow} onClick={handleNextClick} />
      </div>
      <div>
        <img className="landing-bg1" src={Background} />
        <img className="landing-logo" src={Logo} />
        <div>
            <p className="landing-bodytext">
                Ibu-ibu Canggih
            </p>
            <p className="landing-bodytext2">
                adalah Komunitas
            </p>
            <p className="landing-bodytext3">
                ibu-ibu yang bercita menjadi ibu modern multitalenta yang memiliki skill cukup untuk menaklukan dunia digital.
            </p>
        </div>
        <img className="landing-desc" src={LandingDesc} />
        <p className="landing-distance"></p>
        <div className="landing-bottom">
            <p className="landing-bottomtext">
                Ayo Nikmati Reward Program dengan cara mendaftar Akun Ibu-Ibu Canggih!
            </p>
            <div>
                <Link to="/login" className="landing-login"><p className="landing-logintext">Masuk</p></Link>
                <Link to="/sign-up" className="landing-register"><p className="landing-registertext">Registrasi</p></Link>
            </div>
            <FooterLanding />
        </div>
      </div>
    </div>
  )
}

export default Landing
=======
import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import Logo from "../../img/Logo.png";
import Banner1 from "../../img/Banner2.jpg";
import Banner2 from "../../img/Banner3.jpg";
import RightArrow from "../../img/RightArrow.png";
import LandingDesc from "../../img/LandingDesc.png";
import "./Landing.css";
import "../../App.css";
import FooterLanding from "../../components/FooterLanding/FooterLanding";

const Image = [
  Banner1,
  Banner2
];

let slideInterval;
const Landing = () => {
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
          <img className="full-width" src={Image[index]} />
        </a>}
        {index == 1 && <a href="http://wa.me/6281326035476" target="_blank">
          <img className="full-width" src={Image[index]} />
        </a>}
      </div>
      <div>
        <img className="left-slide" src={RightArrow} onClick={handlePrevClick} />
        <img className="right-slide" src={RightArrow} onClick={handleNextClick} />
      </div>
      <div className="full-width flex-column margin-top">
        <img className="landing-logo center-horizontal" src={Logo} />
        <p className="default-text margin-horizontal">
          <span className="text-title">Ibu-ibu Canggih</span> adalah Komunitas ibu-ibu yang bercita menjadi ibu modern multitalenta yang memiliki skill cukup untuk menaklukan dunia digital.
        </p>
        
        <img className="full-width" src={LandingDesc} />
        <div className='landing-bottom padding'>
            <p className="default-text landing-bottomtext">
                Ayo Nikmati Reward Program dengan cara mendaftar Akun<br/>Ibu-Ibu Canggih!
            </p>
            <div className='flex-row flex-between'>
                <Link to="/login" className="btn-purple">Masuk</Link>
                <Link to="/sign-up" className="btn-purple">Registrasi</Link>
            </div>
        </div>
        <div className='bg-purple'>
        <FooterLanding />
        </div>
      </div>
    </div>
  )
}

export default Landing
>>>>>>> 7870f2f7d2bc82e99136dcb91ce3900fcb98e852
