import { useState } from "react"
import { useDispatch } from "react-redux"
import { Button } from "../../components/button"
import { Input } from "../../components/input"
import { adsSchema } from "../../helpers/yupSchema"
import { createDataAsync } from "../../redux/features/ads/adsSlices"
import "./add.css"

export const Add = () => {
    const [ads,setAds]=useState({})
    const [dataError, setDataError] = useState([]);
    const dispatch = useDispatch()
    const onAdd=()=>{
        console.log(ads)
        adsSchema.validate(ads).then(() => {
            setDataError([]);
            dispatch(createDataAsync(ads))
        })
            .catch((error) => {
                setDataError(error.errors);
            });
    }
    return <div className="add">
        <div className="add-form">
            <div className="add-form-col">
                <p className="add-title">Создание объявления</p>
                <div className="error">
                {dataError.map((i) => i)}
            </div>
                <label className='contact-form-label'>Заголовок:</label>
                <Input value={ads.title} setValue={e=>{setAds({...ads,title:e.target.value})}}/>
                <label className='contact-form-label'>Описание:</label>
                <Input value={ads.description} setValue={e=>{setAds({...ads,description:e.target.value})}}/>
                <label className='contact-form-label'>Цена:</label>
                <Input value={ads.price} setValue={e=>{setAds({...ads,price:e.target.value})}}/>
                <label className='contact-form-label'>Адрес:</label>
                <Input value={ads.address} setValue={e=>{setAds({...ads,address:e.target.value})}}/>
                <label className='contact-form-label'>Фото:</label>
                <Input value={ads.photos} setValue={e=>{setAds({...ads,photos:e.target.value})}}/>
                <label className='contact-form-label'>Тип:</label>
                <Input value={ads.property_type} setValue={e=>{setAds({...ads,property_type:e.target.value})}}/></div>
            <div className="add-form-col">
                <label className='contact-form-label'>Сроки выполнения:</label>
                <Input value={ads.area} setValue={e=>{setAds({...ads,area:e.target.value})}}/>
                <label className='contact-form-label'>Технологии:</label>
                <Input value={ads.amenities} setValue={e=>{setAds({...ads,amenities:e.target.value})}}/>
                <label className='contact-form-label'>Контактные данные:</label>
                <Input value={ads.contact_info} setValue={e=>{setAds({...ads,contact_info:e.target.value})}}/>
                <label className='contact-form-label'>Статус:</label>
                <Input value={ads.status} setValue={e=>{setAds({...ads,status:e.target.value})}}/>
                <Button name="Добавить" onClick={onAdd}/>
            </div>
        </div>
    </div>
}