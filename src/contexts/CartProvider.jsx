import { createContext, useContext, useState } from "react"

export const CartContext = createContext();

export function CartProvider({children}){
    const [showCart, setShowCart] = useState(false);
    return(
        <>
         <CartContext.Provider value={{showCart,setShowCart}}>{children}</CartContext.Provider>
        </>
    )
}

export const useCart = () => useContext(CartContext);