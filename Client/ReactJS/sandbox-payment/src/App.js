import Home from './components/home/home'
import SignIn from './components/auth/sign-in'
import SignUp from './components/auth/sign-up'
import VerifyForm from './components/auth/verify-form';
import Dashboard from './components/dashboard/pages/dashboard';
import UpdateProfile from './components/auth/update-profile'
import { Routes,Route } from 'react-router-dom';
import PageNotFound from './components/pages/page-not-found';
import Payment from './components/dashboard/pages/payment';
import Developer from './components/developer/developer';
import PaymentGateway from './components/payment-gateway/payment-gateway'
import DemoPaymentGateway from './components/payment-gateway/demo'
import Voucher from './components/dashboard/pages/voucher';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/verify' element={<VerifyForm/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/dashboard/payment' element={<Payment/>}/>

      <Route path='/update-profile' element={<UpdateProfile/>}/>
      <Route path='/docs' element={<Developer/>}/>
      <Route path='/payment-gateway' element={<PaymentGateway/>}/>
      <Route path='/demo' element={<DemoPaymentGateway/>}/>
      <Route path='*' element={<PageNotFound/>}/>
      <Route path='/voucher' element={<Voucher/>}/>
      
    </Routes>
  );
}

export default App;
