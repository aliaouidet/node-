import React, { Suspense } from 'react'
import ProductList from '@/components/productList';
import CategoryList from '@/components/categoryList';



async function getProducts() {
    const res = await fetch('http://localhost:3002/api/articles')
    const products = await res.json();
    return products;
}

async function getCategries() {
    const res = await fetch('http://localhost:3002/api/categories')
    const categories = await res.json();
    return categories;
}

const ProductsPage = async () => {
    const products = await getProducts();
    const categorie = await getCategries();

    return (
        <div >
            <Suspense fallback={<p>Loading Categories...</p>}>
                <CategoryList categories={categorie} />
            </Suspense>

            
            <Suspense fallback={<p>Loading Products...</p>}>
                <ProductList products={products} />
            </Suspense>

        </div>

    )
}
export default ProductsPage; 