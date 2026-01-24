import { useParams } from "react-router-dom";

const steps = [
    "Order Placed",
    "Packed",
    "Shipped",
    "Out for Delivery",
    "Delivered",
];

function TrackOrder ()
{
    const { id } = useParams();

    const orders = JSON.parse( localStorage.getItem( "orders" ) ) || [];
    const order = orders.find( o => o.id.toString() === id );

    if ( !order )
    {
        return <h2 className="text-center mt-10">Order not found ❌</h2>;
    }

    // 🔥 Fake status logic (you can later store this in order object)
    const currentStep = 2; // 0–4 (change to test)

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Track Order</h1>

            {/* Order Info */ }
            <div className="bg-white p-4 rounded shadow mb-8">
                <p><strong>Order ID:</strong> { order.id }</p>
                <p><strong>Date:</strong> { order.date }</p>
                <p><strong>Total:</strong> ₹{ order.total }</p>
            </div>

            {/* 🔥 Progress Bar */ }
            <div className="flex items-center justify-between relative">
                {/* Line */ }
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 -z-10"></div>

                { steps.map( ( step, index ) =>
                {
                    const isCompleted = index <= currentStep;
                    const isActive = index === currentStep;

                    return (
                        <div key={ index } className="flex flex-col items-center">
                            {/* Circle */ }
                            <div
                                className={ `w-8 h-8 rounded-full flex items-center justify-center text-white font-bold
                  ${ isCompleted
                                        ? "bg-green-500"
                                        : "bg-gray-400"
                                    }
                  ${ isActive ? "ring-4 ring-yellow-400" : "" }
                `}
                            >
                                { index + 1 }
                            </div>

                            {/* Label */ }
                            <p className="text-sm mt-2 text-center w-24">{ step }</p>
                        </div>
                    );
                } ) }
            </div>
        </div>
    );
}

export default TrackOrder;
