import Home from './components/home/home'
import SignIn from './components/auth/sign-in'
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='/sign-in' element={<SignIn/>}/>

    </Routes>
  );
}

export default App;
