import { createContext, useContext, useState } from "react";

export const FilterContext = createContext();

export function FilterProvider({children}){
    const [priceRange, setPriceRange] = useState(10000);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [sortByPrice, setSortByPrice] = useState("");
  
    const priceRangeHandler = (event) => {
      setPriceRange(event.target.value);
    };

    const handleSortByPrice = (e) => {
        setSortByPrice(e.target.value)
    }
  
    const categoryChangeHandler = (event) => {
       let value = event.target.value;
       let isChecked = event.target.checked;
       isChecked ? setSelectedCategory([...selectedCategory, value]):setSelectedCategory(selectedCategory.filter(category => category!==value));
    }

    const clearFilters = () => {
         setSelectedCategory([]);
         setPriceRange(10000)
    }
    return(
        <FilterContext.Provider value={{priceRange, setPriceRange, priceRangeHandler, categoryChangeHandler, selectedCategory, setSelectedCategory,clearFilters, handleSortByPrice, sortByPrice,setSortByPrice}}>{children}</FilterContext.Provider>
    )
}

export const useFilters = () => useContext(FilterContext);