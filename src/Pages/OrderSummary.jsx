import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

function OrderSummary ()
{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //  Get cart items from Redux
    const cart = useSelector( ( state ) => state.cart.items );

    const total = cart.reduce(
        ( sum, item ) => sum + item.price * item.qty,
        0
    );

    const confirm = async () =>
    {
        const orderData = {
            email: user.email,
            cart,
            total,
        };

        // Save order locally
        const orders = JSON.parse( localStorage.getItem( "orders" ) ) || [];
        orders.push( {
            id: Date.now(),
            items: cart,
            total,
            date: new Date().toLocaleString(),
        } );
        localStorage.setItem( "orders", JSON.stringify( orders ) );

        // 🔹 Send invoice email
        await fetch( "/api/send-invoice", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify( orderData ),
        } );

        dispatch( clearCart() );
        navigate( "/orders" );
    };


    // EMPTY CART UI
    if ( cart.length === 0 )
    {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <h2 className="text-xl font-semibold text-gray-600">
                    Your cart is empty 🛒
                </h2>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto my-10 px-4">
            {/* Card */ }
            <div className="bg-white rounded-xl shadow-lg p-6">

                {/* Title */ }
                <h1 className="text-2xl font-bold mb-6 text-center">
                    Order Summary
                </h1>

                {/* Items */ }
                <div className="space-y-4 mb-6">
                    { cart.map( ( item ) => (
                        <div
                            key={ item.id }
                            className="flex justify-between items-center border-b pb-2"
                        >
                            <div>
                                <p className="font-medium">{ item.title }</p>
                                <p className="text-sm text-gray-500">
                                    Qty: { item.qty } × ₹{ item.price }
                                </p>
                            </div>

                            <p className="font-semibold">
                                ₹{ item.price * item.qty }
                            </p>
                        </div>
                    ) ) }
                </div>

                {/* Total */ }
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-semibold">Total</h2>
                    <h2 className="text-xl font-bold text-green-600">
                        ₹{ total.toFixed( 2 ) }
                    </h2>
                </div>

                {/* Confirm Button */ }
                <button
                    onClick={ confirm }
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg transition"
                >
                    Confirm Order
                </button>
            </div>
        </div>
    );
}

export default OrderSummary;
