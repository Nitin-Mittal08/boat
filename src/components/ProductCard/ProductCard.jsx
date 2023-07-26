import {BsHeart} from 'react-icons/bs';

import "./ProductCard.css";
import { useCart } from '../../contexts/CartProvider';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export function ProductCard({product}){
    const {handleAddToCart} = useCart();
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
                <button onClick={() => {handleAddToCart(product, 1); toast.success("Item Added to Cart!")}} >Add To Cart</button>
                </div>
            </div>
         </div>
        <ToastContainer autoClose={2000}/>
        </>
    )
}