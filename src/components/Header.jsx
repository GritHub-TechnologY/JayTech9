import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import DarkModeToggle from './DarkModeToggle';
import logo from "@/assets/images/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-10 ">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className='flex '>
        <div className="text-2xl   font-bold text-teal pt-1 pr-2">Jaytech9</div>
        <img
                src={logo}
                alt="JayTech9"
                className="h-8 w-8 md:h-12 md:w-12 object-contain pt-0"
                size= {'24'}
              />
              
        </div>
      
        
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="hover:text-green">Home</a>
          <a href="/about" className="hover:text-green">About</a>
          <a href="/services" className="hover:text-green">Services</a>
          
          <a href="/blog" className="hover:text-green">
            Blogs
          </a>
          <a href="/portfolio" className="hover:text-green">
           Portfolio
          </a>
          <a href="/contact" className="bg-green text-white px-4 py-2 rounded-lg hover:bg-teal">
            Contact
          </a>
          <DarkModeToggle />
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-lg">
          <a href="/" className="block py-2 hover:text-green">Home</a>
          <a href="/about" className="block py-2 hover:text-green">About</a>
          <a href="/services" className="block py-2 hover:text-green">Services</a>
          <a href="/blog" className="block py-2 hover:text-green">
            Blogs
          </a>
          <a href="/portfolio" className="block py-2 hover:text-green">
           Portfolio
          </a>
          <a href="/contact" className="block py-2 text-green font-bold">Contact</a>
        </div>
      )}
    </header>
  );
}