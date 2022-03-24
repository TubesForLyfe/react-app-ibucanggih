import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

import RightArrow from "../../img/RightArrow.png";
import WhyIbuCanggih from "../../img/WhyIbuCanggih.png";
import BenefitIbuCanggih from "../../img/BenefitIbuCanggih.png";
import EventIbuCanggih from "../../img/EventIbuCanggih.png";
import ArtikelHead from "../../img/Artikel-head.png";
import Artikel1 from "../../img/artikel-1.png";
import Artikel2 from "../../img/artikel-2.png";
import Artikel3 from "../../img/artikel-3.png";
import "./Landing.css";
import "../../App.css";
import FooterLanding from "../../components/FooterLanding/FooterLanding";

const Landing = () => {
  const [index, setIndex] = useState(0);
  const [Image, setImage] = useState([]);
  const [banner, setBanner] = useState([]);
  const [artikel, setArtikel] = useState([]);
  const slideRef = useRef();
  
  let slideInterval;

  const getBannerLanding = () => {
    Axios.get(`${process.env.REACT_APP_IBUCANGGIH_API}/get-bannerlanding`).then((response) => {
      let image = [];
      let link = [];
      for (let i = 0; i < response.data.length; i++) {
        image[i] = response.data[i].image;
        link[i] = response.data[i].link;
      }
      setImage(image);
      setBanner(link);
    })
  }

  const getArtikel = () => {
    Axios.get(`${process.env.REACT_APP_IBUCANGGIH_API}/get-artikel`).then((response) => {
      setArtikel(response.data);
    })
  }

  useEffect(() => {
    getBannerLanding();
    getArtikel();
  }, [])

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
          <a href={`${banner[index]}`} target="_blank">
            <img className="full-width" src={`${process.env.REACT_APP_IBUCANGGIH_API}/${Image[index]}`} />
          </a>
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
        <div className='flex-column full-width'>
          <img className='margin-left-20 margin-top margin-bot' src={ArtikelHead} />
          <div className='margin-left-12'>
              {artikel.map((val, key) => {
                  return (
                    <a href={`${val.link}`} target="_blank">
                      <img src={`${process.env.REACT_APP_IBUCANGGIH_API}/${val.image}`} />
                      {/* Ini untuk nama artikel
                      <div className='artikel'>
                        <img src={`${process.env.REACT_APP_IBUCANGGIH_API}/${val.image}`} />
                        <p className="margin-left-20">
                          {val.name}
                          <p className="detail-artikel">Selengkapnya {`>`}</p>
                        </p>
                        
                      </div>
                      */}
                    </a>
                  )
              })}
          </div>
        </div>
        <div className="margin-top-16">
        <FooterLanding />
        </div>
      </div>
    </div>
  )
}

export default Landing
