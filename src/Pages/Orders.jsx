import { Link } from "react-router-dom";

function Orders ()
{
    const orders = JSON.parse( localStorage.getItem( "orders" ) ) || [];

    return (
        <div className="container">
            <h1 className="text-2xl font-bold mb-6">My Orders</h1>

            { orders.length === 0 && <p>No orders yet</p> }

            { orders.map( ( o ) => (
                <div key={ o.id } className="bg-white p-4 mb-4 rounded shadow">
                    <p className="text-sm text-gray-500">{ o.date }</p>
                    <p className="font-semibold">Total: ₹{ o.total }</p>

                    <Link
                        to={ `/track/${ o.id }` }
                        className="inline-block mt-3 text-blue-600 underline"
                    >
                        Track Order
                    </Link>
                </div>
            ) ) }
        </div>
    );
}

export default Orders;
