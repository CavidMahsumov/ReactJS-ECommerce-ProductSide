import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiShoppingBag } from 'react-icons/bi'

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <header>
      <nav className="container">
        <span className="logo">WebStore</span>
        <div className="navlinks">
          <Link className="navlink" to="/">
            Home
          </Link>
          <Link className="cartCount" to="/cart">
            <BiShoppingBag className="icon" />
            <span>{items.length}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;