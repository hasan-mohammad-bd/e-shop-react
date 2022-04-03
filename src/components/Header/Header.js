import "./Header.css";

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-slate-500">
      <div className="container mx-auto flex py-5 justify-between">
          <img src="../../images/Logo.svg" alt="" />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/order-review">Order Review</Link>
          <Link to="/manage-inventory">Manage Inventory</Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
