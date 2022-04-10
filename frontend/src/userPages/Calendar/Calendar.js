import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios'
import Kalender from 'react-calendar'

import LineCalendar from "../../img/LineDetailReward.png";
import FooterHome from "../../components/FooterHome/FooterHome";
import "./Calendar.css";

const Calendar = () => {
  const [listEvent, setListEvent] = useState([]);
  const {id} = useParams();

  const [logIn, setLogIn] = useState(false);
  const [idLogIn, setIDLogIn] = useState([]);
  const [roleLogIn, setRoleLogIn] = useState([]);

  Axios.defaults.withCredentials = true;

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
    const nowMonth = new Date().toString().substring(4,7);
    Axios.post(`${process.env.REACT_APP_IBUCANGGIH_API}/get-calendar`, {
      month: nowMonth
    }).then((response) => {
      setListEvent(response.data);
    })
  }, [])

  const setEvent = (e) => {
    Axios.post(`${process.env.REACT_APP_IBUCANGGIH_API}/get-calendar`, {
      month: e.activeStartDate.toString().substring(4,7)
    }).then((response) => {
      setListEvent(response.data);
    })
  }

  const setEventByDate = (e) => {
    Axios.post(`${process.env.REACT_APP_IBUCANGGIH_API}/get-calendarbydate`, {
      month: e.toString().substring(4,7),
      date: e.toString().substring(8,10)
    }).then((response) => {
      setListEvent(response.data);
    })
  }

  return (
    <div className='flex-column min-full-height'>
      {logIn && (roleLogIn == "user") && (id == idLogIn) && <div>
      <p className="title-calendar">Event Kalender</p>
      <div className="calendar-main">
          <Kalender onActiveStartDateChange={setEvent} onChange={setEventByDate}/>
      </div>
      <p className="event-calendar">All Events</p>
      <div className='padding-horizontal-20'>
        {listEvent.map((val, key) => {
              return (
                  <div className="full-width flex-column">
                    <div className='flex-row flex-center'>
                      <div className='flex-column flex-center'>
                        <div className="date-calendar">{val.date}</div>
                        <div className="month-calendar">{val.month}</div>
                      </div>
                      <div className='margin-left flex-column'>
                        <div className="type-calendar">{val.type}</div>
                        <div className="name-calendar">{val.name}</div>
                      </div>
                    </div>
                      <img className="margin-top-16 margin-bot-16" src={LineCalendar} />
                  </div>
              )
          })}
      </div>
      <FooterHome active="calendar"/>
      </div>}
    </div>
  )
}

export default Calendar
