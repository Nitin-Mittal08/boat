import {MdClose} from "react-icons/md";
import {BsCartX} from "react-icons/bs";
import { useCart } from "../../contexts/CartProvider";

import "./Cart.css";
export function Cart(){
    const {showCart, setShowCart} = useCart();
    return(
        <>
         <div className="cart-panel">
            <div className="opac-layer"></div>
            <div className="cart-content">gfghbj</div>

         </div>
        </>
    )
}