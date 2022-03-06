import React, { useState, useEffect} from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import Axios from 'axios'

import './EditUser.css'

const EditUser = () => {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);
  const [password, setPassword] = useState([]);
  const [address, setAddress] = useState([]);
  const [wagroup, setWagroup] = useState([]);

  const {id} = useParams();
  const history = useHistory();

  const [logIn, setLogIn] = useState(false);
  const [roleLogIn, setRoleLogIn] = useState([]);

  Axios.defaults.withCredentials = true;

  const updateUser = (e) => {
    e.preventDefault();
    Axios.put(`${process.env.REACT_APP_IBUCANGGIH_API}/edit-profil`, {
      id: id,
      name: name,
      phone: phone,
      address: address,
      wagroup: wagroup,
      email: email,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        
      } else {
        history.push(`/admin/user`);
      }
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
        setPassword(response.data[0].password);
    })
  }

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_IBUCANGGIH_API}/login`).then((response) => {
    if (response.data.loggedIn) {
        setRoleLogIn(response.data.user[0].role);
        setLogIn(true);
      } else {
        setLogIn(false);
      }
    })
    getUserId(id);
  }, [])
    
  return (
    <div>
      {logIn && (roleLogIn == "admin") && <div>
      <Link to="/admin/user"><h2>Back</h2></Link>
      <form className="edituser-admin">
            <div>
              <input type="text" name="name" placeholder=" Nama Lengkap" value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div>
              <input type="email" name="email" placeholder=" Email" value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <input type="number" name="phone" placeholder=" No Handphone" value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
            <div>
              <input type="text" name="password" placeholder=" Kata Sandi"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div>
              <input type="text" name="address" placeholder=" Alamat Rumah" value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
            <div>
              <input type="text" name="wagroup" placeholder=" Asal Whatsapp Group" value={wagroup}
                onChange={(e) => {
                  setWagroup(e.target.value);
                }}
              />
            </div>
            <button onClick={updateUser}></button>
            <h2>Update</h2>
      </form>
      </div>}
    </div>
  )
}

export default EditUser
