
import { Link } from "react-router-dom";
import '../styles/Navbar.css';
import logo from '../assets/logo-header.png';
import React, { useState } from "react";



function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="CYRC logo" />
            </div>
            <div className="nav-section">
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li 
                        className="dropdown-container"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        <span className="dropdown-trigger">Services</span>
                        {isDropdownOpen && (
                            <ul className="dropdown-menu">
                                <li><Link to="/programs">Programs Offered</Link></li>
                                <li><Link to="/apply">Apply</Link></li>
                                <Link to="/fees/carpentry">Carpentry & Joinery Fees</Link>
                                <Link to="/fees/computer">Computer Fees</Link>
                                <Link to="/fees/bricklaying">Bricklaying & Plastering Fees</Link>
                                <Link to="/fees/tailoring">Design Cutting & Tailoring Fees</Link>
                            </ul>
                        )}
                    </li>
                    <li><Link to="/aboutUs">About Us</Link></li>
                    <li><Link to="/contact">Contacts</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;