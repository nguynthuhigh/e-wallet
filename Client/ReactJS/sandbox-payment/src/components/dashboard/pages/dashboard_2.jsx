import { useEffect, useState } from "react"
import partnerAPI from '../../../api/partner.api'
import { Link, useNavigate } from "react-router-dom"
import MenuBar from "../components/menu-bar"
import {WalletItem,WalletItemLoading} from "../components/walet_item"
import Chart from "../components/chart"
export default function Dashboard(){
    const [privateKey,setPrivatekey] = useState('')
    const [partner, setPartner] = useState('')
    const [partnerCurrency, setPartnerCurrency] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const navigate = useNavigate()
    useEffect(() => {

        const fetchData = async () => {
          try {
            const partnerProfile = await partnerAPI.getProfilePartner();
            setPartner(partnerProfile.data.data);
            setPrivatekey(partnerProfile.data.data.partner.privateKey);
            setPartnerCurrency(partnerProfile.data.data.wallet.currencies)

            if(partnerProfile.data.data.partner?.name === undefined){
                navigate('/update-profile')
            }
          } catch (error) {
            console.log(error)
            navigate('/sign-in')
          }
          finally{
            setIsLoading(false)
          }
        };
        fetchData(); 
      },[]);

    const partnerData = Object.assign({}, partner.partner);
      console.log(partnerCurrency)
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
            <div className="w-[90%] p-8 border-[1px] border-r-2 border-y-0">
              <div className="flex w-full">
                <div className="w-[90%]">
                <ForDeveloper handleCopy={handleCopy} privateKey={privateKey}></ForDeveloper>
                  {/* <Chart/> */}

                </div>
                <div className="w-[35%] shadow-lg rounded-lg ml-auto border-[1px] p-4">
                  {isLoading?<WalletItemLoading/> :   <div className="">
                  {partnerCurrency.map((item, index) => (
                    <WalletItem key={index} item={item}></WalletItem>
                  ))}
                    </div>}
               
                    <div className="mt-5">
                      <Link>
                        <div className="w-full bg-color-default font-bold text-white p-2 text-center rounded-lg hover:text-color-default hover:bg-white border-[1px] hover:border-color-default">
                          Withdrawl
                        </div>
                      </Link>
                    </div>
                </div>
              </div>
              <div>
                <ForDeveloper handleCopy={handleCopy} privateKey={privateKey}></ForDeveloper>
              </div>
            </div>
          </div>
      </div>
      
    )
}

const ForDeveloper =({handleCopy,...props})=>{
  return(<div className="border-[1px] p-4 w-[300px] h-[120px] rounded-lg flex-col pt-6 shadow-lg">
      <div className="font-bold text-[12px]">TEST API KEYS</div>
          <div className="flex font-semibold text-[15px]">
            <div className=" ">Private key</div>
            <button  onClick={handleCopy} className="overflow-hidden text-gray-500 text-ellipsis w-[180px] ml-auto  mx-2  hover:text-blue-400 font-semibold"> {props.privateKey}</button>
          </div>
        <Link className="font-medium">Read documents </Link>
    </div>)
}