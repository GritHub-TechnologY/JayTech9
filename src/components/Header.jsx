import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import DarkModeToggle from "./DarkModeToggle";
import logo from "@/assets/images/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-20">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          
          {/* <span className="text-2xl font-bold text-teal ml-2 pb-4">JayTech9</span> */}
          <img src={logo} alt="JayTech9" className="h-12 w-38 md:h-12 md:w-38 "/>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="hover:text-green">
            Home
          </Link>
          <Link to="/about" className="hover:text-green">
            About
          </Link>
          <Link to="/services" className="hover:text-green">
            Services
          </Link>
          <Link to="/blog" className="hover:text-green">
            Blogs
          </Link>
          <Link to="/portfolio" className="hover:text-green">
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="bg-green text-white px-4 py-2 rounded-lg hover:bg-teal"
          >
            Contact
          </Link>
          <DarkModeToggle />
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-lg space-y-2">
          {["/", "/about", "/services", "/blog", "/portfolio", "/contact"].map(
            (path, i) => (
              <Link
                key={i}
                to={path}
                className="block py-2 hover:text-green"
                onClick={() => setIsOpen(false)}
              >
                {path === "/"
                  ? "Home"
                  : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
}
