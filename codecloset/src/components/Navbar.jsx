import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // optional icon library (lucide-react is small & works with Vite)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-orange-500 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold tracking-wide"
          onClick={closeMenu}
        >
          Code Closet
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-base">
          <NavLink to="/" className="hover:text-black hover:underline ">
            Dashboard
          </NavLink>
          <NavLink to="/closet" className="hover:text-black hover:underline">
            Closet
          </NavLink>
          <NavLink to="/about" className="hover:text-black hover:underline">
            About
          </NavLink>
          <a
            href="https://github.com/ShardulDhiwar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black hover:underline"
          >
            GitHub
          </a>
        </div>

        {/* Hamburger Button (visible on mobile) */}
        <button
          className="md:hidden text-white hover:text-black focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-orange-600 text-white space-y-4 py-4 mt-3 rounded-lg shadow-lg">
          <NavLink
            to="/closet"
            className="hover:text-black"
            onClick={closeMenu}
          >
            Closet
          </NavLink>
          <NavLink to="/about" className="hover:text-black" onClick={closeMenu}>
            About
          </NavLink>
          <a
            href="https://github.com/ShardulDhiwar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
            onClick={closeMenu}
          >
            GitHub
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
