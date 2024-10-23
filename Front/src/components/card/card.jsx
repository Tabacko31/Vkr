import { Inset, Card } from "@radix-ui/themes"
import "./card.css"

export const ProductCard = ({title,price,img,address,onClick}) => {
    return <Card size="2" className="product-card" onClick={onClick}>
        <Inset clip="padding-box" side="top" pb="current">
            <img
                src={img}
                alt="Bold typography"
                className="product-card-image"
            />
        </Inset>
        <div className="product-card-title">
        {title}
        </div>
        <div className="product-card-price">{price} руб.</div>
        <div className="product-card-location"> {address} </div>
    </Card>
}