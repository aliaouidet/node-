import React from 'react';
import Link from 'next/link';
const ProductList = async ({ products }) => {

    return (
        <section style={{ backgroundColor: "#eee" }}>
            <div className="container py-2">
                <div className="row">
                    {products?.map((product) => (
                        <div
                            key={product?.id}
                            className="col-md-12 col-lg-3 mb-4 mb-lg-0 pt-4 "
                        >
                            <div className="card h-100">
                                <img
                                    src={product?.imagearticle}
                                    className="card-img-top p-5"
                                    height={320}
                                    width={100}
                                    alt={product.libelle}

                                />
                                <div className="card-body">

                                    <div className="d-flex justify-content-between mb-3">
                                        <Link href={`/products/${product?.id}`}>
                                            <h5 className="mb-0">{product?.libelle}</h5>
                                        </Link>
                                        <h5 className="text-dark mb-0">dt{product?.prix}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default ProductList; 