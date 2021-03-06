import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import Axios from 'axios'

import Background from "../../img/Background.png";
import Back from "../../img/Back.png";
import SubmitEditProfile from "../../img/SubmitEditProfile.png";
import RightArrow from "../../img/RightArrow.png"
import FooterHome from "../../components/FooterHome/FooterHome";
import "./EditProfile.css"

const EditProfile = () => {
  const [name, setName] = useState([]);
  const [phone, setPhone] = useState([]);
  const [address, setAddress] = useState([]);
  const [wagroup, setWagroup] = useState([]);
  const [email, setEmail] = useState([]);
  const [image, setImage] = useState([]);
  const [imageView, setImageView] = useState([]);
  const [listWAGroup, setListWAGroup] = useState([]);
  const [activeWA, setActiveWA] = useState(false);
  const {id} = useParams();
  const history = useHistory();

  const [logIn, setLogIn] = useState(false);
  const [idLogIn, setIDLogIn] = useState([]);
  const [roleLogIn, setRoleLogIn] = useState([]);

  Axios.defaults.withCredentials = true;

  const back = (e) => {
    e.preventDefault();
    Axios.put(`${process.env.REACT_APP_IBUCANGGIH_API}/image-directory/${id}`, {
      image: image
    }).then((response) => {
      history.push(`/profil/${id}`);
    })
  }

  const update = (e) => {
    e.preventDefault();
    Axios.put(`${process.env.REACT_APP_IBUCANGGIH_API}/edit-profil/half`, {
      id: id,
      name: name,
      phone: phone,
      address: address,
      wagroup: wagroup,
    }).then((response) => {
      if (response.data.message) {
        
      } else {
        const id = response.data;
        history.push(`/profil/${id}`);
      }
    });
  }

  const imageHandler = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    
    fetch(`${process.env.REACT_APP_IBUCANGGIH_API}/image/${id}`, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'multipart/form-data',
      },
      credentials: 'include'
    }).then(res => res.json()).then(res => {
      fetch(`${process.env.REACT_APP_IBUCANGGIH_API}/image/${id}`, {
        method: 'GET',
        headers: {
          "Content-Type": 'application/json, charset=UTF-8',
          'Accept': 'application/json, text/html'
        },
        credentials: 'include'
      }).then(data => data.json()).then((data) => {
        setImageView(`${process.env.REACT_APP_IBUCANGGIH_API}/` + data.image);
      })
    });
  }

  const getUserId = (id) => {
    Axios.post(`${process.env.REACT_APP_IBUCANGGIH_API}/profil`, {
        id: id
    }).then((response) => {
        setName(response.data[0].name);
        setPhone(response.data[0].phone);
        setAddress(response.data[0].address);
        setWagroup(response.data[0].wagroup);
        setEmail(response.data[0].email);
    })
  }

  const getWAGroup = () => {
    Axios.get(`${process.env.REACT_APP_IBUCANGGIH_API}/get-wagroup`).then((response) => {
        setListWAGroup(response.data);
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
    getWAGroup();
    fetch(`${process.env.REACT_APP_IBUCANGGIH_API}/image/${id}`, {
      method: 'GET',
      headers: {
        "Content-Type": 'application/json, charset=UTF-8',
        'Accept': 'application/json, text/html'
      },
      credentials: 'include'
    }).then(data => data.json()).then((data) => {
      setImage(data.image);
      setImageView(`${process.env.REACT_APP_IBUCANGGIH_API}/` + data.image);
    })
  }, [])

  return (
    <div>
      {logIn && (roleLogIn == "user") && (id == idLogIn) && <div>
      <div>
        <img className="editprofile-bg" src={Background} />
        <div>
            <img className="back-editprofile" src={Back} onClick={back} />
            <img className="default-editprofile" src={imageView} />
            <label for="image" className="ganti-foto">Ganti Foto</label>
        </div>
        <form className="form-edit">
            <input className="edit-image" type="file" name="image" id="image" accept="image/*" onChange={imageHandler} />
            <input className="edit-name" type="text" name="name" placeholder="Nama" value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input className="edit-phone" type="number" name="number" placeholder="No Handphone" value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <input className="edit-address" type="text" name="address" placeholder="Alamat Lengkap" value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
            <div className="edit-groupwa" onClick={(e) => setActiveWA(!activeWA)}></div>
            <p className="groupwa-name">{wagroup}</p>
            {activeWA && listWAGroup.map((val,key) => {
              return (
                <p className="groupwa-list" onClick={(e) => {
                  setWagroup(val.name);
                  setActiveWA(false);
                }}>
                  <p className="list">{val.name}</p>          
                </p>
              )
            })}
            <button type="submit" onClick={update}><img className="submit-editprofile" src={SubmitEditProfile} /></button>
        </form>
        {!activeWA && <p>
        <p className="edit-akun">Akun</p>
        <Link to={`/edit-profil/email/${id}`}>
          <p className="borderemail-profil"></p>
          <p className="email-profil">{email}</p>
          <img className="arrowemail-profil" src={RightArrow} />
        </Link>
        <Link to={`/edit-profil/password/${id}`}>
          <p className="borderpw-profil"></p>
          <p className="pw-profil">************</p>
          <img className="arrowpw-profil" src={RightArrow} />
        </Link>
        </p>}
      </div>
      <FooterHome active="profile"/>
      </div>}
    </div>
  )
}

export default EditProfile
