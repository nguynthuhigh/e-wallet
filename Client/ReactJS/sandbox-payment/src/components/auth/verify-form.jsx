import React, { useState } from "react"
import { useLocation } from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export default function VerifyForm(){
    const location = useLocation()
    const {infoUser} = location.state || {}
    const navigate = useNavigate()
    const [verifyInfo,setVerifyInfo] = useState({otp:'',email:infoUser.email})
    const handleChange = (e) => {
        const { name, value } = e.target;
        if(name === 'otp' &&value.length <=6){
            setVerifyInfo({
                ...verifyInfo,
                [name]: value,
            });
        }
    };
    const handleVerify =async (e)=>{
        e.preventDefault()
        try {
            console.log(verifyInfo)
            const response =await axios.post(process.env.REACT_APP_LOCAL_HOST + '/api/v1/partner/verify',verifyInfo,{
                headers:{
                    'Content-Type': 'application/json',
                }
            })
            if(response.status === 200){
                
                console.log(response)
                navigate('/')
                //store token here
            }
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <main class="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
        <div class="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
            <div class="flex justify-center">

                <div class="max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow">
                    <header class="mb-8">
                        <h1 class="text-2xl font-bold mb-1">Chúng tôi đã gửi email đến</h1><h1 className="text-color-default font-semibold">{infoUser.email}</h1>
                        <p class="text-[15px] font-semibold text-gray">Nhập 6 chữ số bạn nhận được từ email</p>
                    </header>
                    <form id="otp-form" onSubmit={handleVerify}>
                        <div class="flex items-center justify-center gap-3">
                            <input
                                name='otp'
                                type="text"
                                class="w-[60%] h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                                pattern="\d*" maxlength="6" 
                                placeholder="••••••"
                                value={verifyInfo.otp}
                                onChange={handleChange}/>
                        </div>
                        <div class="max-w-[260px] mx-auto mt-4">
                            <button type="submit"
                                class="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-color-default px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-blue-bold focus:outline-none focus:ring focus:ring-black focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150">
                                Xác nhận</button>
                        </div>
                    </form>
                    <div class="text-sm text-slate-500 mt-4">Không nhận được mã? <a class="font-medium text-color-default hover:text-indigo-600" href="#0">Gửi lại</a></div>
                </div>

            </div>
        </div>
    </main>
    )
}