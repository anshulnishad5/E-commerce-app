import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty } from "../redux/cartSlice";
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
            <div className="min-h-[60vh] flex items-center justify-center text-xl">
                Your cart is empty
            </div>
        );
    }

    return (
        <div className="bg-gray-50 py-10">
            <div className="max-w-7xl mx-auto px-6">

                {/* Page Title */ }
                <h1 className="text-3xl font-semibold mb-8">Your Cart</h1>

                {/* Layout */ }
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* LEFT: Cart Items */ }
                    <div className="lg:col-span-8 space-y-6">
                        { cart.map( ( item ) => (
                            <div
                                key={ item.id }
                                className="flex items-center gap-6 bg-white p-6 rounded-xl shadow"
                            >
                                <img
                                    src={ item.image }
                                    alt={ item.title }
                                    className="w-24 h-32 object-cover rounded-lg"
                                />

                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold">
                                        { item.title }
                                    </h3>

                                    <div className="flex items-center gap-3 mt-4">
                                        <button
                                            className="w-8 h-8 border rounded text-lg"
                                            onClick={ () => dispatch( decreaseQty( item.id ) ) }
                                        >
                                            −
                                        </button>

                                        <span className="font-medium">{ item.qty }</span>

                                        <button
                                            className="w-8 h-8 border rounded text-lg"
                                            onClick={ () => dispatch( increaseQty( item.id ) ) }
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                <div className="text-lg font-semibold">
                                    ₹{ item.price * item.qty }
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
                                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-3 rounded-lg font-semibold transition"
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
