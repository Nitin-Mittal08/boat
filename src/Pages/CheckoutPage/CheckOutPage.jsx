import { useState } from "react";
import { Header } from "../../components/Header/Header";
import { useCart } from "../../contexts/CartProvider";

import "./CheckOutPage.css";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export function CheckOutPage(){
    const [address, setAddress] = useState([{id:1, name:"Nitin", house:"269",street:"Green Avenue", city:"Bathinda", pincode:"151001", mobile:"12345678790"}]);
    const {cartItems, cartCount,cartSubtotal, setCartItems} = useCart();
    const navigate = useNavigate();
    return(
        <>
         <Header/>
         <div className="checkoutMain">
            <div className="addresses">
                {address.map(item => <div><input type="radio" name="address" id="address" /><p>{item.street}</p><p>{item.house}</p><p>{item.city}</p></div>)}
            </div>
            <div className="orderSummary">
                <h1>Order Summary</h1>
                {cartItems.map(item => <p>{item.title}({item.quantity})</p>)}
                <div className="cartQuantity">Total Quantity:{cartCount}</div>
                <div className="cartQuantity">Total Price:{cartSubtotal}</div>
            </div>
            <div><button onClick={() => {navigate("/"); toast.success("Order Placed"); setCartItems([])} }>Place Order</button></div>

            
         </div>
         <ToastContainer autoClose={2000}/>
        </>
    )
}