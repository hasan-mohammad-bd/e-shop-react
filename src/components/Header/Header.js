import './Header.css';

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="img-holder">
                <img src="../../images/Logo.svg" alt="" />
            </div>
            <nav>
                <Link to="/" >Home</Link>
                <Link to ="/orders">Orders</Link>
                <Link to ="/order-review">Order Review</Link>
                <Link to ="/manage-inventory">Manage Inventory</Link>
            </nav>
        </div>
    );
};

export default Header;