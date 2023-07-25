import { Link } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { useProduct } from "../../contexts/ProductProvider";
import { useSearch } from "../../contexts/SearchProvider";

import "./ProductListingPage.css";
export function ProductListingPage(){
    const {productData} = useProduct();
    const {searchInput} = useSearch();

    const displayProducts = searchInput.length>0?productData.filter(product => product.title.toLowerCase().includes(searchInput.toLowerCase())|| product.categoryName.toLowerCase().includes(searchInput.toLowerCase())||product.desc.toLowerCase().includes(searchInput.toLowerCase())):productData;
    return(
        <>
         <Header/>
         <div className="productListingMain">
            <div className="productListingContainer">
            {displayProducts.map(product => <Link to={`/product/${product._id}` }key={product._id}><ProductCard product={product}/></Link>)}
            </div>
         </div>
        </>
    )
}