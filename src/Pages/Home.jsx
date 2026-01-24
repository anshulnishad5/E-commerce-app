import { products } from "../data/Product.js";
import HeroCarousel from "../Components/HeroCarousel.jsx";
import ProductCarousel from "../Components/ProductCarousel.jsx";
import { useState } from "react";

function Home ()
{
    const [ filter, setFilter ] = useState( "all" );

    const filteredProducts =
        filter === "all"
            ? products
            : products.filter(
                ( p ) => p.category?.toLowerCase() === filter
            );

    // split into groups of 5
    const productGroups = [];
    for ( let i = 0; i < filteredProducts.length; i += 5 )
    {
        productGroups.push( filteredProducts.slice( i, i + 5 ) );
    }

    return (
        <div className="bg-gray-100">
            {/* HERO */ }
            <HeroCarousel />

            {/* CATEGORY FILTER */ }
            <section className="flex justify-center mt-8 mb-12">
                <div className="flex gap-3 bg-white px-5 py-3 rounded-full shadow-sm">
                    { [ "all", "men", "women", "kids" ].map( ( cat ) => (
                        <button
                            key={ cat }
                            onClick={ () => setFilter( cat ) }
                            className={ `
                px-5 py-2 rounded-full text-sm font-medium transition
                ${ filter === cat
                                    ? "bg-yellow-400 text-black"
                                    : "text-gray-600 hover:bg-yellow-100"
                                }
            `}
                        >
                            { cat.charAt( 0 ).toUpperCase() + cat.slice( 1 ) }
                        </button>
                    ) ) }
                </div>
            </section>

            {/* PRODUCT CAROUSELS */ }
            { productGroups.map( ( group, index ) => (
                <section
                    key={ index }
                    className="max-w-325 mx-auto px-6 mb-16"
                >
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">
                            { index === 0 ? "Trending Products" : "More Products" }
                        </h2>

                        <span className="text-sm text-gray-500 cursor-pointer hover:text-black">
                            View All →
                        </span>
                    </div>

                    <ProductCarousel products={ group } />
                </section>
            ) ) }
        </div>
    );
}

export default Home;
