import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router"
import ContactForm from "../../components/contact-form/contact-form";
import { fetchOneDataAsync } from "../../redux/features/ads/adsSlices";
import './details.css'

export const Details = () => {
    const { id } = useParams()
    const dispatch = useDispatch();
    const data = useSelector((state) => state.ads.detail);
    useEffect(() => {
        dispatch(fetchOneDataAsync(id));
    }, [dispatch])

    return <div className="details">
        <div className="details-title">
            {data.title}
        </div>
        <div className="details-bottom">
            <div className="details-bottom-left">

                <img className="details-img" src={data.photos} alt="" />
                <p className="details-text"><span className="details-key">
                    Описание:  </span>
                    {data.description}</p>
                <p className="details-text"><span className="details-key">
                    Тип:  </span>
                    {data.property_type}</p>
                <p className="details-text"><span className="details-key">
                    Сроки выполнения:   </span>
                    {data.area} дней</p>
                <p className="details-text"><span className="details-key">
                    Цена:   </span>
                    {data.price} руб.</p>
                <p className="details-text"><span className="details-key">
                    Статус:   </span>
                    {data.status}</p>
                <p className="details-text"><span className="details-key">
                    Технологии:   </span>
                    {data.amenities}</p>
                <p className="details-text"><span className="details-key">
                    Адрес: </span>
                    {data.address}</p>
                <p className="details-text"><span className="details-key">
                    Контактные данные:  </span>
                    {data.contact_info}</p>
            </div>
            <div className="details-bottom-right">
                <ContactForm />
            </div>
        </div>

    </div>
}