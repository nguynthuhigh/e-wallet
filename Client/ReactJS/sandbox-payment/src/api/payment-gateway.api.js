import axios from "axios";
export const paymentSend =async (body)=>{
    return await axios.post(process.env.REACT_APP_LOCAL_HOST+'/api/v1/payment',body)
}
export const PaymentGateway =async (token)=>{
    return await axios.get(process.env.REACT_APP_LOCAL_HOST+'/payment-gateway?token='+token)
}
const exportObject = {
    paymentSend,
    PaymentGateway
}
export default exportObject;