import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import "../index.css";

function Navbar ()
{
    const dispatch = useDispatch();
    const cart = useSelector( state => state.cart.items );
    const user = useSelector( state => state.auth.user );

    return (
        <nav className="navbar">
            <h2>ShopEasy</h2>

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
