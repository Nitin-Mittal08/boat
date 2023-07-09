import {HiOutlineShoppingBag} from 'react-icons/hi';
import {AiOutlineHeart} from 'react-icons/ai';

import "./Header.css";

export function Header() {
  return (
    <>
      <div className="header-main">
        <div className="announcement-bar">
          <div className="announcement-text">
            <p>
              Groove to your favourite tunes with <b>Rockerz 235 V2</b> -- now
              at <b>₹899.</b> 💥 Shop now!
            </p>
          </div>
        </div>
        <div className="nav-bar">
          <div className="nav-left">
            <img
              src="https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small.svg?v=1682421543"
              alt="logo"
            />
          </div>
          <div class="nav-right">
            <div className="search">
              <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/search_558f3ad8-0ef9-4a9b-8576-a396b44aacd8.png?v=1680091847" alt="search-icon"/>
              <input type="text" placeholder="Search" />
            </div>
            <div className="login">
              <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Profile-1.png?v=1663762989" alt="login" />
            </div>
            <div className="cart"><HiOutlineShoppingBag/></div>
            <div className="wishlist"><AiOutlineHeart/></div> 
          </div>
        </div>
      </div>
    </>
  );
}
