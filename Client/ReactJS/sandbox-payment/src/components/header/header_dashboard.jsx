import logo_white from '../../assets/svg/logo_blue.svg'
import arrow_right from '../../assets/svg/arrow_right.svg'
import { Link,useNavigate } from "react-router-dom"
import { useEffect,useState } from 'react'
import partnerAPI from '../../api/partner.api'
import Cookies from "universal-cookie"

export default function Home(){
    const cookie = new Cookies()
    const navigate = useNavigate()

    const handleLogout = ()=>{
        cookie.remove('token_auth')
        navigate('/')
    }
    const [dashboard,setDashboard] = useState({link:'',name:''}) 
    useEffect(()=>{
        const fetchData = async () => {
            try {
              const partnerProfile = await partnerAPI.getProfilePartner();
              if(partnerProfile.status === 200){
                setDashboard({name:'Dashboard',link:'/dashboard'})
              }
            } catch (error) {
                setDashboard({name:'Đăng nhập',link:'/sign-in'})
            }
          };
          fetchData(); 
    },[])
    return(
        <div className='w-full fixed z-10 my-4 top-0'>
            <div className='flex items-center px-4 max-w-[1250px] mx-auto'>
                <Link to="/">
                    <img alt='logo_presspay' src={logo_white}></img>
                </Link>
                <div>
                    <button onClick={handleLogout}>Đăng xuất</button>
                    
                </div>
            </div>
        </div>
    )
}