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
import { InformationTransaction } from './components/auth/information-transaction';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='/sign-in' element={<SignIn/>}/>

      <Route path='/information-transaction' element={<InformationTransaction/>}/>

      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/verify' element={<VerifyForm/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/dashboard/payment' element={<Payment/>}/>

      <Route path='/update-profile' element={<UpdateProfile/>}/>
      <Route path='/dev' element={<Developer/>}/>

      
      <Route path='*' element={<PageNotFound/>}/>
      
    </Routes>
  );
}

export default App;
