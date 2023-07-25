import { createContext } from "react"

export const SortContext = createContext();


export function SortProvider({children}){

    const sortbyLowToHigh = (products, setProducts,property) => {
        setProducts([...products].sort((a,b) => a[property] - b[property]));
    }

    const sortbyHighToLow = (products, setProducts, property) =>{
        setProducts([...products].sort((a,b) => b[property] - a[property]));
    }
    return(
       <SortContext.Provider value={{sortbyLowToHigh, sortbyHighToLow}}>{children}</SortContext.Provider>
    )
}