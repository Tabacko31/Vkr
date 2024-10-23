import House from '../../assets/main.png'
import { Button } from '../../components/button'
import Modal from '../../components/dialog/dialog'

import { Input } from '../../components/input'
import "./main.css"

export const MainPage = () => {
    return <div className="main">
        <div className="main-center">
            <div className="main-left">
                <div className="main-title">
                Freelans World
                </div>
                <div className="main-description">
                Мы предоставляем полный комплекс услуг по нахождению работы для вас.
                </div>
                <div className="main-search-block">
                    <Input placeholder={'Search of location'}/>
                    <Modal/>
                    <Button name='Найти'/>
                </div>
            </div>
            <div className="main-right">
                <img src={House} alt="" />
            </div>
        </div>
    </div>
}