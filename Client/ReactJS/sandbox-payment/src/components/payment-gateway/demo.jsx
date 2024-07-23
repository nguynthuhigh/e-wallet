import Header from '../header/header'
import paymentAPI from '../../api/payment-gateway.api'
import { useState } from 'react'
export default function Demo(){
    const [formData,setFormData]  = useState({amount:null,private_key:null,currency:null,message:"1"})
    const hanldeCreatePayment =async (e)=>{
        e.preventDefault(); 
        try {
            const body ={
                private_key:formData.private_key,
                amount:formData.amount,
                currency:formData.currency,
                message:formData.message
            }
            const response = await paymentAPI.paymentSend(body)
            if(response.status === 200){
                window.location.replace(response.data.url)
            }
        } catch (error) {
        }
    }
    const handleChange = (e)=>{
        e.preventDefault()
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        console.log(formData)
    }
    return(<>
        <Header color={true}></Header>
        <div className='pt-20'>
        
        
       <form className='max-w-[1200px] mx-auto' onSubmit={hanldeCreatePayment}>
        <div class="mb-6 ">
                <label for="private_key" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Private key</label>
                <input value={formData.private_key}  onChange={handleChange} type="text" id="private_key" name="private_key" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div class="mb-6">
                <label for="amount" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
                <input value={formData.amount}  onChange={handleChange}  type="text" id="default-input" name="amount" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div>
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Currency</label>
                <input value={formData.currency}  onChange={handleChange}  type="text" id="small-input" name="currency" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <button className='bg-blue-500 '>Click me</button>
       </form>

        </div>
    </>)
}