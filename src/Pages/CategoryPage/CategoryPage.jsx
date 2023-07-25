import { useParams, Link } from "react-router-dom";

import { Header } from "../../components/Header/Header";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import "./CategoryPage.css"  
import { useProduct } from "../../contexts/ProductProvider";
import { Footer } from "../../components/Footer/Footer";
import { Filters } from "../../components/Filters/Filters";
import { useState } from "react";
export function CategoryPage() {
    const {productData} = useProduct();
    const {categoryName} = useParams();
    const [showFilters, setShowFilters] = useState(false);
    const displayData = productData.filter(product => product.categoryName===categoryName);
  return (
    <>
      <Header />
      <div className="categoryMain">
        <div className="categoryName">
          <h2>{categoryName}</h2>
        </div>
        <div className="productListingContainerCategory">
          {showFilters && <Filters/>}
            <div className="categoryBtns">
                <button onClick={() => setShowFilters(true)}>Filter By</button>
                <button>Sort By</button>
            </div>
            <div className="productListing">
                {displayData.map(product =><Link to={`/product/${product._id}`}> <ProductCard product={product} key={product._id}/></Link>)}
            </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
