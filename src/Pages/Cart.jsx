import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, deleteItem } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

function Cart ()
{
    const cart = useSelector( ( state ) => state.cart.items );
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const total = cart.reduce(
        ( sum, item ) => sum + item.price * item.qty,
        0
    );

    if ( cart.length === 0 )
    {
        return (
            <div className="min-h-[60vh] flex items-center justify-center text-xl font-medium">
                Your cart is empty
            </div>
        );
    }

    return (
        <div className="bg-gray-50 py-10">
            <div className="max-w-7xl mx-auto px-4">

                {/* Page Title */ }
                <h1 className="text-3xl font-semibold mb-8">Your Cart</h1>

                {/* Layout */ }
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* LEFT: Cart Items */ }
                    <div className="lg:col-span-8 space-y-6">
                        { cart.map( ( item ) => (
                            <div
                                key={ item.id }
                                className="flex flex-col sm:flex-row items-center gap-6 bg-white p-6 rounded-xl shadow"
                            >
                                {/* Image */ }
                                <img
                                    src={ item.image }
                                    alt={ item.title }
                                    className="w-24 h-32 object-cover rounded-lg"
                                />

                                {/* Details */ }
                                <div className="flex-1 w-full">
                                    <h3 className="text-lg font-semibold mb-2">
                                        { item.title }
                                    </h3>

                                    {/* Quantity */ }
                                    <div className="flex items-center gap-3">
                                        <button
                                            className="w-8 h-8 border rounded text-lg hover:bg-gray-100"
                                            onClick={ () => dispatch( decreaseQty( item.id ) ) }
                                        >
                                            −
                                        </button>

                                        <span className="font-medium">{ item.qty }</span>

                                        <button
                                            className="w-8 h-8 border rounded text-lg hover:bg-gray-100"
                                            onClick={ () => dispatch( increaseQty( item.id ) ) }
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                {/* Price + Delete */ }
                                <div className="flex flex-col items-end gap-3">
                                    <div className="text-lg font-semibold">
                                        ₹{ item.price * item.qty }
                                    </div>

                                    <button
                                        onClick={ () => dispatch( deleteItem( item.id ) ) }
                                        className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-1.5 rounded transition"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ) ) }
                    </div>

                    {/* RIGHT: Order Summary */ }
                    <div className="lg:col-span-4">
                        <div className="bg-white p-6 rounded-xl shadow sticky top-28">
                            <h2 className="text-xl font-semibold mb-4">
                                Order Summary
                            </h2>

                            <div className="flex justify-between text-lg font-medium mb-6">
                                <span>Total</span>
                                <span>₹{ total }</span>
                            </div>

                            <button
                                onClick={ () => navigate( "/checkout" ) }
                                className="w-full 
                                bg-yellow-400 hover:bg-yellow-500 
                                text-black 
                                py-4 px-6            
                                rounded-lg 
                                font-semibold 
                                text-base            
                                transition 
                                flex items-center justify-center"

                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Cart;
