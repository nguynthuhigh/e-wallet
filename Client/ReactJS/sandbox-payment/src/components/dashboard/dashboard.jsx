import { useEffect, useState } from "react"
import partnerAPI from '../../api/partner.api'
import { Link, useNavigate } from "react-router-dom"
import Header from "../header/header_dashboard"
import MenuBar from "./menu-bar"
import Chart from "./chart"
export default function Dashboard(){
    const [privateKey,setPrivatekey] = useState('')
    const [partner, setPartner] = useState('')
    const navigate = useNavigate()
    useEffect(() => {

        const fetchData = async () => {
          try {
            const partnerProfile = await partnerAPI.getProfilePartner();
            setPartner(partnerProfile.data.data);
            setPrivatekey(partnerProfile.data.data.partner.privateKey);
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
  
    const handleCopy = () => {
      navigator.clipboard.writeText(privateKey).then(() => {
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    };
    return(
      <div>
          <div className="w-full mx-auto px-4 flex h-full">
            <MenuBar></MenuBar>
            <div className="w-full p-8 border-[1px] border-r-2 border-y-0">
              <div className="flex w-full">
                <div className="w-[49%]">
                    <Chart/>
                </div>
                <div className="w-[35%] ml-auto border-[1px] p-4">
                  <div className="font-medium">For developer</div>
                  <div className="flex">
                    <div className=" font-medium text-[13px]">Private key</div>
                    <button  onClick={handleCopy} className="overflow-hidden text-ellipsis w-[70%]  mx-2 text-[12px] hover:text-blue-400 font-semibold"> {privateKey}</button>
                  </div>
                  <Link className="font-medium">Read documents </Link>
                </div>
              </div>
            </div>
          </div>
      </div>
      
    )
}