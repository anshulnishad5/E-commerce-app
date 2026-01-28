import { Link } from "react-router-dom";
import { useState } from "react";

function Orders ()
{
    const [ orders, setOrders ] = useState(
        JSON.parse( localStorage.getItem( "orders" ) ) || []
    );

    const deleteOrder = ( id ) =>
    {
        const updatedOrders = orders.filter( ( o ) => o.id !== id );
        setOrders( updatedOrders );
        localStorage.setItem( "orders", JSON.stringify( updatedOrders ) );
    };

    return (
        <div className="container">
            <h1 className="text-2xl font-bold mb-6">My Orders</h1>

            { orders.length === 0 && (
                <p className="text-gray-600">No orders yet</p>
            ) }

            { orders.map( ( o ) => (
                <div
                    key={ o.id }
                    className="bg-white p-4 mb-4 rounded-lg shadow flex flex-col sm:flex-row sm:justify-between sm:items-center"
                >
                    {/* Order Info */ }
                    <div>
                        <p className="text-sm text-gray-500">{ o.date }</p>
                        <p className="font-semibold">Total: ₹{ o.total }</p>

                        <Link
                            to={ `/track/${ o.id }` }
                            className="inline-block mt-2 text-blue-600 underline text-sm"
                        >
                            Track Order
                        </Link>
                    </div>

                    {/* Actions */ }
                    <button
                        onClick={ () => deleteOrder( o.id ) }
                        className="mt-4 sm:mt-0 bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded transition"
                    >
                        Delete
                    </button>
                </div>
            ) ) }
        </div>
    );
}

export default Orders;
