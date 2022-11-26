import React, { useState } from 'react';

import { Link } from 'react-router-dom'
import './Registration.css'

function Registration(close) {

  const Regist = () =>{
    close();
  }

  return (
    <div className='registration'>
        <p>Выберите  форму регистрации</p>
        <button className='buhilter'>Бухгалтер</button>
        <Link to="/registrationuser" onClick={Regist} ><button className='user'>Клиент</button></Link>
    </div>
  )
}

export default Registration