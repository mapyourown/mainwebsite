import { useState } from "react";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="items-center text-white font-semibold bg-gray-500 px-8 py-4 shadow">
      {/* Logo Section */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex gap-2">
          <img
              src="/images/maplogo.png"
              alt="mapyourown Logo"
              className="w-50 h-11"
            />
         </div>

      <div className="hidden md:flex space-x-6 text-white-700">
            <a href="#services" className="hover:text-blue-200">Services</a>
            <a href="#projects" className="hover:text-blue-200">Projects</a>
            <a href="#tech" className="hover:text-blue-200">Tech Stack</a>
            <a href="#contact" className="hover:text-blue-200">Contact</a>
      </div>

      {/* Mobile Button */}
        <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
      </div>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-3 text-red-50">

          <a
            href="#services"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-600"
          >
            Services
          </a>

          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-600"
          >
            Projects
          </a>

          <a
            href="#tech"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-600"
          >
            Tech Stack
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-600"
          >
            Contact
          </a>

        </div>
      )}


    </nav>

  );
}