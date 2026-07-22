import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "home",
    "about",
    "skills",
    "projects",
    "backend",
    "journey",
    "contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="container mx-auto px-6">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}

          <h1 className="text-xl sm:text-2xl font-bold">
            &lt; Anupam.<span className="text-blue-300">dev</span> /&gt;
          </h1>

          {/* Desktop Menu */}

          <div className="hidden md:flex gap-8">
            {navLinks.map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer capitalize hover:text-purple-400 transition"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* Mobile Menu */}

        {menuOpen && (
          <div className="md:hidden pb-6">

            {navLinks.map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setMenuOpen(false)}
                className="
                  block
                  py-3
                  capitalize
                  cursor-pointer
                  hover:text-purple-400
                  transition
                "
              >
                {item}
              </Link>
            ))}

          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;