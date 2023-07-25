import { MdClose } from "react-icons/md";
import prod from "../../../Assests/Images/WE1.webp";

import "./CartItem.css";

export function CartItem() {
  return (
    <>
      <div className="cart-products">
        <div className="cart-product">
          <div className="img-container">
            <img src={prod} alt="" />
          </div>
          <div className="prod-details">
            <div className="prod-top">
              <span className="name">Product name</span>
              <MdClose className="close-btn" />
            </div>
            <div className="quantity-btns">
              <span>+</span>
              <span>5</span>
              <span>-</span>
            </div>
            <div className="text">
              <span>&#8377;3244</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
