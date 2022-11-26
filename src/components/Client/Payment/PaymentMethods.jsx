import './PaymentMethods.css';
import { Link, NavLink } from 'react-router-dom';
import CreateButton from './../../UI/CreateButton/CreateButton';

export default function PaymentMethods(close){

    // const PaymentMet = () =>{
    //     close()
    // }

    return(
        <div className="payment-methods">
            <div className='payment-met'>
                <div className='methods-form'>

                <h2>Способы оплаты</h2>
        
                <form>
                    <label htmlFor="">Способы оплаты</label>
                    <input type="text" className='input-met' />
                    <label htmlFor="">Сумма</label>
                    <input type="text" className='input-met'/>
                    {/* <CreateButton> */}
                    <Link to='/pay' className='button-met'>Перейти к оплате</Link>
                    {/* </CreateButton> */}
                </form>

                </div>
            </div>

        </div>
    )
}