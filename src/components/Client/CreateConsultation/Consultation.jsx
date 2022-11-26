import './Consultation.css'
import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Consultation(){
    return(
        <div className="consultation">
            <div className='consultation-m'>
            <Link to="/"><img src='/img/Logo.png' className="reg_logo" /></Link>


        <div className='consultation-bar'>
           <Link to='/' className='Us'>Заявки</Link>
           <Link to='/consultation' className='Us'>Консультации</Link>
           <Link to="#" className='Us'>Услуги</Link>
           <Link to='/' className='Us'>Оплата</Link>
           <Link to='/' className='Ur'>Профиль</Link>
           <Link to='/' className='Us'>Выход</Link>


        </div>
                <div className='consultation-form'>
                    <h2>Онлайн консультация</h2>
                <form className='form-consultation'>
                    <label for="fname" className='label'>Ссылка на консультацию</label>
                    <input placeholder='Ссылка' type="text" className='consultation-input' />
                    <label for="fname" className='label'>Дата</label>
                    <input placeholder='ДД/ММ/ГГГГ' type="text" className='consultation-input1'/>
                </form>
                <button className='button-req'>Создать</button>
                


                </div>
            </div>

        </div>
    )
}