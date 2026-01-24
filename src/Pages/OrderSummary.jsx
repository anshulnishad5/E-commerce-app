import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

function OrderSummary ()
{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // 🔥 Get cart items from Redux
    const cart = useSelector( ( state ) => state.cart.items );

    const total = cart.reduce(
        ( sum, item ) => sum + item.price * item.qty,
        0
    );

    const confirm = () =>
    {
        const orders = JSON.parse( localStorage.getItem( "orders" ) ) || [];

        orders.push( {
            id: Date.now(),
            items: cart,
            total,
            date: new Date().toLocaleString(),
        } );

        localStorage.setItem( "orders", JSON.stringify( orders ) );

        // 🔥 Clear cart using Redux
        dispatch( clearCart() );

        navigate( "/orders" );
    };

    if ( cart.length === 0 )
    {
        return (
            <div className="container">
                <h2>Your cart is empty</h2>
            </div>
        );
    }

    return (
        <div className="container">
            <h1>Order Summary</h1>

            { cart.map( ( item ) => (
                <p key={ item.id }>
                    { item.title } – { item.qty } × ₹{ item.price }
                </p>
            ) ) }

            <h2>Total: ₹{ total.toFixed( 2 ) }</h2>

            <button onClick={ confirm }>
                Confirm Order
            </button>
        </div>
    );
}

export default OrderSummary;
