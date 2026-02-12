import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import { useState } from "react";
import logo from "../assets/images/shopeasy-logo.svg";

function Navbar() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.items);
    const user = useSelector((state) => state.auth.user);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md px-4 md:px-8 py-3">
            <div className="flex justify-between items-center">

                {/* LOGO */}
                <Link to="/" className="flex items-center">
                    <img
                        src={logo}
                        alt="ShopEasy Logo"
                        className="h-12 w-auto object-contain"
                    />
                </Link>

                {/* HAMBURGER (Mobile Only) */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>

                {/* DESKTOP MENU */}
                <ul className="hidden md:flex items-center gap-6 font-medium">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/cart">🛒 ({cart.length})</Link></li>

                    {user ? (
                        <>
                            <li><Link to="/orders">My Orders</Link></li>
                            <li className="text-sm text-gray-600">{user.email}</li>
                            <li
                                className="cursor-pointer text-red-500"
                                onClick={() => dispatch(logout())}
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
                    )}
                </ul>
            </div>

            {/* MOBILE MENU */}
            {isOpen && (
                <ul className="md:hidden flex flex-col gap-4 mt-4 font-medium">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/cart">🛒 ({cart.length})</Link></li>

                    {user ? (
                        <>
                            <li><Link to="/orders">My Orders</Link></li>
                            <li className="text-sm text-gray-600">{user.email}</li>
                            <li
                                className="cursor-pointer text-red-500"
                                onClick={() => dispatch(logout())}
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
                    )}
                </ul>
            )}
        </nav>
    );
}

export default Navbar;

