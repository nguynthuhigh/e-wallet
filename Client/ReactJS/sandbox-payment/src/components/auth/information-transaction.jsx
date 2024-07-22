import nameapp from '../../assets/svg/nameapp.svg'
import qrcode from '../../assets/images/qrcode.png'
import bg_layout from '../../assets/images/bg_layout.png'
import bg_qrcode from '../../assets/images/bg_qrcode.png'
import logoapp from '../../assets/svg/logoapp.svg'

export function InformationTransaction(){
    return(
        <section className="bg-slate-400">
            <div className='w-[1200px] mx-auto bg-white font-inter'>
                <div className="h-[92px]">
                    <div className="flex px-2 py-3 items-center">
                        <div>
                            <img className='ml-10' alt='' src={nameapp}></img>
                        </div>
                        <div className='text-[20px] ml-5 '>
                            Cổng thanh toán pressPay - Thanh toán liền tay
                        </div>
                    </div>
                </div>

                <div className="h-[740px] relative">
                    <div className="relative">
                        <img className='h-[740px] w-[1200px]' alt='' src={bg_layout}></img>
                        <div className='flex justify-between absolute py-20 inset-0 px-[100px] top-0 left-0 z-10'>
                            <form className='px-7 py-5 w-[310px] h-[572px] bg-white rounded-[15px]'>
                                <p className='font-bold text-[20px] justify-center flex'>Thông tin giao dịch</p>
                                <div className='mt-5'>
                                    <p className='text-[#959595]'>Số tiền thanh toán</p>
                                    <p className='text-[#0094ff] font-semibold'>20.000 VND</p>
                                </div>
                                <div className='mt-5'>
                                    <p className='text-[#959595]'>Nhà cung cấp</p>
                                    <p className='text-[#0094ff] font-semibold'>Hủ Tiếu Bà Bảy</p>
                                </div>
                                <div className='mt-5'>
                                    <p className='text-[#959595]'>Tên sản phẩm</p>
                                    <p className='text-[#0094ff] font-semibold'>Hủ tiếu mì khô 2 vắt</p>
                                </div>
                                <div className='mt-5'>
                                    <p className='text-[#959595]'>Mã đơn hàng</p>
                                    <p className='text-black font-semibold'>hutieumikho2jack</p>
                                </div>
                                <div className='flex items-center mt-10'>
                                    <p className='mr-2 text-[16px] '>Giao dịch hết hạn sau</p>
                                    <div className='p-1 border-[1px] border-[#0094ff] rounded-[5px] font-extrabold'>10 : 00</div>
                                </div>
                            </form>
                            <div className='relative w-[650px] h-[572px] bg-white rounded-[15px]'>
                                <img src={bg_qrcode} alt="" className='w-full h-full'/>
                                <div className='w-full h-full'>
                                    <form className="w-full h-full py-10 absolute z-10 top-0 left-0">
                                        <p className='text-white font-bold text-[20px] justify-center flex'>Quét mã QR để thanh toán</p>
                                        <div className='relative w-full h-[400px]'>
                                            <img src={qrcode} alt="" className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                                            <img src={logoapp} alt="" className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
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
            </div>
        </section>
    )
}
