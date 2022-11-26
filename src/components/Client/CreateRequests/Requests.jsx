import './Requests.css'
import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Requests(){
    return(
        <div className="requests">
            <div className='requests-m'>
            <Link to="/"><img src='/img/Logo.png' className="reg_logo" /></Link>


        <div className='requests-bar'>
           <Link to='/' className='Us'>Заявки</Link>
           <Link to='/consultation' className='Us'>Консультации</Link>
           <Link to="#" className='Us'>Услуги</Link>
           <Link to='/paymentMet' className='Us'>Оплата</Link>
           <Link to='/' className='Ur'>Профиль</Link>
           <Link to='/' className='Us'>Выход</Link>


        </div>
                <div className='requests-form'>
                    <h2>Заявки</h2>
                <form className='form-requests'>
                    <input placeholder='Номер заявки' type="text" className='requests-input' />
                    <input placeholder='Дата' type="text" className='requests-input'/>
                    <input placeholder='Оплата' type="text" className='requests-input' />
                </form>
                <button className='button-req'>Создать</button>


                </div>
            </div>

        </div>
    )
}