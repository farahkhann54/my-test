import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bg-sky-900 text-white">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-10 py-3">

        {/* Logo */}
        <h1 className="font-bold text-lg sm:text-2xl">
          Welcome
        </h1>

        {/* Links */}
        <ul className="flex gap-4 sm:gap-6 text-xs sm:text-sm">

          <Link to="/" className="hover:text-gray-300 transition">
            <li>Home</li>
          </Link>

          <Link to="/service" className="hover:text-gray-300 transition">
            <li>Service</li>
          </Link>

          <Link to="/about" className="hover:text-gray-300 transition">
            <li>About</li>
          </Link>

          <Link to="/contact" className="hover:text-gray-300 transition">
            <li>Contact</li>
          </Link>

        </ul>

      </div>
    </div>
  );
};

export default Navbar;