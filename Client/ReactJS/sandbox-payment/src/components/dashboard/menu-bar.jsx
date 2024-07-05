import wallet_ic from '../../assets/svg/wallet_ic.svg'
import home_ic from '../../assets/svg/home_ic.svg'
import { Link } from 'react-router-dom'

const Item = ({...props})=>{
    return(
        <Link to={props.link}>
            <div className='flex p-4'>
                <img alt='' src={props.icon}></img>
                <div className='font-semibold ml-3'>{props.name}</div>
            </div>
        </Link>
    )
}
export default function MenuBar(){
    return(
        <div className="w-[200px] bg-gray-100 rounded-md h-full">
            <Item link='/dashboard' icon={home_ic} name="Home"></Item>
            <Item link='/dashboard/payment' icon={wallet_ic} name="Payment"></Item>
            <Item link='/dashboard/payment' icon={wallet_ic} name="Payment"></Item>
            <Item link='/dashboard/payment' icon={wallet_ic} name="Payment"></Item>
            <Item link='/dashboard/payment' icon={wallet_ic} name="Payment"></Item>
            <Item link='/dashboard/payment' icon={wallet_ic} name="Payment"></Item>
            
            
        </div>
    )
}