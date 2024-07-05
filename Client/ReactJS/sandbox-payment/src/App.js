import Home from './components/home/home'
import SignIn from './components/auth/sign-in'
import SignUp from './components/auth/sign-up'
import VerifyForm from './components/auth/verify-form';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/verify' element={<VerifyForm/>}/>

    </Routes>
  );
}

export default App;
