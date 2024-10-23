import { Button } from "../button"
import Logo from '../../assets/logo/logo.svg'
import './header.css'
import { useNavigate } from "react-router"
import { useSelector } from "react-redux"

export const Header = () => {
    const nav=useNavigate()
    const data = useSelector((state) => state.user.token);
   console.log(localStorage.getItem("token"))
    console.log(data)
    return <header className="header">
        <div className="header-center">
            <div className="header-left">
                <div className="header-logo" onClick={()=>{nav('/')}}>
                    <img src={Logo} alt="logo" />
                </div>
                <ul className="header-items">
                    <li className="header-item"  onClick={()=>{nav('/products')}}>Активные обьявления</li>
                    <li className="header-item" onClick={()=>{nav('/products')}}>Обьявления</li>
                    <li className="header-item">Офисы</li>
                    {/* <li className="header-item" onClick={()=>{nav('/add')}}>Добавить объявление</li> */}
                    <li className="header-item">О нас</li>
                    <li className="header-item">Наша команда</li>
                </ul>
            </div>
            {localStorage.getItem("token")?.length>0?
            <Button name="Добавить объявление" onClick={()=>nav('/add')} />:
            <Button name="Войти" onClick={()=>nav('/login')} />
            }
        </div>
    </header>
}