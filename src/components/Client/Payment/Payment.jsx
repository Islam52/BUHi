import './Payment.css'

export default function Payment(){
    return(
        <div className="payment">
            <div className='payment-m'>
                <div className='payment-form'>

                <form>
                    <label htmlFor="">Имя владельца карты</label>
                    <input type="text" className='input-pay' />
                    <label htmlFor="">Номер карты</label>
                    <input type="text" className='input-pay'/>
                    <label htmlFor="">Срок</label>
                    <input type="text" className='input-pay1' />
                    <label htmlFor="">Cумма</label>
                    <input type="text" className='input-pay1'/>
                    <button className='button-pay'>Оплатить</button>
                </form>

                </div>
            </div>

        </div>
    )
}