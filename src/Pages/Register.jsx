import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

function Register ()
{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [ error, setError ] = useState( "" );

    const submit = ( e ) =>
    {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const regex = /^(?=.*\d).{6,}$/;
        if ( !regex.test( password ) )
        {
            setError( "Password must be at least 6 characters and contain a number" );
            return;
        }

        dispatch( register( { email } ) );
        navigate( "/" );
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">

                <h1 className="text-2xl font-bold text-center mb-2">
                    Create Account
                </h1>
                <p className="text-center text-gray-500 mb-6">
                    Join ShopEasy today
                </p>

                { error && (
                    <div className="bg-red-100 text-red-600 text-sm p-3 rounded mb-4 text-center">
                        { error }
                    </div>
                ) }

                <form onSubmit={ submit } className="space-y-4">
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        required
                        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400"
                    />

                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        required
                        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400"
                    />

                    <button
                        type="submit"
                        className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-lg"
                    >
                        Create Account
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Already have an account?{ " " }
                    <span
                        onClick={ () => navigate( "/login" ) }
                        className="text-blue-600 cursor-pointer hover:underline"
                    >
                        Login
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Register;
