import { createContext,useState } from "react"

export const WishListContext = createContext();

export function WishListProvider({children}){
    const[wishListItems, setWishListItems] = useState([]);
    const [wishListCount, setWishListCount] = useState(0);

    const handleAddToWishList = (product) => {
         setWishListItems([...wishListItems, product]);
    }
    return(
        <>
         
        </>
    )
}