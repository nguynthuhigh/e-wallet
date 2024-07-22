import Welcome from './welcome'
import Header from '../header/header'
import Footer from '../footer/footer'
export default function Home(){
    return (<div className="">
        <Header/>
        <Welcome></Welcome>
        <div>Đa dạng tiền tệ</div>
        <Footer/>
    </div>)
}