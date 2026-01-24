import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { showToast } from "../redux/toastSlice";

function ProductCard ( { product } )
{
    const dispatch = useDispatch();

    const handleAdd = () =>
    {
        dispatch( addToCart( product ) );
        dispatch( showToast( "Added to cart successfully" ) );
    };

    return (
        <div className="clothing-card">
            {/* Image */ }
            <div className="image-wrapper">
                <img src={ product.image } alt={ product.title } />
            </div>

            {/* Text */ }
            <h3 className="product-title">{ product.title }</h3>
            <p className="product-price">₹{ product.price }</p>

            {/* Button */ }
            <button onClick={ handleAdd }>
                Add to Cart
            </button>
        </div>
    );
}

export default ProductCard;
