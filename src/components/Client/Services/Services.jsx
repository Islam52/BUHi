import * as React from 'react';
import './Services.css'
import { Link } from 'react-router-dom';

export default function Services(){
    return(
        <div className="services"> 
            <div className='services-met'>
                <div className='services-form'>

                <h2>Заказать услугу</h2>
        
                <form>
                    <input type="" placeholder='Сдать ежемесячный  отчет для ОсОО' className='input-met'/>
                    <label htmlFor="">Сумма</label>
                    <input type="text" className='input-met'/>
                    <Link to='/pay' >Перейти к оплате</Link>
                </form>

                </div>
            </div>
        </div>
    )
}