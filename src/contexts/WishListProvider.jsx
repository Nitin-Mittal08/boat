import { createContext,useContext,useState } from "react"

export const WishListContext = createContext();

export function WishListProvider({children}){
    const[wishListItems, setWishListItems] = useState([]);

    const handleAddToWishList = (product) => {
        let items = [...wishListItems];
        let index = items.findIndex(item => item._id===product._id);
        if(index===-1){
            items = [...wishListItems, product];
        }
        else{
            items = wishListItems.filter(item => item._id!==product._id);
        }

        setWishListItems([...items]);
         
    }
    
    return(
        <>
         <WishListContext.Provider value={{handleAddToWishList,wishListItems, setWishListItems}}>{children}</WishListContext.Provider>
        </>
    )
}

export const useWishList = () => useContext(WishListContext);