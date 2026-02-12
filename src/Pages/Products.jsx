import { useState } from "react";
import { products } from "../data/Product.js";
import ProductCard from "../Components/ProductCard.jsx";

function Products() {
    const [category, setCategory] = useState("all");

    const filteredProducts =
        category === "all"
            ? products
            : products.filter((p) => p.category === category);

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">

            <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8">

                {/* SIDEBAR */}
                <aside className="bg-white p-6 rounded-xl shadow-md h-fit lg:sticky lg:top-24">

                    {["all", "men", "women", "kids"].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setCategory(cat)}
                            className={`
                                w-full text-left px-4 py-2 mb-3 rounded-lg transition
                                ${category === cat
                                    ? "bg-yellow-400 text-black font-semibold"
                                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"}
                            `}
                        >
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </button>
                    ))}

                </aside>

                {/* PRODUCTS GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProducts.map((p) => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Products;

