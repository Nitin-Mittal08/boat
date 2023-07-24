import {BsHeart} from 'react-icons/bs';

import "./ProductCard.css";

export function ProductCard({product}){
    return(
        <>
         <div className="productMain">
            <img src={product.img} alt={product.title}/>
            <div className="productDetailsMain">
                <div className="desc-top">
                    <div className="rating">⭐️{product.rating}</div>
                    <div className="wishlist"><button><BsHeart/></button></div>
                </div>
                <div className="productDetails">
                    <div className="name">{product.title}</div>
                    <div className="price">
                        <div className="new-price">₹{product.price}</div>
                        <div className="old-price">₹{product.oldPrice}</div>
                        <div className="discount">{parseInt((product.oldPrice - product.price)*100/product.oldPrice)}% off</div>
                    </div>
                </div>
                <hr/>
                <div className="features">
                    {product.features.map(feature => <div className="featureCell">{feature}</div>)}
                </div>
                <div className="button-container">
                <button>Add to Cart</button>
                </div>
            </div>
         </div>
        </>
    )
}