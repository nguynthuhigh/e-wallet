import bg_home from '../../assets/images/bg_home.png'
import logo from '../../assets/images/logo.png'
import arrow_right from '../../assets/svg/arrow_right.svg'
import { Link } from 'react-router-dom'
export default function Home(){
    return<>
        <div className="relative">
            <img alt="bg" className=" w-full h-[500px]" src={bg_home}></img>

            <div className="absolute top-28 w-full">
                <div className="max-w-[1250px] mx-auto p-4">
                    <div className="flex">
                        <div >
                            <p className="lg:text-[80px] lg:w-[500px] leading-[80px] text-white font-semibold">
                                Thanh toán nhanh hơn với pressPay
                            </p>
                            <p className='my-4 lg:text-[20px] font-medium'>Trở thành đối tác của chúng tôi</p>
                            <Link className='ml-auto' to='/sign-in'>
                                <div className='w-[100px] border-[1px] border-white  h-[30px] justify-center text-[12px]  rounded-full items-center flex   bg-white text-color-default font-semibold'>
                                    <h1>Bắt đầu</h1>
                                    <img alt='' className='w-[4px] h-[7px] ml-2' src={arrow_right}></img>
                                </div>
                            </Link>
                        </div>
                        <div className="ml-auto max-lg:hidden">
                            <img alt="" src={logo}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}