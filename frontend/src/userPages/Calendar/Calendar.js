import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios'
import Kalender from 'react-calendar'

import Background from "../../img/Background.png";
import LineCalendar from "../../img/LineDetailReward.png";
import FooterCalendar from "../../components/FooterCalendar/FooterCalendar";
import "./Calendar.css";

const Calendar = () => {
  const [listEvent, setListEvent] = useState([]);
  const {id} = useParams();

  const [logIn, setLogIn] = useState(false);
  const [idLogIn, setIDLogIn] = useState([]);
  const [roleLogIn, setRoleLogIn] = useState([]);

  Axios.defaults.withCredentials = true;

  const getEvent = () => {
    Axios.get(`${process.env.REACT_APP_IBUCANGGIH_API}/get-eventname`).then((response) => {
        setListEvent(response.data);
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
    getEvent();
  }, [])

  return (
    <div>
      {logIn && (roleLogIn == "user") && (id == idLogIn) && <div>
      <img className="calendar-bg" src={Background} />
      <p className="title-calendar">Event Kalender</p>
      <div className="calendar-main">
          <Kalender />
      </div>
      <p className="event-calendar">All Events</p>
      <div>
        {listEvent.map((val, key) => {
              return (
                  <div className="eventlist-calendar">
                      <img className="bgcalendar" src={Background} />
                      <p className="date-calendar">{val.date}</p>
                      <p className="month-calendar">{val.month}</p>
                      <p className="type-calendar">{val.type}</p>
                      <p className="name-calendar">{val.name}</p>
                      <img className="line-calendar" src={LineCalendar} />
                  </div>
              )
          })}
      </div>
      <FooterCalendar />
      </div>}
    </div>
  )
}

export default Calendar
