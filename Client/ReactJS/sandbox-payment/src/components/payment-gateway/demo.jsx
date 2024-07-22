import Header from '../header/header'
import paymentAPI from '../../api/payment-gateway.api'
export default function Demo(){
    const hanldeCreatePayment =async ()=>{
        try {
            const body ={
                private_key:"pk_presspay_62849c1e70084b1d3372ad5a8913f918fab3d64324a9de6a7b4adbbfdcf8e70f",
                amount:"1200",
                currency:"VND",
                message:" "
            }
            const response = await paymentAPI.paymentSend(body)
            if(response.status === 200){
                window.location.replace(response.data.url)
            }
        } catch (error) {
        }
    }
    return(<>
        <Header color={true}></Header>
        <div className='pt-20'>
        <button  onClick={hanldeCreatePayment}>Click me</button>
        </div>
    </>)
}