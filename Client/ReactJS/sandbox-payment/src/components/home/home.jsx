import Welcome from './welcome'
import Header from '../header/header'
import Footer from '../footer/footer'
import CountDownPage from './countdown'
export default function Home(){
    return (<div className="">
        <Header/>
        <Welcome></Welcome>
        <CountDownPage/>
        <Footer/>
    </div>)
}