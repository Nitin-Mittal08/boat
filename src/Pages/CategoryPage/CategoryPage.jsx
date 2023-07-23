import { useParams } from "react-router-dom";

import { Header } from "../../components/Header/Header";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import "./CategoryPage.css"  
import { useProduct } from "../../contexts/ProductProvider";
export function CategoryPage() {
    const {productData} = useProduct();
    const {categoryName} = useParams();
    const displayData = productData.filter(product => product.categoryName===categoryName);
    console.log(categoryName);
  return (
    <>
      <Header />
      <div className="categoryMain">
        <div className="categoryName">
          <h2>{categoryName}</h2>
        </div>
        <div className="productListingContainer">
            <div className="categoryBtns">
                <button>Filter By</button>
                <button>Sort By</button>
            </div>
            <div className="productListing">
                {displayData.map(product => <ProductCard product={product}/>)}
            </div>
        </div>
      </div>
    </>
  );
}
