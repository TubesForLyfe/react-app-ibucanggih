import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import Logo from "../../img/Logo.png";
import Banner1 from "../../img/Banner2.png";
import Banner2 from "../../img/Banner3.png";
import RightArrow from "../../img/RightArrow.png";
import WhyIbuCanggih from "../../img/WhyIbuCanggih.png";
import BenefitIbuCanggih from "../../img/BenefitIbuCanggih.png";
import EventIbuCanggih from "../../img/EventIbuCanggih.png";
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
    <div>
      <div>
        <div className='carousels' ref={slideRef}>
          {index == 0 && <a href="https://bertsolution.com/our-community-ibu2canggih/" target="_blank">
            <img className="full-width" src={Image[index]} />
          </a>}
          {index == 1 && <a href="http://wa.me/6281326035476" target="_blank">
            <img className="full-width" src={Image[index]} />
          </a>}
        </div>
        <img className="left-slide-landing" src={RightArrow} onClick={handlePrevClick} />
        <img className="right-slide-landing" src={RightArrow} onClick={handleNextClick} />
      </div>
      <div>
        
      </div>
      <div className="full-width flex-column">
        
        <img className="full-width" src={WhyIbuCanggih} />
        <img className="full-width" src={EventIbuCanggih} />
        <img className="full-width" src={BenefitIbuCanggih} />
        <div className='landing-bottom padding'>
            <div className="default-text landing-bottomtext">
            Ayo dapatkan berbagai manfaat<br/>dan keuntungan dengan bergabung<br/>di Ibu2Canggih!
            </div>
            <div className='flex-row flex-between margin-top'>
              <div className='flex-column'>
                <div className='auth-text'>Sudah punya akun?</div>
                <Link to="/login" className="btn-purple margin-top-8">Masuk</Link>
              </div>
              <div className='flex-column'>
                <div className='auth-text'>Belum punya akun?</div>
                <Link to="/sign-up" className="btn-white margin-top-8">Registrasi</Link>
              </div>
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
