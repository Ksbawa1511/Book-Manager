import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const cartItems = useSelector((store) => store.cart.items);

    const handleBurgerClick = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <>
            <div className="header">
                <div className="logo">
                    <h1>Book Manager</h1>
                </div>
                <div className="burger-menu" onClick={handleBurgerClick}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <nav className={`nav-menu${menuOpen ? " open" : ""}`}>
                    <ul>
                        <Link to="/" onClick={() => setMenuOpen(false)}><li>Home</li></Link>
                        <Link to="/about" onClick={() => setMenuOpen(false)}><li>About</li></Link>
                        <Link to="/contact" onClick={() => setMenuOpen(false)}><li>Contact</li></Link>
                        <Link to="/cart" onClick={() => setMenuOpen(false)}>
                          <li className="nav-cart">
                            <span className="nav-cart-icon" aria-label="cart">
                              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f1c40f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61l1.38-7.39H6"/></svg>
                            </span>
                            Cart
                            <span className="nav-cart-badge">{cartItems.length}</span>
                          </li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </>
    );
}
export default Header;