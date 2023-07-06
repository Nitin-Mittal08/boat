import "./Header.css";

export function Header(){
    return(
       <>
        <div className="header-main">
            <div className="announcement-bar">
                <div className="announcement-text">
                    <p>
                        Groove to your favourite tunes with <b>Rockerz 235 V2</b> -- now at <b>₹899.</b> 💥 Shop now!
                    </p>
                </div>
            </div>
            <div className="nav-bar">
                <div className="nav-left">
                    <img src="https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small.svg?v=1682421543" alt="logo"/>
                </div>
                <div class="nav-right">
                    <div className="search"><input type="text" placeholder="Search"/></div>
                    <div>Login(icon)</div>
                    <div>Cart(icon)</div>
                    <div>Wishlist(icon)</div>
                </div>
            </div>
        </div>
       </>
    )
}