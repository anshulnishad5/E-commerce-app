import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import "../index.css";
import logo from "../assets/images/shopeasy_logo_orange_transparent.svg";

function Navbar ()
{
    const dispatch = useDispatch();
    const cart = useSelector( state => state.cart.items );
    const user = useSelector( state => state.auth.user );

    return (
        <nav className="navbar">
            {/* LEFT: Logo + Brand */ }
            {/* LEFT: Logo + Brand */ }
            <div className="flex items-center gap-2 bg-slate-850 px-3 py-2 rounded-md">
                <img
                    src={ logo }
                    alt="ShopEasy Logo"
                    className="w-8 h-8 object-contain"
                />

                <h1 className="text-xl font-bold text-white leading-none">
                    ShopEasy
                </h1>
            </div>






            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/cart">🛒Cart ({ cart.length })</Link></li>

                { user ? (
                    <>
                        <li><Link to="/orders">My Orders</Link></li>
                        <li>{ user.email }</li>
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
