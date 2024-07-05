import Header from '../header/header_login'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function SignIn(){
    const navigate = useNavigate()
    const [infoUser,setInfoUser] = useState({ email: '', password: '',confirm_password:'' });
    const [errorResponse, setErrorResponse] = useState({email:null,password:null})
    const handleChange = (e) => {
        setInfoUser({
          ...infoUser,
          [e.target.name]: e.target.value,
        });
        setErrorResponse({password:null,email:null})
      };
    const handleSignUp =async (e)=>{
        e.preventDefault()
        console.log(infoUser.confirm_password)
        if(infoUser.password !== infoUser.confirm_password){
            return setErrorResponse({password:"Mật khẩu không khớp"})
        }
        if((!infoUser.password && !infoUser.confirm_password) || (!infoUser.password || !infoUser.confirm_password)){
            return setErrorResponse({password:"Vui lòng nhập mật khẩu"})
        }
        if(!infoUser.email){
            return setErrorResponse({email:"Vui lòng điền email"})
        }
        try {
            const response = await axios.post(process.env.REACT_APP_LOCAL_HOST +'/api/v1/partner/signup',infoUser
            ,{
                headers: {
                  'Content-Type': 'application/json',
                },
              })
            if(response.status === 200){
                console.log(response)
                return navigate('/verify',{state:{infoUser}})
            }
        } catch (error) {
            console.log(error)
            setErrorResponse({email:error.response.data.message})
        }
    }
    return(<div>
        <Header></Header>
        <section class='bg-gray-50 dark:bg-gray-900'>
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Đăng ký trở thành đối tác
                        </h1>
                        <form class="space-y-1 md:space-y-3" onSubmit={handleSignUp}>
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input value={infoUser.email}
                                     onChange={handleChange} type="email" name="email" id="email" className={!errorResponse.email ? 'bg-gray-50 border border-black text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ':
                                        'bg-gray-50 border border-red-500 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '
                                     } placeholder="name@company.com" required=""/>
                                <p className='text-[12px] text-red-500'>{errorResponse.email}</p>

                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mật khẩu</label>
                                <input value={infoUser.password}
                                     onChange={handleChange} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                            </div>
                            <div className='mt-0'>
                                <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Xác nhận mật khẩu</label>
                                <input value={infoUser.confirm_password}
                                     onChange={handleChange} type="password" name="confirm_password" id="confirm_password" placeholder="••••••••" className={!errorResponse.password ? 'bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' 
                                     : "bg-gray-50 border border-red-500 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"} required=""/>
                            <p className='text-[12px] text-red-500'>{errorResponse.password}</p>

                            </div>
                            <button  type="submit" class="w-full text-white bg-color-default hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Đăng ký</button>
                            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                Bạn đã có tài khoản? <Link to='/sign-in'  class="font-medium text-primary-600 hover:underline dark:text-primary-500">Đăng nhập</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            </section>
        </div>)
}
