import { checkIsSelected } from "./helpers";
import ProductCard from "./ProductCard";
import { Product } from "./types";

type Props = {
    products: Product[];
    selectedProducts: Product[];
    OnSelectProduct: (product: Product) => void;


}

function ProductList({ products, selectedProducts, OnSelectProduct }: Props) {
    return (
        <div className="orders-list-container"> 
            <div className="orders-list-items">
                {products.map(product => (
                  <ProductCard 
                  key={product.id}
                  product={product} 
                  OnSelectProduct={OnSelectProduct}
                  isSelected={checkIsSelected(selectedProducts, product)}
                  />  
                ))}
                
            </div>
        </div>
    )
}

export default ProductList;