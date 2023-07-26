import { ToastContainer } from "react-toastify";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { useWishList } from "../../contexts/WishListProvider";

import "./WishListPage.css";

export function WishListPage() {
    const {wishListItems} = useWishList();
    console.log(wishListItems);
    return(
        <>
         <Header/>
         <h1>Wishlist</h1>
         <div className="wishlistContainer">
         {wishListItems?.map(item => <ProductCard product={item} key={item._id}/>)}
         </div>
         <Footer/>
         <ToastContainer autoClose={2000}/>
        </>
    )
}