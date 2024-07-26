import logo_white from '../../assets/svg/logo_white.svg'
import arrow_right from '../../assets/svg/arrow_right.svg'
import { Link,useNavigate } from "react-router-dom"
import { useEffect,useState } from 'react'
import partnerAPI from '../../api/partner.api'
import Cookies from "universal-cookie"

export default function Home({index}){
    const cookie = new Cookies()
    const navigate = useNavigate()

    const handleLogout = ()=>{
        cookie.remove('token_auth')
        navigate('/')
    }
    const [dashboard,setDashboard] = useState({link:'',name:''}) 
 
    return(
        <div className='w-full  z-10 my-4 top-0 bg-color-default'>
            <div className='flex items-center px-4 max-w-[1250px] mx-auto'>
                <Link to="/">
                    <img alt='logo_presspay' src={logo_white}></img>
                </Link>
                <div>
                    <button onClick={handleLogout}>Đăng xuất</button>
                    
                </div>
            </div>
            <div className='max-w-[1200px] p-4 mx-auto font-semibold text-white text-lg'>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/dashboard/payment'>Payment</Link>
                <Link></Link>
            </div>
        </div>
    )
}