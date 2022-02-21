import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Axios from 'axios'

import DefaultPicture from '../../img/Mother.png'
import './AddUser.css'

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [wagroup, setWagroup] = useState('');

  const [registerStatus, setRegisterStatus] = useState('');
  const history = useHistory();

  const [logIn, setLogIn] = useState(false);
  const [roleLogIn, setRoleLogIn] = useState([]);

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get('http://localhost:5000/login').then((response) => {
    if (response.data.loggedIn) {
        setRoleLogIn(response.data.user[0].role);
        setLogIn(true);
      } else {
        setLogIn(false);
      }
    })
  }, [])

  const addUser = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:5000/register', {
      name: name,
      email: email,
      phone: phone,
      password: password,
      pwconfirm: password,
      address: address,
      wagroup: wagroup,
      image: DefaultPicture
    }).then((response) => {
      if (response.data.message) {
        setRegisterStatus(response.data.message);
      } else {
        history.push(`/admin/user`);
      }
    });
  };

  return (
    <div>
      {logIn && (roleLogIn == "admin") && <div>
      <Link to="/admin/user"><h2>Back</h2></Link>
      <div className="add-useradmin">
          <form>
            <div>
              <input type="text" name="name" placeholder=" Nama Lengkap" 
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div>
              <input type="email" name="email" placeholder=" Email" 
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <input type="number" name="phone" placeholder=" No Handphone" 
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
              <input type="text" name="address" placeholder=" Alamat Rumah" 
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
            <div>
              <input type="text" name="wagroup" placeholder=" Asal Whatsapp Group" 
                onChange={(e) => {
                  setWagroup(e.target.value);
                }}
              />
            </div>
            <button type="submit" onClick={addUser}></button>
            <h2>Tambah</h2>
          </form>
          <h1>{registerStatus}</h1>
      </div>
      </div>}
    </div>
  )
}

export default AddUser
