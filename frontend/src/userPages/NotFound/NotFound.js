import React from 'react'
import { Link, useParams } from 'react-router-dom'

import Background from "../../img/Background.png";
import Not_Found from "../../img/NotFound.png";
import "./NotFound.css";

const NotFound = () => {
  const {id} = useParams();

  return (
    <div>
      <img src={Background} />
      <p className="notfoundtxt1">
          Yah.. sepertinya halaman yang Ibu cari tidak ada.
      </p>
      <img className="notfoundimg" src={Not_Found} />
      <p className="notfoundtxt2">Coba ke halaman yang lain.</p>
      <Link to={`/homepage/${id}`}>
          <p className="backtohomie">
              Kembali ke Beranda
          </p>
      </Link>
    </div>
  )
}

export default NotFound
