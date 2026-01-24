import { useState } from "react";
import { products } from "../data/Product.js";
import ProductCard from "../Components/ProductCard.jsx";
import "../index.css";

function Products ()
{
    const [ category, setCategory ] = useState( "all" );

    const filteredProducts =
        category === "all"
            ? products
            : products.filter( p => p.category === category );

    return (
        <div className="container">
            <div className="products-layout">

                {/* ✅ SIDEBAR */ }
                <aside className="sidebar">
                    <button
                        className={ category === "all" ? "active" : "" }
                        onClick={ () => setCategory( "all" ) }
                    >
                        All
                    </button>

                    <button
                        className={ category === "men" ? "active" : "" }
                        onClick={ () => setCategory( "men" ) }
                    >
                        Men
                    </button>

                    <button
                        className={ category === "women" ? "active" : "" }
                        onClick={ () => setCategory( "women" ) }
                    >
                        Women
                    </button>

                    <button
                        className={ category === "kids" ? "active" : "" }
                        onClick={ () => setCategory( "kids" ) }
                    >
                        Kids
                    </button>

                </aside>

                {/* ✅ PRODUCTS GRID */ }
                <div className="grid">
                    { filteredProducts.map( p => (
                        <ProductCard key={ p.id } product={ p } />
                    ) ) }
                </div>

            </div>
        </div>
    );
}

export default Products;
