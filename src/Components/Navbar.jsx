import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import logo from "../assets/images/shopeasy-logo.svg";

function Navbar ()
{
    const dispatch = useDispatch();
    const cart = useSelector( ( state ) => state.cart.items );
    const user = useSelector( ( state ) => state.auth.user );

    return (
        <nav className="navbar">
            {/* LEFT: LOGO */ }
            <Link to="/" className="flex items-center h-full">
                <img
                    src={ logo }
                    alt="ShopEasy Logo"
                    className="h-34 w-auto object-contain transition-transform duration-300 hover:scale-105"
                />
            </Link>


            {/* RIGHT: LINKS */ }
            <ul className="flex items-center gap-4">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/cart">🛒 Cart ({ cart.length })</Link></li>

                { user ? (
                    <>
                        <li><Link to="/orders">My Orders</Link></li>
                        <li className="text-sm opacity-80">{ user.email }</li>
                        <li
                            className="logout"
                            onClick={ () => dispatch( logout() ) }
                        >
                            Logout
                        </li>
                    </>
                ) : (
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </>
                ) }
            </ul>
        </nav>
    );
}

export default Navbar;
