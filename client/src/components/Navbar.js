import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="blue-grey">
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">PIZZA N CHILL</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to ="/order" className={window.location.pathname === "/order"}>
                            ORDER
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;