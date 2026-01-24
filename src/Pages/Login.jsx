import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

function Login ()
{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ email, setEmail ] = useState( "" );
    const [ password, setPassword ] = useState( "" );
    const [ error, setError ] = useState( "" );

    const submit = ( e ) =>
    {
        e.preventDefault();

        // simple validation (you can improve later)
        if ( !email || !password )
        {
            setError( "Please enter email and password" );
            return;
        }

        // 🔥 Redux login
        dispatch( login( { email } ) );
        navigate( "/" );
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">

                {/* Title */ }
                <h1 className="text-2xl font-bold text-center mb-2">
                    Welcome Back
                </h1>
                <p className="text-center text-gray-500 mb-6">
                    Login to your account
                </p>

                {/* Error */ }
                { error && (
                    <div className="bg-red-100 text-red-600 text-sm p-3 rounded mb-4 text-center">
                        { error }
                    </div>
                ) }

                {/* Form */ }
                <form onSubmit={ submit } className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        value={ email }
                        onChange={ ( e ) => setEmail( e.target.value ) }
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        required
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        value={ password }
                        onChange={ ( e ) => setPassword( e.target.value ) }
                    />

                    <button
                        type="submit"
                        className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-lg transition"
                    >
                        Login
                    </button>
                </form>

                {/* Footer */ }
                <p className="text-center text-sm text-gray-600 mt-6">
                    Don’t have an account?{ " " }
                    <span
                        onClick={ () => navigate( "/register" ) }
                        className="text-blue-600 cursor-pointer font-medium hover:underline"
                    >
                        Register
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Login;
