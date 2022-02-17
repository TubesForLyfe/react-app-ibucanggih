import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import Axios from 'axios'

import Background from "../../img/Background.png";
import EditProfile from "../../img/EditProfile.png";
import Pencil from "../../img/Pencil.png";
import DefaultPicture from "../../img/DefaultPicture.png";
import Rectangle from "../../img/Rectangle.png";
import SmallRectangle from "../../img/SmallRectangle.png";
import Handphone from "../../img/Handphone.png";
import House from "../../img/House.png";
import Whatsapp from "../../img/Whatsapp.png";
import FooterProfile from "../../components/FooterProfile/FooterProfile";
import "./Profile.css"

const Profile = () => {
  const [name, setName] = useState([]);  
  const [phone,setPhone] = useState([]);
  const [address,setAddress] = useState([]);
  const [wagroup, setWagroup] = useState([]); 
  const [image, setImage] = useState([]);
  const {id} = useParams();  

  const getUserId = (id) => {
      Axios.post(`http://localhost:5000/profil`, {
          id: id
      }).then((response) => {
          setName(response.data[0].name);
          setPhone(response.data[0].phone);
          setAddress(response.data[0].address);
          setWagroup(response.data[0].wagroup);
          setImage(response.data[0].image);
      })
  }

  useEffect(() => {
      getUserId(id);
  }, [])

  return (
    <div>
        <img className="profile-bg" src={Background} />
        <Link to={`/edit-profil/${id}`}><img className="edit-profile" src={EditProfile} /></Link>
        <Link to={`/edit-profil/${id}`}><img className="edit-profilepencil" src={Pencil} /></Link>
        <div>
            <img className="defaultprofile-pic" src={image} />
            <p className="defaultprofile-text">{name}</p>
        </div>
        <div>
            <div>
                <img className="profile-rectangle1" src={Rectangle} />
                <img className="profile-smallrectangle1" src={SmallRectangle} />
                <img className="handphone-profile" src={Handphone} />
                <p className="profile-text1">Nomor Handphone</p>
                <p className="profile-phone">{phone}</p>
            </div>
            <div>
                <img className="profile-rectangle2" src={Rectangle} />
                <img className="profile-smallrectangle2" src={SmallRectangle} />
                <img className="house-profile" src={House} />
                <p className="profile-text2">Alamat Rumah</p>
                <p className="profile-house">{address}</p>
            </div>
            <div>
                <img className="profile-rectangle3" src={Rectangle} />
                <img className="profile-smallrectangle3" src={SmallRectangle} />
                <img className="wa-profile" src={Whatsapp} />
                <p className="profile-text3">Asal Whatsapp Group</p>
                <p className="profile-wa">{wagroup}</p>
            </div>
        </div>
        <FooterProfile />
    </div>
  )
}

export default Profile
