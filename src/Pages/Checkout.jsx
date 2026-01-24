import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Checkout ()
{
    const navigate = useNavigate();

    const [ payment, setPayment ] = useState( "card" );
    const [ success, setSuccess ] = useState( false );

    const submit = ( e ) =>
    {
        e.preventDefault();

        // simulate payment success
        setSuccess( true );

        setTimeout( () =>
        {
            navigate( "/order-summary" );
        }, 2000 );
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6">
                { !success ? (
                    <>
                        <h1 className="text-2xl font-bold mb-6 text-gray-800">
                            Checkout
                        </h1>

                        <form onSubmit={ submit } className="space-y-4">
                            {/* Name */ }
                            <input
                                type="text"
                                placeholder="Full Name"
                                required
                                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />

                            {/* Address */ }
                            <input
                                type="text"
                                placeholder="Address"
                                required
                                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />

                            {/* PAYMENT METHOD */ }
                            <div>
                                <p className="font-medium mb-2 text-gray-700">
                                    Payment Method
                                </p>

                                <div className="flex gap-4">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="card"
                                            checked={ payment === "card" }
                                            onChange={ ( e ) => setPayment( e.target.value ) }
                                        />
                                        Card
                                    </label>

                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="upi"
                                            checked={ payment === "upi" }
                                            onChange={ ( e ) => setPayment( e.target.value ) }
                                        />
                                        UPI
                                    </label>

                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="cod"
                                            checked={ payment === "cod" }
                                            onChange={ ( e ) => setPayment( e.target.value ) }
                                        />
                                        COD
                                    </label>
                                </div>
                            </div>

                            {/* Card Number only if Card selected */ }
                            { payment === "card" && (
                                <input
                                    type="text"
                                    placeholder="Card Number"
                                    required
                                    className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                />
                            ) }

                            {/* PLACE ORDER */ }
                            <button
                                type="submit"
                                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-md transition"
                            >
                                Place Order
                            </button>
                        </form>
                    </>
                ) : (
                    /* SUCCESS UI */
                    <div className="text-center py-10">
                        <div className="text-5xl mb-4">✅</div>
                        <h2 className="text-2xl font-bold text-green-600 mb-2">
                            Payment Successful!
                        </h2>
                        <p className="text-gray-600">
                            Your order has been placed successfully
                        </p>
                        <p className="text-sm text-gray-400 mt-2">
                            Redirecting to order summary...
                        </p>
                    </div>
                ) }
            </div>
        </div>
    );
}

export default Checkout;
