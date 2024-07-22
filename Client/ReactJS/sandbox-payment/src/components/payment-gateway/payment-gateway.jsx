import logo from '../../assets/svg/logo_blue.svg'
import bg_qrcode from '../../assets/images/bg_qrcode.png'
import { useLocation } from 'react-router-dom';
import paymentAPI from '../../api/payment-gateway.api'
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Countdown from 'react-countdown';
import QRCode from "react-qr-code";
import logo_presspay from '../../assets/images/logo.png'
export default function PaymentGateway(){
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');
    const [isLoading,setIsLoading] = useState(true)
    const [dataTransaction,setDataTransaction] = useState(null)
    const navigate = useNavigate()
 
    useEffect(()=>{
        const fetchTransaction = async ()=>{
            try {
                const response = await paymentAPI.PaymentGateway(token);
                if(response.status===200){
                    setDataTransaction(response.data.data)
                    setIsLoading(false)
                }
                
            } catch (error) {
                console.log(error)
                navigate('/*')
            }
        }
        fetchTransaction()
    },[])
    if(isLoading){
        return(<div>Loading transaction....</div>)
    }
    return(
        <section className={`bg-background-default bg-no-repeat  bg-cover bg-center font-inter '`}>
                <div className="h-[92px] fixed w-full z-20 bg-white">
                    <div className="flex px-2 py-3 items-center">
                        <div>
                            <img className='ml-10' alt='' src={logo}></img>
                        </div>
                        <div className='text-[20px] ml-5 '>
                            Cổng thanh toán pressPay
                        </div>
                    </div>
                </div>

                <div className="max-w-[1200px] mx-auto h-[740px]  pt-10">
                    <div className="">
                        <div className='flex justify-between  py-20 inset-0 px-[100px] top-0 left-0 z-10'>
                            <form className='px-7 py-5 w-[310px] h-[572px] bg-white rounded-[15px]'>
                                <p className='font-bold text-[20px] justify-center flex'>Thông tin giao dịch</p>
                                <div className='mt-5'>
                                    <p className='text-[#959595]'>Số tiền thanh toán</p>
                                    <p className='text-[#0094ff] font-semibold'>{dataTransaction?.amount}</p>
                                </div>
                                <div className='mt-5'>
                                    <p className='text-[#959595]'>Nhà cung cấp</p>
                                    <p className='text-[#0094ff] font-semibold'>{dataTransaction?.partnerID.name}</p>
                                </div>
                                <div className='mt-5'>
                                    <p className='text-[#959595]'>Tên sản phẩm</p>
                                    <p className='text-[#0094ff] font-semibold'>Hủ tiếu mì khô 2 vắt</p>
                                </div>
                                <div className='mt-5'>
                                    <p className='text-[#959595]'>Mã đơn hàng</p>
                                    <p className='text-black font-semibold'>hutieumikho2jack</p>
                                </div>
                                <div className='flex-col items-center w-full mt-10'>
                                    <p className='mr-2 text-[16px] w-fit mb-1'>Giao dịch hết hạn sau</p>
                                    <div className='text-center border-[1px] w-[60%] p-2 mt-2 border-[#0094ff] rounded-[5px] font-extrabold'><Countdown  date={  (new Date(dataTransaction?.createdAt).getTime()) + 10 * 60 * 1000 } renderer={({ minutes, seconds }) => (
                    <div>
                        {minutes} phút {seconds} giây
                    </div>
                )}/></div>
                                </div>
                            </form>
                            <div className='relative w-[650px] h-[572px] bg-white rounded-[15px]'>
                                <img src={bg_qrcode} alt="" className='w-full h-full'/>
                                <div className='w-full h-full'>
                                    <form className="w-full h-full py-10 absolute z-10 top-0 left-0">
                                        <p className='text-white font-bold text-[20px] justify-center flex'>Quét mã QR để thanh toán</p>
                                        <div className='relative w-full h-[400px]'>
                                            <div className='w-full flex justify-center items-center'>
                                            <QRCode className='p-2 bg-white mt-16 z-0' 
                                                value={dataTransaction?._id ? dataTransaction?._id : '1'} 
                                                imageSettings={{
                                                src:{logo_presspay},
                                                excavate:true
                                            }}></QRCode>
                                            </div>
                                        </div>
                                        <div className='flex flex-col items-center'>
                                            <p className='text-white text-center'>Sử dụng App pressPay hoặc Camera để quét mã</p>
                                            <p className='text-white text-center'>Bạn chưa có ứng dụng? <span className='text-[#0094ff] ml-1'>Tải ngay</span></p>
                                        </div>
                                    </form>
                                </div>

                            </div>  
                        </div>
                    </div>
                </div>
        </section>
    )
}
