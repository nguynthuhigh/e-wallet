import Cookies from "universal-cookie"
import { useEffect, useState } from "react"
import partnerAPI from '../../api/partner.api'
import { useNavigate } from "react-router-dom"
import Header from "../header/header_dashboard"
export default function Dashboard(){
    const [partner, setPartner] = useState('')
    const cookie = new Cookies()
    const navigate = useNavigate()
    useEffect(() => {
        const fetchData = async () => {
          try {
            const partnerProfile = await partnerAPI.getProfilePartner();
            setPartner(partnerProfile.data.data);
            if(partnerProfile.data.data.partner?.name === undefined){
                navigate('/update-profile')
            }
          } catch (error) {
            console.log(error)
            navigate('/sign-in')
          }
        };
        fetchData(); 
      },[]);

    const partnerData = Object.assign({}, partner.partner);
    const handleLogout = ()=>{
        cookie.remove('token_auth')
        navigate('/')
    }
    return(
      <div>
          <Header></Header>
          <div className="max-w-[1250px] mt-20 mx-auto p-4">
            <div>
                {partnerData.name}
            </div>
            <div> {partnerData.privateKey}</div>
            <button onClick={handleLogout}>Đăng xuất</button>
          </div>
      </div>
      
    )
}