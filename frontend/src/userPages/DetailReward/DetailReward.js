import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Axios from 'axios'

import Background from "../../img/Background.png";
import Back from "../../img/WhiteBack.png";
import RewardBackground from "../../img/RewardBackground.png";
import DetailPoin from "../../img/DetailPoin.PNG";
import LineDetailReward from "../../img/LineDetailReward.png";
import Valid from "../../img/Valid.png";
import NotValid from "../../img/NotValid.PNG";
import Review from "../../img/Review.PNG";
import YoutubeLive from "../../img/youtubeLiveIcon.png";
import KuliahWhatsapp from "../../img/WhatsappKuliahIcon.png";
import InternetChallenge from "../../img/InternetChallenge.png";
import './DetailReward.css'

const DetailReward = () => {
  const [name, setName] = useState([]);
  const [image, setImage] = useState([]);
  const [poin, setPoin] = useState([]);

  const [listEventForm, setListEventForm] = useState([]);
  const {id} = useParams();  

  const [logIn, setLogIn] = useState(false);
  const [idLogIn, setIDLogIn] = useState([]);
  const [roleLogIn, setRoleLogIn] = useState([]);

  Axios.defaults.withCredentials = true;
  
  const getUserId = (id) => {
      Axios.post(`${process.env.REACT_APP_IBUCANGGIH_API}/profil`, {
          id: id
      }).then((response) => {
          const arr = response.data[0].name.split(" ");
          let nameResult = ""
          for (let i in arr) {
            if (i < 2) {
              nameResult = nameResult + arr[i] + " "
            }
          }
          setName(nameResult);
          setPoin(response.data[0].poin);
      })
  }

  const getDetailReward = () => {
    Axios.get(`${process.env.REACT_APP_IBUCANGGIH_API}/get-eventform/${id}`).then((response) => {
        setListEventForm(response.data);
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
    getDetailReward(id);
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
  }, [])

  return (
    <div className='min-full-height'>
      {logIn && (roleLogIn == "user") && (id == idLogIn) && <div>
      <img className="bg-detail" src={Background} />
      <div>
          <img className="bg-detailreward" src={RewardBackground} />
          <p className="title-detailreward">
              Detail Poin Reward
              <Link to={`/homepage/${id}`}><img src={Back} /></Link>
          </p>
      </div>
      <div>
          <p className="profildetail-bg"></p>
          <img className="imgdetail" src={image} />
          <p className="txt1detail">Ibu Canggih</p>
          <p className="namedetail">{name}</p>
          <img className="poindetail-img" src={DetailPoin} />
          <p className="txt2detail">Total Poin</p>
          <p className="poindetail">{poin}</p>
      </div>
      <div>
          {listEventForm.map((val, key) => {
            let iconType = InternetChallenge;
              if (val.type === "Youtube Live") {
                iconType = YoutubeLive;
              } else if (val.type === "Kuliah Whatsapp") {
                iconType = KuliahWhatsapp;
              }

              return (
                  <div className="full-width flex-row">
                      <img className="margin-left-20 margin-right-8 img-listdetail" src={iconType} />
                      <div className='flex-column padding-right-20'>
                        <div className='flex-row flex-between flex-center'>
                          <div>
                            <div className="type-listdetail">{val.type}</div>
                            <div className="name-listdetail">{val.name}</div>
                            {val.review == 99 && <div className='flex-row margin-top-8'>
                                <img className="imgreview" src={Review} />
                                <div className="txtreview margin-left-8">Dalam Review</div>
                            </div>}
                            {val.review == 1 && <div className='flex-row margin-top-8'>
                                <img className="imgvalid" src={Valid} />
                                <div className="txtvalid margin-left-8">Berhasil Diterima</div>
                            </div>}
                            {val.review == 0 && <div className='flex-row margin-top-8'>
                                <img className="imginvalid" src={NotValid} />
                                <div className="txtinvalid margin-left-8">Tidak Valid</div>
                            </div>}
                          </div>

                          <div>
                            {val.review == 99 &&
                              <div className="poinreview-listdetail">{val.poin}</div>}
                            {val.review == 1 &&
                              <div className="poinvalid-listdetail">{val.poin}</div>}
                          </div>
                        </div>
                        <img className="margin-top-16 margin-bot-16" src={LineDetailReward} />
                      </div>
                      {/* 
                      
                      {val.review == 99 && <div>
                          <p className="poinreview-listdetail">{val.poin}</p>
                          <img className="imgreview" src={Review} />
                          <p className="txtreview">Dalam Review</p>
                      </div>}
                      {val.review == 1 && <div>
                          <p className="poinvalid-listdetail">{val.poin}</p>
                          <img className="imgvalid" src={Valid} />
                          <p className="txtvalid">Berhasil Diterima</p>
                      </div>}
                      {val.review == 0 && <div>
                          <img className="imginvalid" src={NotValid} />
                          <p className="txtinvalid">Tidak Valid</p>
                      </div>} */}
                  </div>
              )
          })}
      </div>
      {/* <FooterEvent /> */}
      </div>}
    </div>
  )
}

export default DetailReward
