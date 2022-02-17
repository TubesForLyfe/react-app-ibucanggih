import React from 'react'
import { Link, useParams } from 'react-router-dom'

import Background from "../../img/Background.png"
import Submission from "../../img/Submission.PNG"
import "./Submitted.css"

const Submitted = () => {
  const {id} = useParams();

  return (
    <div>
      <img src={Background} />
      <p className="terimakasih">Terima kasih!</p>
      <img className="submission" src={Submission} />
      <p className="txt-submission">Submission Ibu sudah diterima</p>
      <Link to={`/tambah-poin-reward/${id}`}>
        <p className="button-add-submission"></p>
        <p className="txt-add-submission">Tambah Lagi</p>
      </Link>
      <Link to={`/homepage/${id}`}>
        <p className="txt-go-home">Kembali ke Beranda</p>
      </Link>
    </div>
  )
}

export default Submitted
