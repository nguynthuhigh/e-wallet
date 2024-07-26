import { useEffect, useState } from 'react'
import Header from '../header/header_dashboard'

import partnerAPI from '../../api/partner.api'

export default function Voucher(){
    const [isLoading,setIsLoading] = useState(true)
    const [data,setData] = useState(null)
    useEffect(()=>{
        const fetchVouchers = async ()=>{
            try {
                
                const response = await partnerAPI.getVouchers()
                if(response.status === 200){
                    setData(response.data.data)
                    console.log(response.data.data)
                    setIsLoading(false)
                }
            } catch (error) {
                console.log(error)
                setIsLoading(false)
            }

        }
        fetchVouchers()
    },[])
    return(<>
        <Header></Header>
        <div className="max-w-[1200px] mx-auto bg-gray-50 ">
            <h1 className='font-bold text-xl py-2'> List vouchers</h1>
        <table className="rounded-xl w-full">
            <tr className="text-xs text-gray-700 uppercase bg-gray-100 ">
                <th scope="col" class="p-4">Title</th>
                <th scope="col" class="p-4">Description</th>
                <th scope="col" class="p-4">Code</th>
                <th scope="col" class="p-4">Quantity</th>
                <th scope="col" class="p-4">Used Count</th>
                <th scope="col" class="p-4">Discount</th>
                <th scope="col" class="p-4">Min</th>
                <th scope="col" class="p-4">Action</th>
            </tr>
                
            {isLoading ? '...Loading': data.map((item,key)=>(
                <tr className={`text-md text-gray-700  hover:bg-gray-100 bg-white`}>
                <Item value={item.title}></Item>
                <Item value={item.content}></Item>
                <Item value={item.code}></Item>
                <Item value={item.quantity}></Item>
                <Item value={item.usedCount}></Item>
                <Item value={item.discountValue}></Item>
                <Item value={item.min_condition}></Item>
                <Action></Action>
            </tr>
            ))}
        </table>
    </div>
    </>)
}
const Item = ({value})=>{
    return(<td className="p-4 text-center cursor-pointer py-[20px]">{value}</td>)
}
const Action = ()=>{
    return(
        <div className="mt-2">
            <button className="bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold mr-2">Edit</button>
            <button className="border-red-500 text-red-500 font-semibold border-[2px] px-4 py-[6px] rounded-xl">Delete</button>
        </div>
    )
}