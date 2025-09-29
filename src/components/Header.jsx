import { Link, useNavigate, NavLink } from "react-router-dom";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "../utils/AuthContext";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const { user, logoutUser } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = "font-bold transition-colors duration-300";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full bg-[#FFF7F2] shadow-md sticky top-0 z-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-10 h-20">
        {/* Logo */}
        <Link to={"/"}>
          <img src="../../public/logo1.png" alt="logo" className="w-20 h-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `${linkStyle} text-[#004F35]`
                : `${linkStyle} text-[#A05525] hover:text-[#004F35]`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive
                ? `${linkStyle} text-[#004F35]`
                : `${linkStyle} text-[#A05525] hover:text-[#004F35]`
            }
          >
            Courses
          </NavLink>

          <NavLink
            to="/faq"
            className={({ isActive }) =>
              isActive
                ? `${linkStyle} text-[#004F35]`
                : `${linkStyle} text-[#A05525] hover:text-[#004F35]`
            }
          >
            FAQ
          </NavLink>

          {user ? (
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? `${linkStyle} text-[#004F35]`
                  : `${linkStyle} text-[#A05525] hover:text-[#004F35]`
              }
            >
              Profile
            </NavLink>
          ) : (
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? `${linkStyle} text-[#004F35]`
                  : `${linkStyle} text-[#A05525] hover:text-[#004F35]`
              }
            >
              Register
            </NavLink>
          )}

          {user ? (
            <button
              onClick={logoutUser}
              className="border border-[#A05525] rounded-lg px-4 py-2 text-[#A05525] font-semibold hover:bg-[#A05525] hover:text-white transition cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              className="border border-[#A05525] rounded-lg px-4 py-2 text-[#A05525] font-semibold flex items-center gap-2 hover:bg-[#A05525] hover:text-white transition"
            >
              Login <FaArrowRight />
            </NavLink>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="cursor-pointer">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden absolute z-100 left-0 right-0 bg-[#FFF7F2] px-4 pb-4 flex flex-col gap-4">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? `${linkStyle} text-[#004F35]`
                : `${linkStyle} text-[#A05525] hover:text-[#004F35]`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/courses"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? `${linkStyle} text-[#004F35]`
                : `${linkStyle} text-[#A05525] hover:text-[#004F35]`
            }
          >
            Courses
          </NavLink>

          <NavLink
            to="/faq"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? `${linkStyle} text-[#004F35]`
                : `${linkStyle} text-[#A05525] hover:text-[#004F35]`
            }
          >
            FAQ
          </NavLink>

          {user ? (
            <NavLink
              to="/profile"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? `${linkStyle} text-[#004F35]`
                  : `${linkStyle} text-[#A05525] hover:text-[#004F35]`
              }
            >
              Profile
            </NavLink>
          ) : null}

          <NavLink
            to="/register"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? `${linkStyle} text-[#004F35]`
                : `${linkStyle} text-[#A05525] hover:text-[#004F35]`
            }
          >
            Register
          </NavLink>

          {user ? (
            <button
              onClick={() => {
                logoutUser();
                setMenuOpen(false);
              }}
              className="border border-[#A05525] rounded-lg px-4 py-2 text-[#A05525] font-semibold hover:bg-[#A05525] hover:text-white transition"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="border border-[#A05525] rounded-lg px-4 py-2 text-[#A05525] font-semibold flex items-center gap-2 hover:bg-[#A05525] hover:text-white transition"
            >
              Login <FaArrowRight />
            </NavLink>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
