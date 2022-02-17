import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import Axios from 'axios'
import CalendarForm from 'react-calendar'

import Background from "../../img/Background.png";
import Back from "../../img/WhiteBack.png";
import RewardBackground from "../../img/RewardBackground.png";
import Calendar from "../../img/FooterCalendar.PNG"
import BottomArrow from "../../img/BottomArrow.png"
import UploadTop from "../../img/UploadImageTop.png"
import UploadBottom from "../../img/UploadImageBottom.png"
import FooterAddReward from "../../components/FooterAddReward/FooterAddReward"
import './AddReward.css'

const AddReward = () => {
  const [activeCalendar, setActiveCalendar] = useState(false);
  const [date, setDate] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const [eventType, setEventType] = useState(null);
  const [activeEventType, setActiveEventType] = useState(false);
  const [listEventType, setListEventType] = useState([]);

  const [eventName, setEventName] = useState(null);
  const [activeEventName, setActiveEventName] = useState(false);
  const [listEventName, setListEventName] = useState([]);

  const [image, setImage] = useState([]);
  const {id} = useParams();
  const history = useHistory();

  const addForm = (e) => {
      e.preventDefault();
      Axios.post('http://localhost:5000/add-eventform', {
          id: id,
          date: date,
          month: month,
          eventtype: eventType,
          eventname: eventName,
          image: image
      }).then((response) => {
        history.push(`/submitted/${response.data}`)
      })
  }

  const getEventType = () => {
    Axios.get('http://localhost:5000/get-eventtype').then((response) => {
        setListEventType(response.data);
    })
  }

  useEffect(() => {
      getEventType();
  }, [])

  const getEventName = () => {
    Axios.get('http://localhost:5000/get-eventname').then((response) => {
        setListEventName(response.data);
    })
  }

  useEffect(() => {
      getEventName();
  }, [])

  const imageHandler = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  }

  const changeCalendar = (e) => {
    setActiveCalendar(false);
    setDate(e.toString().substring(8,10));
    setMonth(e.toString().substring(4,7));
    setYear(e.toString().substring(11,15));
  }

  return (
    <div>
      <div>
          <img src={Background} />
          <img className="bg-addreward" src={RewardBackground} />
          <p className="title-addreward">
              Tambah Poin Reward
              <Link to={`/homepage/${id}`}><img src={Back} /></Link>
          </p>
      </div>
      <div>
          <form>
            <p className="formadd-bg"></p>
            <p className="datetxt-add">Tanggal</p>
            <p className="date-active" onClick={(e) => setActiveCalendar(!activeCalendar)}>
              <p className="date-txt">{date}</p>
              <p className="month-txt">{month}</p>
              <p className="year-txt">{year}</p>
            </p>
            {activeCalendar && <div className="date-picker">
              <CalendarForm onChange={changeCalendar} />
            </div>}
            <img className="date-picture" src={Calendar} onClick={(e) => setActiveCalendar(!activeCalendar)}/>
            {!activeCalendar && <div>
            <p className="eventtypetxt-add">Jenis Event</p>
            <p className="eventtype-active" onClick={(e) => setActiveEventType(!activeEventType)}></p>
            <img className="button-eventtype" onClick={(e) => setActiveEventType(!activeEventType)} src={BottomArrow}/>
            <p className="eventtype-txt">{eventType}</p>
            {activeEventType && listEventType.map((val,key) => {
              return (
                <p className="eventtype-list" onClick={(e) => {
                  setEventType(val.name);
                  setActiveEventType(false);
                }}>
                  <p className="eventtype-name">{val.name}</p>                  
                </p>
              )
            })}
            {!activeEventType && <div>
            <p className="eventnametxt-add">Nama Event</p>
            <p className="eventname-active" onClick={(e) => setActiveEventName(!activeEventName)}></p>
            <img className="button-eventname" onClick={(e) => setActiveEventName(!activeEventName)} src={BottomArrow}/>
            <p className="eventname-txt">{eventName}</p>
            {activeEventName && listEventName.map((val,key) => {
              return (
                <p className="eventname-list" onClick={(e) => {
                  setEventName(val.name);
                  setActiveEventName(false);
                }}>
                  <p className="eventname-name">{val.name}</p>                  
                </p>
              )
            })}
            {!activeEventName && <div>
            <input className="image-reward" type="file" name="image" id="image" accept="image/*" onChange={imageHandler} />
            <p className="eventimagetxt-add">Upload Bukti Partisipasi</p>
            <label for="image" className="label-imagereward">
                <p className="bg-uploadimage"></p>
                <p className="uploadimagetxt">Upload</p>
                <img className="uploadimgtop" src={UploadTop} />
                <img className="uploadimgbottom" src={UploadBottom} />
            </label>
            </div>}
            </div>}
            </div>}
            <button onClick={addForm}>
                <p className="submit-addrewardbg"></p>
                <p className="submit-addrewardtxt">Submit</p>
            </button>
          </form>
      </div>
      <div className="footer-addreward">
        <FooterAddReward />
      </div>
    </div>
  )
}

export default AddReward
