import logo_white from '../../assets/svg/logo_white.svg'
import arrow_right from '../../assets/svg/arrow_right.svg'
import { Link } from "react-router-dom"

export default function Home(){
    return(
        <div className='w-full fixed z-10 my-4'>
            <div className='flex items-center px-4 max-w-[1250px] mx-auto'>
                <img alt='logo_presspay' src={logo_white}></img>
                <div className='max-md:hidden flex ml-10 w-[40%] justify-between text-[20px] font-semibold text-white'>
                    <h1 className=''>Developer</h1>
                    <h1 >Hỗ trợ</h1>
                    <h1>Developer</h1>
                    <h1>Developer</h1>
                </div>
                <Link className='ml-auto' to='/sign-in'>
                    <div className='w-[100px] border-[1px] border-white  h-[30px] justify-center text-[12px]  rounded-full items-center flex   bg-white text-color-default font-semibold'>
                        <h1>Đăng nhập</h1>
                        <img alt='' className='w-[4px] h-[7px] ml-2' src={arrow_right}></img>
                    </div>
                </Link>
            </div>
        </div>
    )
}