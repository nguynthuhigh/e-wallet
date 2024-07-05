import Header from '../header/header_login'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
export default function SignIn(){
    return(<div>
        <Header></Header>
        <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-row items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Đăng nhập
                        </h1>
                        <form class="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-color-default block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mật khẩu</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                            </div>
                            <div class="w-full">
                                <div class="w-fit ml-auto text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Quên mật khẩu?</div>
                            </div>
                            <button type="submit" class="bg-color-default w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                Bạn chưa có tài khoản đối tác? <Link to='/sign-up' class="font-medium text-primary-600 hover:underline dark:text-primary-500">Đăng ký</Link>
                            </p>
                        </form>
                    </div>
                </div>
                <img className='ml-10' alt='' src={logo}></img>
            </div>
            </section>
    </div>)
}