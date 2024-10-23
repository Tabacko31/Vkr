import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { ProductCard } from "../../components/card/card"
import { fetchDataAsync } from "../../redux/features/ads/adsSlices"
import './product.css'

export const ProductPage = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const data = useSelector((state) => state.ads.ads);
    useEffect(()=>{
        dispatch(fetchDataAsync());
        console.log(data)

    },[dispatch])

    return <div className="product">
        <div className="product-cards">
            <div className="product-container"> 
            {
                data?.map((ads, key) => <ProductCard onClick={()=>navigate(`/products/${ads.id}`)} key={key} title={ads.title} price={ads.price} img={ads.photos} address={ads.address} />)
            }
            </div>
        </div>
    </div>
}