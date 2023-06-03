import React from "react";
import CartProductList from '@/components/CartProductList';
async function getProducts() {
    //
    const res = await fetch('http://localhost:3002/api/articles')
    const products = await res.json();
    return products;
}
const CartProductsPage = async () => {
    const products = await getProducts();
    
    return (
        <center>
            <div className="col-md-12 col-lg-12 mb-4 mb-lg-0 pt-4 ">
                <CartProductList products={products} />
            </div>
        </center>
        
    )
}
export default CartProductsPage; 
